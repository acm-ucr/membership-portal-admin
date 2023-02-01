import { updateDoc, Timestamp, doc } from "firebase/firestore";
import { db } from "../../firebase";

export default async function updateAnnouncement(req, res) {
  try {
    await updateDoc(doc(db, "announcement", req.body.result.id), {
      details: req.body.result.details,
      location: req.body.result.location,
      title: req.body.result.title,
      time: new Timestamp(req.body.result.time),
      type: req.body.result.type,
    });
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).json({});
  }
}
