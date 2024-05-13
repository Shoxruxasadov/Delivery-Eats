import { Link } from "react-router-dom";
import { BsFillHouseFill, BsPlusCircleFill } from "react-icons/bs";
import { HiLogout } from "react-icons/hi";

export default function Orders() {
  return (
    <>
      <div className="navbar">
        <div className="home">
          <Link to="/admin">
            <BsFillHouseFill />
          </Link>
        </div>
        <Link to="/">
          <span>EXIT</span>
          <HiLogout />
        </Link>
      </div>
      <div className="content goods">
        <h1>Orders</h1>
      </div>
    </>
  );
}
