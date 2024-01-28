import { api } from '../../Helper/Api/Api';
import { useEffect } from 'react';
import { IComponent } from '../../Helper/Interface/Interface';
import './About.scss';
import Loader from '../Loader/Loader';
import { Helmet } from 'react-helmet';

function About() {
  const { isLoading, data, error } = api.useGetAboutQuery({});
  const aboutData: IComponent = data;

  useEffect(() => {
    if (data) {
      return;
    } else if (error) {
      console.error('Error: ', error)
    }
  }, [data, error]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="about">
      <Helmet>
        <title>BearVibe Café</title>
        <meta name="description" content="Explore the world of NEGRAR Café  where quality Italian coffee meets remote work and co-working solutions. Discover our services, menu, and inviting atmosphere." />
      </Helmet>
      <div className="about_image">
        <img src={aboutData.data[0].attributes.image.data[0].attributes.url} alt="" />
      </div>
      <div className="about_information">
        <h2>{aboutData.data[0].attributes.title}</h2>
        <div className="about_information_description">
          <p className='about_information_description_break_word'>{aboutData.data[0].attributes.description}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
