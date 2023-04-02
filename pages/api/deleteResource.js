import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default async function addResources(req, res) {
  await deleteDoc(doc(db, "resources", req.body.id));
  res.status(200).json();
}
