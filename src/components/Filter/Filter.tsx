import { Formik } from "formik";
import { Field, FormField } from "./Filter.styled";
import FormValues from "../../interfaces/Filter.interface";

export const Filter = ({
  onSearch,
}: {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const initialValues: FormValues = { name: "" };
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <>
        <FormField htmlFor="filter">Find contacts by name</FormField>
        <Field type="text" name="filter" onChange={onSearch}></Field>
      </>
    </Formik>
  );
};
