import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(30, 'Name cannot exceed 30 characters')
    .required('Required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .max(64, 'Name cannot exceed 64 characters')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
      'Please enter a valid email address'
    )
    .required('Required'),
  bookingDate: yup
    .date()
    .test(
      'startDate',
      'Booking date can not be a passed Date',
      function (date) {
        const cutoff = new Date();
        cutoff.setHours(0, 0, 0, 0);
        const selectedDate = date;
        return selectedDate >= cutoff;
      }
    )
    .required('Required'),
  comment: yup.string(),
});
