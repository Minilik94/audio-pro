const HeroComponent = ({ title }: { title: string }) => {
  return (
    <div className="w-full text-center bg-secondary-300 min-h-56 text-secondary-200 flex items-center justify-center text-6xl font-bold capitalize">
      {title}
    </div>
  );
};
export default HeroComponent;
