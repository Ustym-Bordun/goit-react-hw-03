import css from './Notification.module.css';

const Notification = ({ text }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.heading}>{text}</p>
    </div>
  );
};

export default Notification;
