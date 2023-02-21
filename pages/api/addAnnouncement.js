import { addDoc, Timestamp, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default async function addAnnouncement(req, res) {
  try {
    await addDoc(collection(db, "announcement"), {
      details: req.body.details,
      location: req.body.location,
      title: req.body.title,
      time: new Timestamp(req.body.time),
      type: req.body.type,
    });
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).json({});
  }
}
