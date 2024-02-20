export const Chip = ({
  title,
  icon,
  color = "text-base-content",
}: {
  title: string;
  icon: React.ReactNode;
  color?: string;
}) => {
  return (
    <div
      className={`flex items-center gap-2 justify-center rounded-full bg-base-100 opacity-75  py-1.5 px-3 font-bold uppercase ${color}`}
    >
      {icon}
      <span> {title}</span>
    </div>
  );
};
