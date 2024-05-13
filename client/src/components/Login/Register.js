import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoImages } from "react-icons/io5";
import image from "../../image/signup-image.jpg";
import { useDispatch } from "react-redux";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch();

  function onSubmit(data) {
    if (!(data.firstName && data.lastName && data.email && data.password)) return;
    dispatch({ type: "ADD_USER", payload: { ...data, image: "", role: "USER" } });
    navigate("/login")
  }

  return (
    <div className="mainLogin">
      <section class="signup">
        <div class="containerLogin">
          <div class="signup-content">
            <div class="signup-form">
              <h2 class="form-title">Sign up</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group">
                  <label for="fname">
                    <BiSolidUser />
                  </label>
                  <input
                    {...register("firstName")}
                    type="text"
                    id="name"
                    placeholder="First Name"
                  />
                </div>
                <div class="form-group">
                  <label for="lname">
                    <BiSolidUser />
                  </label>
                  <input
                    {...register("lastName")}
                    type="text"
                    id="lname"
                    placeholder="Last Name"
                  />
                </div>
                <div class="form-group">
                  <label for="email">
                    <MdEmail />
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <label for="pass">
                    <BiSolidLockAlt />
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    id="pass"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    class="form-submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>
            <div class="signup-image">
              <figure>
                <img src={image} />
              </figure>
              <Link to={"/login"}>I have an account</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
