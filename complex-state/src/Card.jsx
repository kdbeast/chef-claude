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
        <button
          onClick={toggleFavorite}
          aria-pressed={contact.isFavorite}
          aria-label={
            contact.isFavorite ? "Remove from favorites" : "Add to favorites"
          }
          className="favorite-button"
        >
          <img
            src={starIcon}
            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
            className="favorite"
          />
        </button>
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
