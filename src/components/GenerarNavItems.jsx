export const navItems = [
  { text: "About", sectionId: "hero" },
  { text: "Carrers", sectionId: "info" },
  { text: "Events", sectionId: "creation" },
  { text: "Products" },
  { text: "Support" },
];

export const generarNavItems = () => {
  return navItems.map((item, index) => {
    return (
      <li
        key={index}
        className="relative w-full group text-white text-center cursor-pointer"
      >
        <a href={`#${item.sectionId}`}>{item.text}</a>
        <div className="w-0 h-1  bg-white absolute top-6 bottom-0 left-0 rounded group-hover:w-full transition-all duration-300 mt-2 md:mt-0 "></div>
      </li>
    );
  });
};
