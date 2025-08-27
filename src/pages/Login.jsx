import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none">
        <h4 className="text-3xl font-semibold text-center mt-14">Login your account</h4>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input w-full input-bordered" placeholder="Enter your email address" />
            <label className="label">Password</label>
            <input type="password" className="input w-full input-bordered" placeholder="Enter your Password" />
            <button className="btn btn-neutral mt-4 rounded-none w-full">Login</button>
            <p className="font-semibold mt-7 text-center">Don’t Have An Account ? <Link className="text-green-600" to="/auth/register">Register</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
