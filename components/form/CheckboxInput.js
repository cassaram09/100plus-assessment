import { Controller } from "react-hook-form/dist/index.ie11";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import { useFormContext } from "./FormProvider";

CheckboxInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  rules: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  checked: PropTypes.bool,
};

CheckboxInput.defaultProps = {
  name: "checkbox",
  label: "Label",
  className: "",
  value: "true",
};

export default function CheckboxInput({
  name,
  label,
  rules,
  className,
  disabled,
  checked,
  value,
}) {
  const { control, errors } = useFormContext();

  const sortByIndex = (a, b) =>
    value.findIndex((v) => v === a) - value.findIndex((v) => v === b);

  const defaultValue = () => {
    return checked ? (Array.isArray(value) ? value.join(", ") : value) : false;
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue()}
      render={({ onChange, value: _value }) => {
        if (Array.isArray(value)) {
          return (
            <ul className="fieldgroup fieldgroup-checkbox">
              <Label value={label} />
              {value.map((val, index) => (
                <li className={"field field-checkbox" + className} key={index}>
                  <div className={"control"}>
                    <input
                      disabled={disabled}
                      onChange={(e) => {
                        let arr =
                          typeof _value === "string" ? _value.split(", ") : [];

                        let updated = e.target.checked
                          ? arr.concat(e.target.value)
                          : arr.filter((v) => v !== e.target.value);

                        onChange(updated.sort(sortByIndex).join(", "));
                      }}
                      type={"checkbox"}
                      name={name}
                      value={val}
                      className={"checkbox"}
                      aria-label={name}
                    />
                    <div className={"checkbox-toggle"}>
                      <div />
                    </div>
                  </div>

                  <Label value={val} />
                  <ErrorMessage error={errors[name]} />
                </li>
              ))}
            </ul>
          );
        }

        return (
          <div className={"field field-checkbox" + className}>
            <div className={"control"}>
              <input
                disabled={disabled}
                onChange={(e) =>
                  onChange(e.target.checked ? e.target.value : false)
                }
                type={"checkbox"}
                name={name}
                value={_value}
                checked={_value}
                className={"checkbox"}
              />
              <div className={"checkbox-toggle"}>
                <div />
              </div>
            </div>

            <Label value={label} />
            <ErrorMessage error={errors[name]} />
          </div>
        );
      }}
    />
  );
}
