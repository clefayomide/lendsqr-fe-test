import Login from "@/components/templates/auth/login";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.page}>
      <Login />
    </main>
  );
}
