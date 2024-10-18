const HeroComponent = ({ title }: { title: string }) => {
  return (
    <div className="w-full text-center bg-secondary-300 min-h-56 text-secondary-200 flex items-center justify-center text-4xl md:text-5xl lg:text-5xl tracking-widest leading-6 font-bold uppercase">
      {title}
    </div>
  );
};
export default HeroComponent;
