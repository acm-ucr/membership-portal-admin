// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { getCountFromServer, collection } from "firebase/firestore";
// import { db } from "../../firebase";

export default async function getCount(req, res) {
  res.status(200).json({
    total_users: 0,
    computer_science: 0,
    data_science: 0,
  });
}
