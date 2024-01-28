import { useForm } from "react-hook-form";
import { IFormInput } from "../../Helper/Interface/Interface";
import Contact from "../../Components/Contact/Contact";
import './ContactPage.scss';
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../Helper/Validation/Validation";
import { db } from "../../Helper/Firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { resetForm, setEmail, setLoader, setMessage, setName, setTopic } from "../../store/slices/Form.slice";
import Loader from "../../Components/Loader/Loader";

function ContactPage() {
  const { name, email, topic, message, isLoading } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const onSubmit = async () => {
    try {
      dispatch(setLoader(true));
      await addDoc(collection(db, 'contacts'), {
        name,
        email,
        topic,
        message,
      });
      dispatch(resetForm());
      alert('Message submitted successfully');
    } catch (error) {
      console.error('Error saving to database:', error);
      alert('Error saving to database');
    } finally {
      dispatch(setLoader(false));
    }
  };

  return (
    <div className="contact_form">
      <div className="form_container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="title">Contact</h2>
          <div className="field_container">
            <input
              placeholder="Name"
              value={name}
              {...register('name')}
              onChange={(e) => dispatch(setName(e.target.value))}
            />
          </div>
          {errors.name ? <p className="message_error">{errors.name.message}</p> : null}
          <div className="field_container">
            <input
              placeholder="Email"
              value={email}
              {...register('email')}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
          </div>
          {errors.email ? <p className="message_error">{errors.email.message}</p> : null}
          <div className="field_container">
            <input
              placeholder="Topic"
              value={topic}
              {...register('topic')}
              onChange={(e) => dispatch(setTopic(e.target.value))}
            />
          </div>
          {errors.topic ? <p className="message_error">{errors.topic.message}</p> : null}
          <div className="textarea_container">
            <p>Message</p>
            <textarea
              placeholder="Message:"
              value={message}
              {...register('message')}
              onChange={(e) => dispatch(setMessage(e.target.value))} />
          </div>
          {errors.message ? <p className="message_error">{errors.message.message}</p> : null}
          <div className="submit">
            <button type="submit" disabled={isLoading}>
              Submit
            </button>
          </div>
          {isLoading && <Loader />}
        </form>
      </div>
      <div className="contact_information">
        <Contact />
      </div>
    </div>
  );
}

export default ContactPage;
