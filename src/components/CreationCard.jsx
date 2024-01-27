function CreationCard({ image, titleCard }) {
  // const backgroundImageStyle = {
  //   backgroundImage: `url(${image})`,
  // };
  return (
    <div className="relative cursor-pointer overflow-hidden group">
      <img src={image} className="w-full h-full object-cover " />
      <div className="absolute bottom-0 left-0  w-1/2 flex items-center justify-center md:block h-full md:h-2/5 md:w-full bg-gray-950 py-4 px-4 md:py-2 md:px-4 xl:py-14 xl:px-10 -translate-x-full md:translate-x-0  md:translate-y-full md:group-hover:translate-y-0 group-hover:translate-x-0  opacity-0 group-hover:opacity-100 duration-300">
        <span className="text-white uppercase font-alata text-2xl md:text-2xl xl:text-3xl font-light tracking-wider">
          {titleCard}
        </span>
      </div>
    </div>
  );
}

export default CreationCard;
