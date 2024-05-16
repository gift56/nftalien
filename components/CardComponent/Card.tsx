const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-dark relative before:content-[''] before:absolute before:w-2/4 before:h-[180%]">
      {children}
    </div>
  );
};

export default Card;
