import styles from "./industry-participants.module.css";

const defaultCompanies = ["Cloudflare", "Name.com", "DigiCert", "Datum.net", "Cloud 66"];

export default function IndustryParticipants({ companies = defaultCompanies, label = "Industry participants" }: { companies?: string[]; label?: string }) {
  return <ul className={styles.names} aria-label={label}>
    {companies.map((company) => <li key={company}>{company}</li>)}
  </ul>;
}
