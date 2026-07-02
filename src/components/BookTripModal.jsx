import { useState } from "react";

function getTomorrowDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function BookTripModal({ trip, onClose, onBookTrip }) {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);

  const totalPrice = trip.price * Number(guests);

  const handleSubmit = (event) => {
    event.preventDefault();

    const booking = {
      id: crypto.randomUUID(),
      tripId: trip.id,
      guests: Number(guests),
      date: `${date}T00:00:00.00Z`,
      trip: {
        title: trip.title,
        duration: trip.duration,
        price: trip.price,
      },
      totalPrice,
    };
    onBookTrip(booking);
    onClose();
  };

  return (
    <div className="modal">
      <div data-test-id="book-trip-popup" className="book-trip-popup">
        <button
          data-test-id="book-trip-popup-close"
          className="book-trip-popup__close"
          type="button"
          onClick={onClose}
        >
          ×
        </button>

        <form
          className="book-trip-popup__form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="trip-info">
            <h3
              data-test-id="book-trip-popup-title"
              className="trip-info__title"
            >
              {trip.title}
            </h3>

            <div className="trip-info__content">
              <span
                data-test-id="book-trip-popup-duration"
                className="trip-info__duration"
              >
                <strong>{trip.duration}</strong> days
              </span>

              <span
                data-test-id="book-trip-popup-level"
                className="trip-info__level"
              >
                {trip.level}
              </span>
            </div>
          </div>

          <label className="input">
            <span className="input__heading">Date</span>
            <input
              data-test-id="book-trip-popup-date"
              name="date"
              type="date"
              min={getTomorrowDate()}
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </label>

          <label className="input">
            <span className="input__heading">Number of guests</span>
            <input
              data-test-id="book-trip-popup-guests"
              name="guests"
              type="number"
              min="1"
              max="10"
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              required
            />
          </label>

          <span className="book-trip-popup__total">
            Total:
            <output
              data-test-id="book-trip-popup-total-value"
              className="book-trip-popup__total-value"
            >
              ${totalPrice}
            </output>
          </span>

          <button
            data-test-id="book-trip-popup-submit"
            className="button"
            type="submit"
          >
            Book a trip
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookTripModal;
