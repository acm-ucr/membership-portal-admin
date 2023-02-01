import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default async function get5Announcements(req, res) {
  const announcements = [];

  const querySnapshot = await getDocs(collection(db, "announcement"));

  querySnapshot.forEach((doc) => {
    announcements.push({
      data: { ...doc.data(), id: doc.id },
    });
  });

  res.status(200).json(announcements);
}
