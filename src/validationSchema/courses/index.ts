import * as yup from 'yup';

export const courseValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  organization_id: yup.string().nullable(),
});
