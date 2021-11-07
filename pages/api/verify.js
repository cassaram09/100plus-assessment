import { verifyMBI } from "@/utils/helpers";

export default function handler(req, res) {
  if (req.method === "POST") {
    if (!req.body.mbi) {
      return res.status(400).send({ error: "parameter 'mbi' is required" });
    }

    let valid = verifyMBI(req.body.mbi);
    res.send({ valid });
  } else {
    res.status(405).send({ error: "Method not allowed" });
  }
}
