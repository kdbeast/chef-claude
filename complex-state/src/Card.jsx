import Star from "./components/Star";
import avatar from "/user.png";

const Card = ({ contact, toggleFavorite, starIcon }) => {
  return (
    <article className="card">
      <img
        src={avatar}
        className="avatar"
        alt="User profile picture of John Doe"
      />
      <div className="info">
        <Star
          contact={contact}
          handleClick={toggleFavorite}
          starIcon={starIcon}
        />
        <h2 className="name">
          {contact.firstName} {contact.lastName}
        </h2>
        <p className="contact">{contact.phone}</p>
        <p className="contact">{contact.email}</p>
      </div>
    </article>
  );
};

export default Card;
