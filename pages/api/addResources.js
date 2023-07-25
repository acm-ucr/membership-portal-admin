import { addDoc, Timestamp, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default async function addResources(req, res) {
  try {
    await addDoc(collection(db, "resources"), {
      title: req.body.result.title,
      startTime: new Timestamp(req.body.result.startTime),
      endTime: new Timestamp(req.body.result.endTime),
      slides: req.body.result.slides,
      youtube: req.body.result.youtube,
      github: req.body.result.github,
    });
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).json({});
  }
}
