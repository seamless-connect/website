import styles from "./industry-participants.module.css";

const companies = ["Cloudflare", "Name.com", "DigiCert", "Datum.net", "Cloud 66"];

export default function IndustryParticipants() {
  return <ul className={styles.names} aria-label="Industry participants">
    {companies.map((company) => <li key={company}>{company}</li>)}
  </ul>;
}
