import { useState } from 'react';

type PublicInputTypeProps = {
  icon?: string;
  alt?: string;
  name: string;
  type: string;
  value: string;
  className?: string;
  setValue(s: string): void;
};

export const PublicInput: React.FC<PublicInputTypeProps> = ({
  icon,
  alt,
  name,
  type,
  value,
  setValue,
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <div
      className={
        'input ' + (focus ? 'focus ' : '') + (!value ? 'disabled' : '')
      }
    >
      <img src={icon} alt={alt} />
      <input
        name={name}
        placeholder={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};
