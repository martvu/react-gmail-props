const getReadEmails = (emails) => emails.filter((email) => !email.read);   
const getStarredEmails = (emails) => emails.filter((email) => email.starred);

export { getReadEmails, getStarredEmails };