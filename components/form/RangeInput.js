import { Controller } from "react-hook-form/dist/index.ie11";
import { useFormContext, Label, ErrorMessage } from ".";
import InputRange from "react-input-range";

RangeInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  rules: PropTypes.object,
  className: PropTypes.string,
  defaultValue: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
  min: PropTypes.number,
  max: PropTypes.number,
};

RangeInput.defaultProps = {
  name: "input",
  label: "Label",
  defaultValue: { min: undefined, max: undefined },
  className: "",
  onUpdate: () => null,
};

export default function RangeInput({
  name,
  label,
  rules,
  className,
  defaultValue,
  min,
  max,
}) {
  const { control, errors } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ onChange, value = "" }) => (
        <div className={`field field-range-input ${className}`}>
          <Label value={label} />
          <div className={"control"}>
            <span>
              {value.min} - {value.max}
            </span>
            <InputRange
              minValue={min}
              maxValue={max}
              value={value}
              onChange={onChange}
            />
          </div>
          <ErrorMessage error={errors[name]} />
        </div>
      )}
    />
  );
}
