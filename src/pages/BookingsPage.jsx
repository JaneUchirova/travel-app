import BookingCard from "../components/BookingCard.jsx";
import "./BookingsPage.css";

function BookingPage({ bookings, onCancel }) {
  const sortedBookings = [...bookings].sort(
    (firstBooking, secondBooking) =>
      new Date(firstBooking.date) - new Date(secondBooking.date),
  );

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {sortedBookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} onCancel={onCancel} />
        ))}
      </ul>
    </main>
  );
}

export default BookingPage;
