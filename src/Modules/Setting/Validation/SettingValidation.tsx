export default function SettingValidaton(values: any) {
  const errors: any = {};
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.email) {
    errors.email = 'Email required';
  } else if (regex.test(values.email) === false) {
    errors.email = 'Email invalid';
  }
  if (!values.password) {
    errors.password = 'Password required';
  }
  if (!values.namePet) {
    errors.namePet = 'Name Pet required';
  }
  if (!values.nameOwner) {
    errors.nameOwner = 'Name Owner required';
  }
  if (!values.age) {
    errors.age = 'Age required';
  }
  if (!values.gender) {
    errors.gender = 'Gender required';
  }
  return errors;
}
