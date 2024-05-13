import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function All() {
  const eatsAll = useSelector((state) => state.eatReducer.eatsAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_EATS_ALL" });
  }, []);

  return (
    <>
      {eatsAll.map((eat, index) => (
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
            <button onClick={()=>console.log("Hello")}>Purchase</button>
          </div>
        </div>
      ))}
    </>
  );
}
