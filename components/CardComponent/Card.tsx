const Card = ({
  children,
  height,
}: {
  children: React.ReactNode;
  height: number;
}) => {
  return (
    <div
      style={{ height: height }}
      className="w-full overflow-hidden bg-dark before:content-[''] before:absolute before:w-[20%] before:h-[170%] before:bg-cardLinear before:rotate-[-52deg] after:content-[''] after:absolute after:inset-[5px] after:bg-dark"
    >
      {children}
    </div>
  );
};

export default Card;
