export default function HomeValidation(values: any) {
  const errors: any = {};
  if (!values.descPost) {
    errors.descPost = 'Column required';
  }
  return errors;
}
