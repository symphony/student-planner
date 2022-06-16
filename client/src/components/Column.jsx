import { format, } from 'date-fns';
import Card from 'components/Card';

const Column = (props) => {
  return (
    <main className={`table__column cards-column ${props.selected}`}>
      <header className={`cell label`}>
        <p>{format(props.day, 'dd eeee')}</p>
      </header>
      {[...Array(props.totalRows)].map((_, i) => (
        <div key={i} className={'cell card-cell'}>
          <Card
            {...props.cards[i]}
            onClick={() => props.onFocus(props.cards[i].id)}
            admin={props.admin}
            lastRow={props.totalRows === i + 1}
            onAdd={() => props.onAdd(props.day)}
          />
        </div>))}
    </main>
  );
};

export default Column;