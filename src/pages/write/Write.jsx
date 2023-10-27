import React, { useEffect, useReducer, useRef } from "react";
import "./write.css";
import defaultWImg from "../../assets/images/image.png";

let initialImg = "";
const reducer = (state, action) => {
  switch (action.type) {
    case "image":
      let image = URL.createObjectURL(action.e.target.files[0]);
      return image;
  }
};
export default function Write() {
  const [displayImage, dispatch] = useReducer(reducer, initialImg);
  let count = useRef(0);

  function displayFileImage(e) {
    count.current += 1;
    dispatch({
      type: "image",
      e,
    });
  }
  console.log(count.current);
  let id;
  useEffect(() => {
    localStorage.setItem("lala", displayImage);
  }, [count.current]);
  id = localStorage.getItem("lala");
  return (
    <div className="write">
      <div className="formImg">
        <img style={{}} className="😅" src={id} alt="river-img" />
      </div>

      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => {
              displayFileImage(e);
            }}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            placeholder="Tell your story..."
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
