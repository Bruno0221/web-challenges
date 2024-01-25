import "./styles.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Link from "./components/Link/Link";
import Logo from "./components/Logo/Logo";
import Avatar from "./components/Avatar/Avatar";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Nav>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Nav>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
