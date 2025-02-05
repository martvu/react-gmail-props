import { useState } from "react";
import initialEmails from "./data/emails";
import Emails from "./components/Emails";
import Nav from "./components/Nav";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [searchTerm, setSearchTerm] = useState("");

  let filteredEmails = emails;
  if (searchTerm !== "") {
    filteredEmails = emails.filter(
      (email) =>
        email.sender?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Nav
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        emails={emails}
        setHideRead={setHideRead}
        hideRead={hideRead}
      />
      <Emails
        emails={filteredEmails}
        setEmails={setEmails}
        hideRead={hideRead}
        currentTab={currentTab}
      />
    </div>
  );
}

export default App;
