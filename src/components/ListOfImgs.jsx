import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

let imgs = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/id/237/200/300",
];

export default function ListOfImgs() {
  let dispatch = useDispatch();
  let listImgs = useSelector((state) => state.imgs);

  // Refs to the aside and close buttons
  const asideRef = useRef(null);
  const closeRef = useRef(null);

  // State to store the list of saved images
  let [arrayOfImgs, setArrayOfImgs] = useState([]);
  /*
  Function to save an image
  The event object triggered by clicking the "Save this image" button
  */
  let saveImge = (e) => {
    // Get the source of the image clicked
    let imgSrc = e.currentTarget.previousSibling.src;

    if (listImgs.includes(imgSrc)) {
      alert("already saved");
      return;
    }
    dispatch({
      type: "SAVE_IMG",
      payload: e.currentTarget.previousSibling.src,
    });

    // Check if the image is already saved
    if (arrayOfImgs.includes(imgSrc)) {
      alert("already saved");
      return;
    }

    // Add the image to the list of saved images
    arrayOfImgs.push(imgSrc);
    setArrayOfImgs([...arrayOfImgs]);

    // Show the list of saved images
    if (asideRef.current) {
      asideRef.current.style.right = "0";
    }
  };

  // Function to close the list of saved images
  let close = () => {
    // Hide the list of saved images
    if (asideRef.current) {
      asideRef.current.style.right = "-25vw";
    }
  };

  return (
    <>
      <main className="container py-5">
        {/* Map over the list of images and render each image with a "Save this image" button */}
        {imgs.map((img, index) => (
          <div className="card" key={index}>
            <img
              id={`btn-${index}`}
              src={img}
              className="card-img-top"
              alt="..."
            />
            <button
              id={`btn-${index}`}
              className="btn btn-info text-white mt-2 "
              onClick={(e) => saveImge(e)}
            >
              Save this image
            </button>
          </div>
        ))}
      </main>
      {/* Render the list of saved images as an aside */}
      <aside className="bg-dark text-white py-5" ref={asideRef}>
        <div className="w-25 mb-3">
          {/* Map over the list of saved images and render each image */}
          {arrayOfImgs.map((img, index) => (
            <img src={img} key={index} />
          ))}
        </div>
        {/* Render a "close" button */}
        <button className="btn btn-danger close" onClick={close} ref={closeRef}>
          close
        </button>
      </aside>
    </>
  );
}
