import { generateMBI } from "@/utils/helpers";

export default function handler(req, res) {
  if (req.method === "GET") {
    let MBI = generateMBI();
    res.send(MBI);
  } else {
    res.status(405).send({ error: "Method not allowed" });
  }
}
