import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export const AddComment = () => {
  const [Name, setName] = useState("");
  const [Comment, setComment] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "users"), {
      Name,
      Comment,
      createdAt: new Date(),
    });
    setName("");
    setComment("");
  };

  return (
    <div className="username-box">
      <form>
        <form onSubmit={handleSubmit} />
        <div className="">
          <input
            className="username"
            type="text"
            required
            placeholder="Your Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-comment">
          <textarea
            className="form-control"
            id="incomment"
            rows="4"
            placeholder="Share your thoughts here..."
            value={Comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        <div>
          <button
            disabled={!(Name, Comment)}
            onClick={handleSubmit}
            type="button"
            class="btn btn-outline-primary btn-rounded btn-lg"
            data-mdb-ripple-color="dark"
          >
            Bring It On!!
          </button>
        </div>
      </form>
    </div>
  );
};
