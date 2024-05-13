import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidLockAlt } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import image from "../../image/signin-image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Login() {
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("permit", JSON.stringify(currentUser));
    if (JSON.parse(localStorage.getItem("permit")).length === 0) return;
    navigate("/");
  }, [onSubmit]);

  function onSubmit(data) {
      dispatch({ type: "CURRENT_USER", payload: data });
  }

  return (
    <div className="mainLogin">
      <section className="sign-in">
        <div className="containerLogin">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={image} />
              </figure>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Login</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="your_email">
                    <MdEmail />
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="your_email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="your_pass">
                    <BiSolidLockAlt />
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    id="your_pass"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group form-button">
                  <input type="submit" className="form-submit" value="Log in" />
                </div>
              </form>
              <div className="social-login">
                <Link to={"/register"}>Create an account</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
