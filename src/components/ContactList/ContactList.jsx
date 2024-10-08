import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";


export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter)

  const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))



  return (
    <ul className={css.box}>
      {filterContacts.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <Contact item={item} />
          </li>
        );
      })}
    </ul>
  );
}
