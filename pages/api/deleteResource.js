import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default async function addResources(req, res) {
  try {
    await deleteDoc(doc(db, "resources", req.body.id));
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({});
  }
}
