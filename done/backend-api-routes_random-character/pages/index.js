import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR("/api/random-character", fetcher, {
    refreshInterval: 3000,
  });

  if (isLoading) {
    return <p>is Loading...</p>;
  }
  if (error) {
    return <p>ERROR!!!</p>;
  }

  const { first_name, last_name, birthday, twitter } = data;

  return (
    <>
      <h1>Get a random character every 3 seconds:</h1>
      <p>
        name: {first_name} {last_name}
      </p>
      <p>birthday: {birthday}</p>
      <p>twitter: {twitter}</p>
    </>
  );
}
