import { createContext, useContext, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form/dist/index.ie11";

const FormContext = createContext({});

FormProvider.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  onSuccess: PropTypes.func,
  thankYouMessage: PropTypes.string,
};

FormProvider.defaultProps = {
  children: PropTypes.node,
  onSubmit: async () => null,
  onSuccess: () => null,
};

export default function FormProvider({
  children,
  onSubmit,
  onSuccess,
  thankYouMessage,
}) {
  const { handleSubmit, control, errors, register } = useForm();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const renderFields = () =>
    thankYouMessage ? !success && children : children;

  const renderThankYou = () =>
    success &&
    thankYouMessage && (
      <div className="form__thank-you">
        <p>{thankYouMessage}</p>
      </div>
    );

  const renderError = () =>
    error &&
    !success && (
      <div>
        <p>{error}</p>
      </div>
    );

  const submitHandler = handleSubmit((formData) => {
    onSubmit(formData)
      .then((resp) => {
        if (resp.error) {
          return setError(resp.error || "An error occurred.");
        }
        setSuccess(true);
        onSuccess(resp, formData);
      })
      .catch((error) => {
        setError(error.message || "An error occurred.");
      });
  });

  return (
    <FormContext.Provider
      value={{
        control,
        register,
        errors,
        useFieldArray,
      }}
    >
      <form className="form" onSubmit={submitHandler}>
        {renderFields()}
        {renderError()}
        {renderThankYou()}
      </form>
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
}
