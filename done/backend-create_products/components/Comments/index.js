export default function Comments({ reviews }) {
  return (
    <>
      <h3>Comments</h3>
      <ul>
        {reviews.map(({ _id, rating, text }) => (
          <li key={_id}>
            <p>
              {rating}/5: {text}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
