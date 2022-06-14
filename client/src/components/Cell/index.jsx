import 'components/styles/Cell.scss';
import Empty from "./Empty";
import Show from "./Show";

const Assignment = (props) => {

  return (
    <>
      {(props?.id && <Show {...props} />) || <Empty />}
    </>
  );
};

export default Assignment;