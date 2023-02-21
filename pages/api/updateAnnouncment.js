import { updateDoc, Timestamp, doc } from "firebase/firestore";
import { db } from "../../firebase";

export default async function updateAnnouncement(req, res) {
  try {
    await updateDoc(doc(db, "announcement", req.body.id), {
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
