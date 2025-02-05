function Email({ email, toggleRead, toggleStar, setSelectedEmail }) {
  const handleOnClick = () => {
    setSelectedEmail(email);
  };
  return (
    <>
      <li
        onClick={handleOnClick}
        className={`email ${email.read ? "read" : "unread"}`}
      >
        <div className="select">
          <input
            className="select-checkbox"
            type="checkbox"
            checked={email.read}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              e.stopPropagation();
              toggleRead(email);
            }}
          />
        </div>
        <div className="star">
          <input
            className="star-checkbox"
            type="checkbox"
            checked={email.starred}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              e.stopPropagation();
              toggleStar(email);
            }}
          />
        </div>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
      </li>
    </>
  );
}

export default Email;
