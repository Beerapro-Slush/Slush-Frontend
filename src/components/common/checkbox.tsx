interface CheckboxProps {
  id: string;
  type?: string;
  text: string;
  isChecked: boolean;
  handler(e: React.ChangeEvent<HTMLInputElement>): void;
}

export default function Checkbox({
  id,
  type = 'checkbox',
  text,
  isChecked,
  handler,
}: CheckboxProps) {
  return (
    <>
      {id === 'selectAll' && (
        <div>
          <input
            id={id}
            type={type}
            className="w-5 h-5 rounded text-sc-org-1 border-sc-grays-4  focus:ring-0 focus:ring-offset-0 transition"
            checked={isChecked}
            onChange={handler}
          />
          <label
            htmlFor={id}
            className="align-middle ml-[8px] text-caption1 font-"
          >
            {text}
          </label>
        </div>
      )}
      {id !== 'selectAll' && (
        <div>
          <input
            id={id}
            type={type}
            className="w-5 h-5 rounded text-sc-org-1 border-sc-grays-4 bg-gray-100 focus:ring-0 focus:ring-offset-0 transition"
            checked={isChecked}
            onChange={handler}
          />
          <label
            htmlFor={id}
            className="align-middle ml-[8px] text-caption1 mb-64"
          >
            <span className="font-medium">[필수] </span>
            {text}
          </label>
        </div>
      )}
    </>
  );
}
