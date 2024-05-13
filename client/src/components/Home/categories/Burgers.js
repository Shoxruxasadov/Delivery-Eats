import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Burgers() {
  const burgers = useSelector((state) => state.eatReducer.burgers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_BURGERS" });
  }, []);

  return (
    <>
      {burgers.map((eat, index) => (
        <div key={index} className="eat">
          <div className="header-eat">
            <img src={eat.image} />
          </div>
          <div className="main-eat">
            <h3>{eat.name}</h3>
            <h3>Price: {eat.price}$</h3>
          </div>
          <hr />
          <div className="footer-eat">
            <button>Purchase</button>
          </div>
        </div>
      ))}
    </>
  );
}
