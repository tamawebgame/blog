import '../src/App.css';
import Header from '../src/components-v2/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
