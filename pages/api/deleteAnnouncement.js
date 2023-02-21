import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default async function deleteAnnouncement(req, res) {
    console.log(req.body)
  try {
    await deleteDoc(doc(db, "announcement", req.body.id));
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).json({});
  }
}
