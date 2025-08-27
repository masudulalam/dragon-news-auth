import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none">
        <h4 className="text-3xl font-semibold text-center mt-14">
          Register your account
        </h4>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input
              type="text"
              className="input w-full input-bordered"
              placeholder="Enter your name"
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input w-full input-bordered"
              placeholder="Enter your Photo URL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full input-bordered"
              placeholder="Enter your email address"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full input-bordered"
              placeholder="Enter your Password"
            />
            <fieldset className="fieldset bg-base-100 border-base-300  w-72 border p-4 mt-3">
              <label className="label">
                <input type="checkbox"  className="checkbox" />
                Accept Terms & Conditions.
              </label>
            </fieldset>
            <button className="btn btn-neutral mt-4 rounded-none w-full">
              Register
            </button>
            <p className="font-semibold mt-7 text-center">Already Have An Account ? <Link className="text-green-600" to="/auth/Login">Login</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
