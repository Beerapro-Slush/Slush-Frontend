import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  name: string;
  placeholder: string;
  isLabel?: boolean;
  labelText?: string;
  size?: 'default' | 'small' | 'large';
  type?: string;
  register?: UseFormRegisterReturn;
  [key: string]: any;
}

export default function Input({
  isLabel = false,
  labelText,
  name,
  size = 'default',
  type,
  placeholder,
  ...rest
}: InputProps) {
  return (
    <div>
      {isLabel && (
        <label
          className="mb-[6px] block text-caption1 font-m text-sc-grays-1"
          htmlFor={name}
        >
          {labelText}
        </label>
      )}

      {size === 'default' && (
        <input
          {...rest}
          placeholder={placeholder}
          name={name}
          type={type}
          className="w-full border-none appearance-none focus:outline-none focus:ring-sc-org-1 focus:border-sc-org-1  placeholder:text-sc-grays-2 text-sc-black bg-sc-grays-6 rounded-[4px] px-2.5 h-[32px] text-footNote font-el transition"
        ></input>
      )}
      {size === 'small' && (
        <input
          {...rest}
          placeholder={placeholder}
          name={name}
          type={type}
          className="w-full border-none appearance-none focus:outline-none focus:ring-sc-org-1 focus:border-sc-org-1  placeholder:text-sc-grays-2 text-sc-black  bg-sc-grays-6 rounded-[4px] px-2.5 h-[28px] text-footNote font-el transition"
        ></input>
      )}
      {size === 'large' && (
        <input
          {...rest}
          placeholder={placeholder}
          name={name}
          type={type}
          className="w-full border-none appearance-none focus:outline-none focus:ring-sc-org-1 focus:border-sc-org-1  placeholder:text-sc-grays-2 text-sc-black bg-sc-grays-6 rounded-[4px] px-2.5 h-[36px] text-footNote font-el transition"
        ></input>
      )}
    </div>
  );
}
