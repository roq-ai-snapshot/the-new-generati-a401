import * as yup from 'yup';

export const learningResourceValidationSchema = yup.object().shape({
  name: yup.string().required(),
});
