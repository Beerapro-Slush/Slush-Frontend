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
      disabled
      className="w-full transition font-extralight cursor-not-allowed opacity-30 h-10 text-headline rounded-lg border border-transparen hover:bg-sc-org-2 bg-sc-org-1 px-4 text-white"
    >
      {text}
    </button>
  ) : (
    <button
      {...rest}
      className="w-full transition font-extralight hover:cursor-pointer h-10 text-headline rounded-lg border border-transparen hover:bg-sc-org-2 bg-sc-org-1 px-4 text-white"
    >
      {text}
    </button>
  );
}
