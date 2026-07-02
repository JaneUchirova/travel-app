import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import initialBookings from "./assets/data/bookings.json";
import initialTrips from "./assets/data/trips.json";
import Layout from "./components/Layout.jsx";
import BookingsPage from "./pages/BookingsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import TripPage from "./pages/TripPage.jsx";

function App() {
  const [trips] = useState(initialTrips);
  const [bookings, setBookings] = useState(initialBookings);

  const handleBookTrip = (booking) => {
    setBookings((currentBookings) => [...currentBookings, booking]);
  };

  const handleCancelBooking = (bookingId) => {
    setBookings((currentBookings) =>
      currentBookings.filter((booking) => booking.id !== bookingId),
    );
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage trips={trips} />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />

        <Route
          path="/trip/:tripId"
          element={<TripPage trips={trips} onBookTrip={handleBookTrip} />}
        />

        <Route
          path="/bookings"
          element={
            <BookingsPage bookings={bookings} onCancel={handleCancelBooking} />
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
