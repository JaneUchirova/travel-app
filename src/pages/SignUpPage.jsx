import { Link, useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>

      <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="sign-up-form__title">Sign Up</h2>

        <label className="input">
          <span className="input__heading">Full name</span>
          <input
            data-test-id="auth-full-name"
            name="full-name"
            type="text"
            required
          />
        </label>

        <label className="input">
          <span className="input__heading">Email</span>
          <input data-test-id="auth-email" name="email" type="email" required />
        </label>

        <label className="input">
          <span className="input__heading">Password</span>
          <input
            data-test-id="auth-password"
            name="password"
            type="password"
            minLength={3}
            maxLength={20}
            autoComplete="new-password"
            required
          />
        </label>

        <button data-test-id="auth-submit" className="button" type="submit">
          Sign Up
        </button>
      </form>

      <span>
        Already have an account?{" "}
        <Link
          data-test-id="auth-sign-in-link"
          to="/sign-in"
          className="sign-up-form__link"
        >
          Sign In
        </Link>
      </span>
    </main>
  );
}

export default SignUpPage;
