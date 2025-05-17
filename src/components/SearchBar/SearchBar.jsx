import { Field, Form, Formik } from 'formik';
import { useId } from 'react';
import css from './SearchBar.module.css';
import clsx from 'clsx';

const initialValues = {
  chooseBrand: '',
  choosePrice: '',
  mileageFrom: '',
  mileageTo: '',
};

const SearchBar = () => {
  const chooseBrandId = useId();
  const choosePriceId = useId();
  const mileageFromId = useId();
  const mileageToId = useId();

  const handleSubmit = (values, actions) => {
    // console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.searchBar}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div className={css.fieldThumb}>
            <label htmlFor={chooseBrandId} className={css.label}>
              Car brand
            </label>
            <Field
              className={css.input}
              type="text"
              placeholder="Choose a brand"
              name="chooseBrand"
              id={chooseBrandId}
            />
          </div>

          <div className={css.fieldThumb}>
            <label htmlFor={choosePriceId} className={css.label}>
              Price/ 1 hour
            </label>
            <Field
              className={css.input}
              type="text"
              placeholder="Choose a price"
              name="choosePrice"
              id={choosePriceId}
            />
          </div>

          <div className={css.mileageThumb}>
            <div className={css.fieldThumb}>
              <label htmlFor={mileageFromId} className={css.label}>
                Сar mileage / km
              </label>
              <Field
                className={clsx(css.input, css.mileageFrom)}
                type="text"
                placeholder="From"
                name="mileageFrom"
                id={mileageFromId}
              />
            </div>

            <Field
              className={clsx(css.input, css.mileageTo)}
              type="text"
              placeholder="To"
              name="mileageTo"
              id={mileageToId}
            />
          </div>

          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
