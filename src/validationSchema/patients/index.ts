import * as yup from 'yup';

export const patientValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  date_of_birth: yup.date().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
