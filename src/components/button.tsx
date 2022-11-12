interface ButtonProps {
  text: string;
  [key: string]: any;
}

export default function Button({ text, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="w-full h-[40px] text-headline rounded-lg border border-transparen hover:bg-sc-org-2 bg-sc-org-1 px-4 font-el text-white shadow-sm"
    >
      {text}
    </button>
  );
}
