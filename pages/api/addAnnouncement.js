import React from "react";
import { addDoc, Timestamp, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default async function addAnnouncement(req, res) {
  try {
    await addDoc(collection(db, "announcement"), {
      details: req.body.result.details,
      location: req.body.result.location,
      title: req.body.result.title,
      time: new Timestamp(req.body.result.time),
      type: req.body.result.type,
    });
    console.log(req.body.result);
    console.log(req.body.result.time);
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).json({});
  }
}
