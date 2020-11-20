export default function EventValidation(values: any) {
  const errors: any = {};
  if (!values.nameEvent) {
    errors.nameEvent = 'Name Event required';
  }
  if (!values.location) {
    errors.location = 'Location required';
  }
  if (!values.descEvent) {
    errors.descEvent = 'Description required';
  }
  if (!values.date) {
    errors.date = 'Date requred';
  }
  return errors;
}
