import "./Tag.css";

export default function Tag({ tag }) {
  return (
    <li className={tag === "admin" ? "tag tag--highlight" : "tag"}>{tag}</li>
  );
}
