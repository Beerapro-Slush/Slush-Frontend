interface ButtonProps {
  text: string;
  disabled?: boolean;
  [key: string]: any;
}

export default function Button({
  text,
  disabled = false,
  ...rest
}: ButtonProps) {
  return disabled ? (
    <button
      {...rest}
      className="w-full cursor-not-allowed opacity-30 h-[40px] text-headline rounded-lg border border-transparen hover:bg-sc-org-2 bg-sc-org-1 px-4 font-extralight text-white"
    >
      {text}
    </button>
  ) : (
    <button
      {...rest}
      className="w-full hover:cursor-pointer h-[40px] text-headline rounded-lg border border-transparen hover:bg-sc-org-2 bg-sc-org-1 px-4 font-extralight text-white"
    >
      {text}
    </button>
  );
}
