import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SaveImgs() {
  let imgs = useSelector((state) => state.imgs);
  let dispatch = useDispatch();

  return (
    <>
      <div className="saveImgs container py-5">
        {imgs.length > 0 ? (
          imgs.map((img, index) => (
            <div className="card" key={index}>
              <img
                id={`btn-${index}`}
                src={img}
                className="card-img-top"
                alt="..."
              />
              <button
                id={`btn-${index}`}
                className="btn btn-danger text-white mt-2 "
                onClick={() => {
                  dispatch({
                    type: "REMOVE_IMG",
                    payload: img,
                  });
                }}
              >
                Remove this image
              </button>
            </div>
          ))
        ) : (
          <h1 className="text-center mt-5 text-center">No images saved yet</h1>
        )}
      </div>
    </>
  );
}
