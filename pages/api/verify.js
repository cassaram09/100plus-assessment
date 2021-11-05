import { verifyMBI } from "@/utils/helpers";

export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    let valid = verifyMBI(req.body.mbi);
    res.send({ valid });
  } else {
    res.status(405).send({ error: "Method not allowed" });
  }
}
