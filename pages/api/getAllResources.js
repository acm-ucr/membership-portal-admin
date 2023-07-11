// Next.js API route support: https://nextjs.org/docs/api-routes/in troduction
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default async function getAllResources(req, res) {
  const resources = [];

  const querySnapshot = await getDocs(collection(db, "resources"));

  querySnapshot.forEach((doc) => {
    resources.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  res.status(200).json(resources);
}
