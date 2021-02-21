import db from "../../db.json";

export default function (req, res) {
  if (req.method === "OPTIONS") {
    res.status(200).end();
  }

  res.setHeader("Accress-Control-Allow-Credentials", true);
  res.setHeader("Accress-Control-Allow-origin", "*");
  res.setHeader(
    "Accress-Control-Allow-Methods",
    "GET,OPTIONS,POST,PATCH,DELETE,PUT"
  );

  res.json(db);
}
