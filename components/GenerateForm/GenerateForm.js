import { Button } from "@/components";
import styles from "./generate_form.module.scss";
import { _classes } from "@/utils/helpers";
import API from "@/utils/API";
import { useState } from "react";

const cl = _classes(styles);
export default function GenerateForm() {
  const api = new API("/api");
  const [MBI, setMBI] = useState();
  return (
    <div className={cl(["_", "box"])}>
      <h2 className="title">Generate MBI</h2>
      <Button
        onClick={async () => {
          const data = await api.get("/generate");
          setMBI(data);
        }}
        text="Generate"
      />

      {MBI && <p>Your MBI is: {MBI}</p>}
    </div>
  );
}
