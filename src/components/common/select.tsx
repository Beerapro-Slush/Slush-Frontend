import { Fragment, useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import type {
  FieldPath,
  UseFormRegisterReturn,
  UseFormSetValue,
  FieldPathValue,
  FieldValues,
} from 'react-hook-form';
import cls from '@utils/cls';

type Option = {
  option: string;
};

interface SelectProps<T extends FieldValues> {
  name: FieldPath<T>;
  setValue: UseFormSetValue<T>;
  register?: UseFormRegisterReturn;
  placeholder: string;
  isLabel?: boolean;
  labelText?: string;
  options: Option[];
  globalState: string;
  [key: string]: any;
}

export default function Select<T extends FieldValues>({
  setValue,
  isLabel = false,
  labelText,
  name,
  placeholder,
  options,
  globalState,
  ...rest
}: SelectProps<T>) {
  const [selected, setSelected] = useState<Option>({
    option: globalState === '' ? '' : globalState,
  });

  useEffect(() => {
    if (selected.option !== undefined)
      setValue(name, selected.option as FieldPathValue<T, FieldPath<T>>);
    console.log(selected);
  }, [selected, name, setValue]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          {isLabel && (
            <Listbox.Label
              htmlFor={name}
              className="mb-[6px] block text-caption1 text-sc-grays-1"
            >
              {labelText}
            </Listbox.Label>
          )}
          <div className="relative" id={name}>
            <Listbox.Button
              {...rest}
              className="text-left text-sc-black w-full border-none appearance-none focus:border-sc-org-1-2 focus:outline-none focus:ring-sc-org-1 focus:border-sc-org-1  placeholder:text-sc-grays-2 bg-sc-grays-6 rounded px-2.5 py-0 h-8 text-footNote font-normal transition"
            >
              <span
                className={cls(
                  'flex items-center',
                  selected.option ? 'text-sc-black' : 'text-sc-grays-2',
                )}
              >
                <span className="block truncate">
                  {selected.option ? selected.option : placeholder}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z"
                    fill="#8E8E93"
                  />
                </svg>
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="shadow-lg divide-y-[1px] absolute text-footNote font-normal z-10 mt-2 w-full rounded bg-white overflow-hidden ring-1 ring-black ring-opacity-5 sm:text-sm">
                {[...options]?.reverse().map((option) => (
                  <Listbox.Option
                    key={option.option}
                    className={({ active }) =>
                      cls(
                        active ? 'text-sc-white bg-sc-org-1' : 'text-gray-900',
                        'flex items-center cursor-default select-none px-2.5 h-10 w-full',
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span className="block truncate">
                            {option.option}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={cls(
                              active ? 'text-sc-white' : 'text-sc',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
