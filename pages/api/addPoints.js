import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../firebase";

export default async function addPoints(req, res) {
  try {
    await updateDoc(doc(db, "users", req.body.result), {
      points: increment(req.body.points),
    });
    res.status(200).json({});
  } catch {
    res.status(500).json({});
  }
}
