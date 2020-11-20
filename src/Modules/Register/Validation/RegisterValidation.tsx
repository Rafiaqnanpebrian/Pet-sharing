export default function RegisterValidation(values: any) {
  const errors: any = {};
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.email) {
    errors.email = 'Email required';
  } else if (regex.test(values.email) === false) {
    errors.email = 'Email invalid';
  }
  if (!values.password) {
    errors.password = 'Password requred';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 characters';
  }
  if (!values.namePet) {
    errors.namePet = 'Name Pet requred';
  }
  if (!values.nameOwner) {
    errors.nameOwner = 'Name Owner requred';
  }
  if (!values.age) {
    errors.age = 'Age requred';
  }
  if (!values.gender) {
    errors.gender = 'Gender requred';
  }
  return errors;
}
