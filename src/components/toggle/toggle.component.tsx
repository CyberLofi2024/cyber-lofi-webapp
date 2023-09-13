import { useState } from 'react';
import styles from './toggle.module.scss';
export const Toggle = (input: {
  label: string;
  toggled: boolean;
  onClick: Function;
}) => {
  const { label, toggled, onClick } = input;
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type="checkbox"
        defaultChecked={isToggled}
        onClick={callback}
      />
      <span className={styles.span} />
      <strong className={styles.strong}>{label}</strong>
    </label>
  );
};
