import Email from "./Email";
import { useState } from "react";
import { getReadEmails, getStarredEmails } from "./utils";
import EmailContent from "./EmailContent";
import arrow from "../assets/icons/arrow.png";

function Emails({ emails, setEmails, hideRead, currentTab }) {
  const [selectedEmail, setSelectedEmail] = useState(null);

  let filteredEmails = emails;
  if (hideRead) filteredEmails = getReadEmails(filteredEmails);
  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  const toggleRead = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };

  const toggleStar = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    setEmails(updatedEmails);
  };

  if (selectedEmail) {
    return (
      <main className="emails">
        <button className="back-btn" onClick={() => setSelectedEmail(null)}>
            <img className="icon" src={arrow} alt="reply button" />
        </button>
        <EmailContent email={selectedEmail} />
      </main>
    );
  }

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            key={index}
            email={email}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
            setSelectedEmail={setSelectedEmail}
          />
        ))}
      </ul>
    </main>
  );
}

export default Emails;
