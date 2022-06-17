import 'components/styles/Assignment.scss';
import 'components/styles/List.scss';
import { format, parseISO } from 'date-fns';

const AdminList = (props) => {
  const dueDateColour = () => {
    if (parseISO(props.defaultDueDate) < new Date()) return 'pastDue';
    return 'due';
  };

  return (
    <section className='assignment__form'>

        <div className='list_content'>
        <header><h1 className='assignment_header'>{props.title}</h1></header>
        <p id="assn-subj">{props.subject.name}</p>
        <p className='assn-desc'>Description:</p>
        <p id="desc">{props.description}</p>
        <p id="assn-link">Link: {props.url}</p>
        <p className={`due-date ${dueDateColour()}`}>Due: {format(props.day || parseISO(props.defaultDueDate), 'MMM dd yyyy')}</p>

      </div>
    </section>
  );
};

export default AdminList;