import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { Timestamp } from "firebase/firestore";

export default async function handler(req, res) {
  try {
    await setDoc(doc(db, "users", req.body.id), {
      major: req.body.major,
      year: req.body.year,
      start: Timestamp.now(),
      row: 0,
      points: 0,
    });
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).json({});
  }
}
