import css from "./Contact.module.css";
import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/contactsSlice"
import { LuPhone, LuSmile } from "react-icons/lu";

export default function Contact({ item: { name, number, id }, onDelete }) {

  const dispatch = useDispatch()

  return (
    <>
      <div>
        <p>
          <LuPhone />
          {name}
        </p>
        <p>
          <LuSmile />
          {number}
        </p>
      </div>

      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </>
  );
}
