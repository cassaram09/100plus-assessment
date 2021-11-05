import { Button } from "@/components";

SubmitField.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

SubmitField.defaultProps = {
  text: "Submit",
  className: "",
};

export default function SubmitField({ text, className }) {
  return (
    <div className={`field field-submit ${className}`}>
      <div className={"control"}>
        <Button type="info" className="submit" text={text} submit />
      </div>
    </div>
  );
}
