import Image from "../Image/Image";

import logo from "../../img/logo.jpg";

export default function Logo() {
  return (
    <a href="#">
      <Image src={logo} alt="Logo" />
    </a>
  );
}
