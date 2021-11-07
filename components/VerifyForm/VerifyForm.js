import { FormProvider, StandardInput, SubmitInput } from "@/components/form";
import API from "@/utils/API";
import styles from "./verify_form.module.scss";
import { _classes } from "@/utils/helpers";
import { useState } from "react";

const cl = _classes(styles);

VerifyForm.propTypes = {};

VerifyForm.defaultProps = {};

export default function VerifyForm({}) {
  const [verified, setVerified] = useState(null);
  return (
    <div className={cl(["_", "box"])}>
      <div>
        <FormProvider
          onSubmit={(data) => new API(`/api`).post("/verify", data)}
          onSuccess={(data) => setVerified(data.valid)}
        >
          <h2 className="title">Verify MBI</h2>
          <div className="row">
            <StandardInput
              name={"mbi"}
              label={"MBI"}
              rules={{ required: "MBI is required" }}
            />
          </div>
          <div className="row">
            <SubmitInput text="Verify" />
          </div>
        </FormProvider>

        {verified !== null && (
          <p>{verified ? "Your MBI is valid" : "Your MBI is invalid"}</p>
        )}
      </div>
    </div>
  );
}
