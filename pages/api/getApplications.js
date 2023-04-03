import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default async function getApplications(req, res) {
  const applications = [];

  const querySnapshot = await getDocs(collection(db, "applications"));

  querySnapshot.forEach((doc) => {
    applications.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  res.status(200).json(applications);
}
