import { Controller } from "react-hook-form/dist/index.ie11";
import { useFormContext, Label, ErrorMessage } from ".";

StandardInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  rules: PropTypes.object,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

StandardInput.defaultProps = {
  name: "input",
  label: "Label",
  placeholder: "",
  type: "text",
  defaultValue: "",
  className: "",
  middleware: (value) => value,
};

export default function StandardInput({
  name,
  placeholder,
  type,
  label,
  rules,
  className,
  defaultValue,
  disabled,
  middleware,
}) {
  const { control, errors } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ onChange, value = "" }) => (
        <div
          className={`field field-input ${className}`}
          style={{ display: type === "hidden" ? "none" : "block" }}
        >
          <Label value={label} />
          <div className={"control"}>
            <input
              disabled={disabled}
              onChange={(e) => onChange(middleware(e.target.value))}
              type={type}
              name={name}
              value={value}
              placeholder={placeholder}
              className={"input"}
              aria-label={name}
            />
          </div>
          <ErrorMessage error={errors[name]} />
        </div>
      )}
    />
  );
}
