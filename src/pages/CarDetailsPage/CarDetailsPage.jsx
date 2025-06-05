import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../schemas/schemas';
import css from './CarDetailsPage.module.css';
import clsx from 'clsx';
import toast from 'react-hot-toast';

const CarDetailsPage = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const cutDate = new Date().toISOString().slice(0, 10);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  useEffect(() => {
    async function fetchCarById() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://car-rental-api.goit.global/cars/${id}`
        );
        setCarDetails(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCarById();
  }, []);

  const onSubmit = data => {
    console.log(data);
    toast.success(
      `The ${carDetails.brand} ${carDetails.model} has been successfully reserved!`
    );
  };

  return (
    <div className={css.centerPage}>
      {loading && (
        <p className={css.messageText}>Loading data, please wait...</p>
      )}
      <BeatLoader color={'blue'} loading={loading} size={10} />
      {error && (
        <p className={css.messageText}>
          Whoops, something went wrong! Please try to reload this page!
        </p>
      )}

      {carDetails.id !== undefined && (
        <div className={css.carDetailsPage}>
          <div className={css.leftSide}>
            <img
              className={css.img}
              src={carDetails.img}
              width="640"
              height="512"
            />
            <div className={css.formThumb}>
              <h2 className={clsx(css.carSubTitle, css.carSubTitleMB)}>
                Book your car now
              </h2>
              <p className={css.greyText}>
                Stay connected! We are always ready to help you.
              </p>

              <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                <ul className={css.formList}>
                  <li className={css.inputThumb}>
                    <input
                      type="text"
                      {...register('name')}
                      className={css.input}
                      placeholder="Name*"
                    />
                    <div className={css.errorMessage}>
                      {errors.name?.message}
                    </div>
                  </li>
                </ul>

                <ul className={css.formList}>
                  <li className={css.inputThumb}>
                    <input
                      type="text"
                      {...register('email')}
                      className={css.input}
                      placeholder="Email*"
                    />
                    <div className={css.errorMessage}>
                      {errors.email?.message}
                    </div>
                  </li>
                </ul>

                <ul className={css.formList}>
                  <li className={css.inputThumb}>
                    <input
                      type="date"
                      {...register('bookingDate')}
                      className={css.input}
                      // placeholder="Booking date"
                      min={cutDate}
                    />
                    <div className={css.errorMessage}>
                      {errors.bookingDate?.message}
                    </div>
                  </li>
                </ul>

                <ul className={css.formList}>
                  <li className={css.inputThumb}>
                    <textarea
                      {...register('comment')}
                      className={clsx(css.input, css.textarea)}
                      placeholder="Comment"
                    />
                    <div className={css.errorMessage}>
                      {errors.comment?.message}
                    </div>
                  </li>
                </ul>

                <button className={css.button} type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className={css.detailsThumb}>
            <h1 className={css.carTitle}>
              {carDetails.brand} {carDetails.model}, {carDetails.year}
              <span className={css.carTextId}>
                Id: {carDetails.id.substring(0, 13)}
              </span>
            </h1>

            <div className={css.addressThumb}>
              <svg className={css.icon}>
                <use href={'/icons.svg#icon-location'}></use>
              </svg>
              <p>
                {carDetails.address.split(',').slice(1, 2)},
                {carDetails.address.split(',').slice(2, 3)}
                <span className={css.carTextMileage}>
                  Mileage:{' '}
                  {carDetails.mileage
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                  km
                </span>
              </p>
              <p></p>
            </div>

            <p className={css.carTextPrice}>${carDetails.rentalPrice}</p>

            <p className={css.carDescription}>{carDetails.description}</p>

            <ul className={css.mainList}>
              <li>
                <h2 className={css.carSubTitle}>Rental Conditions: </h2>
                <ul className={css.subList}>
                  {carDetails.rentalConditions.map(detail => (
                    <li key={detail} className={css.subItem}>
                      <svg className={css.icon}>
                        <use href={'/icons.svg#icon-check-circle'}></use>
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h2 className={css.carSubTitle}>Car Specifications: </h2>
                <ul className={css.subList}>
                  <li className={css.subItem}>
                    <svg className={css.icon}>
                      <use href={'/icons.svg#icon-calendar'}></use>
                    </svg>
                    Year: {carDetails.year}
                  </li>
                  <li className={css.subItem}>
                    <svg className={css.icon}>
                      <use href={'/icons.svg#icon-car'}></use>
                    </svg>
                    Type: {carDetails.type}
                  </li>
                  <li className={css.subItem}>
                    <svg className={css.icon}>
                      <use href={'/icons.svg#icon-fuel-pump'}></use>
                    </svg>
                    Fuel Consumption: {carDetails.fuelConsumption}
                  </li>
                  <li className={css.subItem}>
                    <svg className={css.icon}>
                      <use href={'/icons.svg#icon-gear'}></use>
                    </svg>
                    Engine Size: {carDetails.engineSize}
                  </li>
                </ul>
              </li>
              <li>
                <h2 className={css.carSubTitle}>
                  Accessories and functionalities:
                </h2>
                <ul className={css.subList}>
                  {carDetails.accessories.map(accessorie => (
                    <li key={accessorie} className={css.subItem}>
                      <svg className={css.icon}>
                        <use href={'/icons.svg#icon-check-circle'}></use>
                      </svg>
                      {accessorie}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetailsPage;
