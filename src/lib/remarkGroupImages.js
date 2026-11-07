function isImageOnlyParagraph(node) {
  return (
    node?.type === "paragraph" &&
    node.children?.length > 0 &&
    node.children.every((child) => child.type === "image")
  );
}

export function remarkGroupImages() {
  return (tree) => {
    if (!tree.children?.length) {
      return;
    }

    const next = [];

    for (let i = 0; i < tree.children.length; i++) {
      const node = tree.children[i];

      if (!isImageOnlyParagraph(node)) {
        next.push(node);
        continue;
      }

      const paragraphs = [node];
      let j = i + 1;
      while (j < tree.children.length && isImageOnlyParagraph(tree.children[j])) {
        paragraphs.push(tree.children[j]);
        j++;
      }

      const images = paragraphs.flatMap((p) => p.children);

      if (images.length <= 1) {
        next.push(node);
      } else {
        next.push({
          type: "paragraph",
          children: images,
          data: {
            hName: "div",
            hProperties: { className: ["article-image-row"] },
          },
        });
      }

      i = j - 1;
    }

    tree.children = next;
  };
}
