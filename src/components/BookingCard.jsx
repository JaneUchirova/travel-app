function BookingCard({ booking, onCancel }) {
  return (
    <li data-test-id="booking" className="booking">
      <h3 data-test-id="booking-title" className="booking__title">
        {booking.trip.title}
      </h3>

      <span data-test-id="booking-guests" className="booking__guests">
        {booking.guests} {booking.guests === 1 ? "guest" : "guests"}
      </span>

      <span data-test-id="booking-date" className="booking__date">
        {booking.date.slice(0, 10)}
      </span>

      <span data-test-id="booking-total" className="booking__total">
        ${booking.totalPrice}
      </span>

      <button
        data-test-id="booking-cancel"
        className="booking__cancel"
        title="Cancel booking"
        type="button"
        onClick={() => onCancel(booking.id)}
      >
        <span className="visually-hidden">Cancel booking</span>×
      </button>
    </li>
  );
}

export default BookingCard;
