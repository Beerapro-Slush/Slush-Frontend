import cls from '@utils/cls';
import { useRef, useState } from 'react';
import type {
  FieldPath,
  UseFormRegisterReturn,
  UseFormSetValue,
  FieldPathValue,
  FieldValues,
} from 'react-hook-form';

interface SelectProps<T extends FieldValues> {
  name: FieldPath<T>;
  setValue: UseFormSetValue<T>;
  register?: UseFormRegisterReturn;
  placeholder: string;
  isLabel?: boolean;
  labelText?: string;
  options: string[];
  [key: string]: any;
}

export default function Select<T extends FieldValues>({
  register,
  setValue,
  isLabel = false,
  labelText,
  name,
  placeholder,
  options,
  ...rest
}: SelectProps<T>) {
  const [focus, setFocus] = useState<boolean>(false);
  const optionRef = useRef<HTMLDivElement>(null);

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
      <input
        {...register}
        {...rest}
        onFocus={() => setFocus(true)}
        // onBlur={() => setFocus(false)}
        placeholder={placeholder}
        id={name}
        type="text"
        className="w-full border-none appearance-none  focus:outline-none focus:ring-sc-org-1 focus:border-sc-org-1  placeholder:text-sc-grays-2 text-sc-black bg-sc-grays-6 rounded-[4px] px-2.5 py-0 h-8 text-footNote font-normal transition"
      />
      <div
        ref={optionRef}
        className={cls(
          'mt-2 divide-y-[1px] w-full rounded-lg shadow-md transition overflow-hidden',
          focus ? 'block' : 'hidden',
        )}
      >
        {[...options].reverse().map((option, index) => (
          <div
            className="transition flex w-full items-center h-11 px-4 text-footNote text-sc-grays-1 hover:bg-sc-org-1 hover:text-sc-white"
            key={index}
            onClick={() => {
              setFocus(false);
              setValue(name, option as FieldPathValue<T, FieldPath<T>>);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
