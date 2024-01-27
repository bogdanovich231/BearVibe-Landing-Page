import { useForm } from "react-hook-form";
import { IFormInput } from "../../Helper/Interface/Interface";
import Contact from "../../Components/Contact/Contact";
import './ContactPage.scss';
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../Helper/Validation/Validation";

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: IFormInput) => {

  };

  return (
    <div className="contact_form">
      <div className="form_container">
        <form>
          <h2 className="title">Contact</h2>
          <div className="field_container">
            <input placeholder="Name" {...register('name')} />
          </div>
          {errors.name ? <p className="message_error">{errors.name.message}</p> : null}
          <div className="field_container">
            <input placeholder="Email" {...register('email')} />
          </div>
          {errors.email ? <p className="message_error">{errors.email.message}</p> : null}
          <div className="field_container">
            <input placeholder="Topic" {...register('topic')} />
          </div>
          {errors.topic ? <p className="message_error">{errors.topic.message}</p> : null}
          <div className="textarea_container">
            <p>Message</p>
            <textarea>
              Message:
            </textarea>
          </div>
          <div className="submit">
            <button type="button" onClick={() => handleSubmit(onSubmit)()}>
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
