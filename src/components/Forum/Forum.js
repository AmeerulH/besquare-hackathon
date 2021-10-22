import React from "react";
import { useEffect, useState } from "react";
import "./Forum.css";
import { AddComment } from "./AddComment";
import User from "./User";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

const Forum = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let usersArray = [];
      querySnapshot.forEach((doc) => {
        usersArray.push({ ...doc.data(), id: doc.id });
      });
      usersArray.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
      setUsers(usersArray);
    });
    return () => unsub();
  }, [users]);

  return (
    //main div starts
    <div className="bg">
      <div className="comment-box">
        <h1 id="Intro">Happy Arguing Ya'll</h1>
        {/* user comments input part */}

        <AddComment />

        <div className="haha">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>

    //main div ends
  );
};

export default Forum;
