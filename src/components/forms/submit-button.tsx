import { useFormStatus } from "react-dom";
import styles from "./submit-button.module.scss";

export default function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <button
      className={styles.button}
      aria-disabled={pending}
      type="submit"
      onClick={handleClick}
    >
      {pending ? "...submitting" : label}
    </button>
  );
}
