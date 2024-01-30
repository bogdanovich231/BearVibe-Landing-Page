import { useEffect } from 'react';
import { api } from '../../Helper/Api/Api';
import { IContact } from '../../Helper/Interface/Interface';
import Loader from '../Loader/Loader';
import { Link, NavLink } from 'react-router-dom';
import mailSvg from '../../assets/mail.svg';
import phoneSvg from '../../assets/phone.svg';
import pinSvg from '../../assets/pin.svg';
import './Contact.scss';
function Contact() {
  const { isLoading, data, error } = api.useGetContactQuery({});
  const aboutData: IContact = data;

  useEffect(() => {
    if (data) {
    } else if (error) {
    }
  }, [data, error]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div id="contact" className="contacts">
      <div className="contacts_image">
        <img src={aboutData.data[0].attributes.image.data[0].attributes.url} alt="" />
      </div>
      <div className="contacts_information">
        <div className="contacts_information_title">
          <h2>Contact Us</h2>
          <p>
            We look forward to welcoming you to BearVibe — <br />
            where style meets comfort!
          </p>
        </div>
        <div className="contacts_information_nav">
          <ul>
            <NavLink to={''}>
              <img className="pin" src={pinSvg} alt="" />
              <p>{aboutData.data[0].attributes.address}</p>
            </NavLink>
            <NavLink to={''}>
              <img src={phoneSvg} alt="" />
              <p>&#43; {aboutData.data[0].attributes.phone}</p>
            </NavLink>
            <NavLink to={''}>
              <img src={mailSvg} alt="" />
              <p>{aboutData.data[0].attributes.email}</p>
            </NavLink>
          </ul>
        </div>
        <div className="contacts_button">
          <Link to={'contact-forms'} className="button">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
