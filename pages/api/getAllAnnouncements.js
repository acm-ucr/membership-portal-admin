import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default async function get5Announcements(req, res) {
  const announcements = [];

  const querySnapshot = await getDocs(collection(db, "announcements"));

  querySnapshot.forEach((doc) => {
    announcements.push({
      title: doc.id,
      data: doc.data(),
    });
  });

  res.status(200).json(announcements);
}
