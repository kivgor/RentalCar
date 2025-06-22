import { Field, Form, Formik } from 'formik';
import { useEffect, useId, useState } from 'react';
import css from './SearchBar.module.css';
import clsx from 'clsx';
import toast from 'react-hot-toast';
import axios from 'axios';

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

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function fetchBrands() {
      try {
        const { data } = await axios.get(
          'https://car-rental-api.goit.global/brands'
        );

        setBrands(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBrands();
  }, []);

  const handleSubmit = values => {
    console.log(values);
    if (
      values.chooseBrand.trim() === '' &&
      values.choosePrice.trim() === '' &&
      values.mileageFrom.trim() === '' &&
      values.mileageTo.trim() === ''
    ) {
      toast.success('Please enter search term!');
      return;
    }
  };

  return (
    <div className={css.searchBar}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div className={css.fieldThumb}>
            <label htmlFor={chooseBrandId} className={css.label}>
              Car brand
            </label>
            {/* <div className={css.fieldThumb}> */}
            <Field
              as="select"
              className={css.input}
              placeholder="Choose a brand"
              name="chooseBrand"
              id={chooseBrandId}
            >
              <option value="">--</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </Field>

            {/* <svg className={css.chevronDown}>
                <use href={'/icons.svg#icon-chevron-down'}></use>
              </svg>
            </div> */}
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
            Submit
          </button>
          {/* <Button width="narrow" color="blue">
            Search
          </Button> */}
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
