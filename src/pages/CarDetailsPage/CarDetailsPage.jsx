import { useParams } from 'react-router-dom';

const CarDetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  return <div>CarDetailsPage</div>;
};

export default CarDetailsPage;
