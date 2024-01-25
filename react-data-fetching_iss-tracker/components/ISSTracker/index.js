import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ISSTracker() {
  const { data, isLoading, error, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 1000,
  });

  if (isLoading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>ERROR!!!</p>;
  }

  const { longitude, latitude } = data;

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={() => {
          mutate();
        }}
      />
    </main>
  );
}
