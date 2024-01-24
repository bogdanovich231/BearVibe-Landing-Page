import { api } from '../../Helper/Api/Api';
import { useEffect } from 'react';
import { IAbout } from '../../Helper/Interface/Interface';
import './About.scss';
import Loader from '../Loader/Loader';

function About() {
  const { isLoading, data, error } = api.useGetAboutQuery({});
  const aboutData: IAbout = data;

  useEffect(() => {
    if (data) {
    } else if (error) {
    }
  }, [data, error]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="about">
      <div className="about_image">
        <img src={aboutData.data[0].attributes.image.data[0].attributes.url} alt="" />
      </div>
      <div className="about_information">
        <h2>{aboutData.data[0].attributes.title}</h2>
        <p>{aboutData.data[0].attributes.description}</p>
      </div>
    </div>
  );
}

export default About;
