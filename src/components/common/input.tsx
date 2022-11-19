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
  name,
  register,
  isLabel = false,
  labelText,
  size = 'default',
  type = 'text',
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
          {...register}
          {...rest}
          placeholder={placeholder}
          id={name}
          type={type}
          className="w-full border-none appearance-none focus:outline-none focus:ring-sc-org-1 focus:border-sc-org-1  placeholder:text-sc-grays-2 text-sc-black bg-sc-grays-6 rounded px-2.5 h-8 text-footNote font-normal transition"
        ></input>
      )}
      {size === 'small' && (
        <input
          {...register}
          {...rest}
          placeholder={placeholder}
          id={name}
          type={type}
          className="w-full border-none appearance-none focus:outline-none focus:ring-sc-org-1 focus:border-sc-org-1  placeholder:text-sc-grays-2 text-sc-black  bg-sc-grays-6 rounded px-2.5 h-7 text-footNote font-normal transition"
        ></input>
      )}
      {size === 'large' && (
        <input
          {...register}
          {...rest}
          placeholder={placeholder}
          id={name}
          type={type}
          className="w-full border-none appearance-none focus:outline-none focus:ring-sc-org-1 focus:border-sc-org-1  placeholder:text-sc-grays-2 text-sc-black bg-sc-grays-6 rounded px-2.5 h-9 text-footNote font-normal transition"
        ></input>
      )}
    </div>
  );
}
