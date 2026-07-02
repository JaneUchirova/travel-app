import { useState } from "react";
import TripCard from "../components/TripCard.jsx";
import TripsFilter from "../components/TripsFilter.jsx";

function HomePage({ trips }) {
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");

  const normalizedSearch = search.trim().toLowerCase();

  const filteredTrips = trips.filter((trip) => {
    const matchesSearch =
      trip.title.toLowerCase().search(normalizedSearch) !== -1;

    const matchesLevel = level === "" || trip.level === level;

    const matchesDuration =
      duration === "" ||
      (duration === "0_x_5" && trip.duration >= 1 && trip.duration <= 5) ||
      (duration === "5_x_10" && trip.duration >= 6 && trip.duration <= 10) ||
      (duration === "10" && trip.duration >= 11);

    return matchesSearch && matchesLevel && matchesDuration;
  });

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>

      <TripsFilter
        search={search}
        duration={duration}
        level={level}
        onSearchChange={(event) => setSearch(event.target.value)}
        onDurationChange={(event) => setDuration(event.target.value)}
        onLevelChange={(event) => setLevel(event.target.value)}
      />

      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>

        <ul className="trip-list">
          {filteredTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default HomePage;
