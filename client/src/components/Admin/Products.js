import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rodal from "rodal";
import { useForm } from "react-hook-form";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { BsFillHouseFill, BsPlusCircleFill } from "react-icons/bs";
import { HiLogout } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";

export default function DefaultAdmin() {
  const [rodalVisible, setRodalVisible] = useState(false);
  const [currentEatId, setCurrentEatId] = useState("");
  const [currentEats, setCurrentEats] = useState({});
  const { register, handleSubmit, reset } = useForm();

  const eatsAll = useSelector((state) => state.eatReducer.eatsAll);
  const dispatch = useDispatch();

  const [selectCategory, setSelectCategory] = React.useState("");
  const handleChange = (event) => {
    setSelectCategory(event.target.value);
  };

  useEffect(() => {
    dispatch({ type: "GET_EATS_ALL" });
  }, []);

  useEffect(() => {
    resetForm(currentEatId - 1);
  }, [currentEatId]);

  function onSubmit(data) {
    if (!(data.name && data.price && data.image && selectCategory)) return;
    
    if (currentEatId === "") {
      dispatch({
        type: "ADD_EATS",
        payload: { ...data, category: selectCategory },
      });
    } else {
      console.log("EDIT");
      dispatch({
        type: "EDIT_EAT",
        payload: { ...data, category: selectCategory, id: currentEatId },
      });
    }
    
    setCurrentEatId("")
    setRodalVisible(false);
  }

  function resetForm(id) {
    if (currentEatId === "") {
      console.log("BO'SH BO'LSIN CURRENT");
      setSelectCategory("");
      reset({
        name: "",
        price: "",
        image: "",
      });
    } else {
      console.log("CURRENTDA SON BOR");
      setSelectCategory(eatsAll[id].category);
      reset({
        name: eatsAll[id].name,
        price: eatsAll[id].price,
        image: eatsAll[id].image,
      });
    }
  }

  return (
    <>
      <div className="navbar">
        <div className="home">
          <Link to="/admin">
            <BsFillHouseFill />
          </Link>
          <BsPlusCircleFill
            onClick={() => {
              setCurrentEatId("");
              setRodalVisible(true);
            }}
            className="addFileIcon"
          />
        </div>
        <Link to="/">
          <span>EXIT</span>
          <HiLogout />
        </Link>
      </div>
      <div className="content goods">
        <h1>Products</h1>
        <table>
          <thead>
            <tr>
              <th className="idth">Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th className="actionth">Action</th>
            </tr>
          </thead>
          <tbody>
            {eatsAll.map((item, index) => (
              <tr key={item.id}>
                <td className="id">
                  <img src={item.image} />
                  <span>{index + 1}</span>
                </td>
                <td>{item.name}</td>
                <td>{item.price}$</td>
                <td>{item.category}</td>
                <td className="actionGoods">
                  <RiEditCircleFill
                    onClick={() => {
                      setCurrentEatId(item.id);
                      setRodalVisible(true);
                    }}
                    className="fa-solid fa-pen-to-square"
                  />
                  <MdDelete className="fa-solid fa-trash" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Rodal visible={rodalVisible} onClose={() => setRodalVisible(false)}>
        <div className="rodal-header">
          {currentEatId === "" ? <h3>Add Product</h3> : <h3>Edit Product</h3>}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="rodal-main">
            <div className="inputs">
              <h4>Name</h4>
              <input
                {...register("name")}
                type="text"
                placeholder="Pizza Peperoni ..."
              />
            </div>
            <div className="inputs">
              <h4>Price</h4>
              <input {...register("price")} type="number" placeholder="5.99$" />
            </div>
            <div className="inputs">
              <h4>Category</h4>
              <FormControl sx={{ m: 1, minWidth: 390 }} size="small">
                <InputLabel id="demo-select-small-label">Pizza</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={selectCategory}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"drinks"}>Drinks</MenuItem>
                  <MenuItem value={"pizza"}>Pizza</MenuItem>
                  <MenuItem value={"burgers"}>Burgers</MenuItem>
                  <MenuItem value={"sweets"}>Sweets</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="inputs">
              <h4>Image</h4>
              <input
                {...register("image")}
                type="text"
                placeholder="https://...LINK"
              />
            </div>
          </div>
          <div className="rodal-footer">
            <div className="float-start">
              <button onClick={resetForm} type="button" className="bas">
                Remove
              </button>
            </div>
            <div className="float-end">
              <button
                type="button"
                onClick={() => setRodalVisible(false)}
                className="log"
              >
                Cancel
              </button>
              <button type="submit" className="reg">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </Rodal>
    </>
  );
}
