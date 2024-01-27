import { useForm } from "react-hook-form";
import { IFormInput } from "../../Helper/Interface/Interface";
import Contact from "../../Components/Contact/Contact";
import './ContactPage.scss';

function ContactPage() {

  const handleSubmit = () => {

  }

  return (
    <div className="contact_form">

      <div className="form_container">
        <form>
          <h2 className="title">Contact</h2>
          <div className="field_container">
            <input placeholder="Name" />
          </div>
          <div className="field_container">
            <input placeholder="Email" />
          </div>
          <div className="field_container">
            <input placeholder="Topic" />
          </div>
          {/* {errors.email ? <p>{errors.email.message}</p> : null} */}
          <div className="textarea_container">
            <p>Message</p>
            <textarea name="" id="">
              Message:
            </textarea>
          </div>
          <div className="submit">
            <button type="button">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="contact_information">
        <Contact />
      </div>
    </div>
  );
}

export default ContactPage;
