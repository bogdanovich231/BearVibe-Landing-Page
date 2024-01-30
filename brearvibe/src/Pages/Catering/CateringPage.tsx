import { useEffect } from 'react';
import { api } from '../../Helper/Api/Api';
import { IComponent } from '../../Helper/Interface/Interface';
import Loader from '../../Components/Loader/Loader';
import { Link } from 'react-router-dom';
import './CateringPage.scss';

function CateringPage() {
  const { isLoading, data, error } = api.useGetCateringQuery({});
  const cateringData: IComponent = data;

  useEffect(() => {
    if (data) {
      return;
    } else if (error) {
      console.error('Error: ', error);
    }
  }, [data, error]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="catering">
      <div className="catering_image">
        <img src={cateringData.data[0].attributes.image.data[0].attributes.url} alt="" />
      </div>
      <div className="catering_information">
        <h2>{cateringData.data[0].attributes.title}</h2>
        <div className="catering_information_description">
          <p>{cateringData.data[0].attributes.description}</p>
        </div>
        <div className="contacts_button">
          <Link to={'/contact-forms'} className="button">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CateringPage;
