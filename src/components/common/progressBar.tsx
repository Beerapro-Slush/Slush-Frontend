interface ProgressBarProps {
  currentPage: number;
  totalPage: number;
}

export default function ProgressBar({
  currentPage,
  totalPage,
}: ProgressBarProps) {
  return (
    <div className="w-full bg-sc-grays-4 rounded-full h-[2px] mb-[40px]">
      <div
        className="bg-sc-black h-[2px] rounded-full"
        style={{ width: `${(currentPage / totalPage) * 100}%` }}
      ></div>
    </div>
  );
}
