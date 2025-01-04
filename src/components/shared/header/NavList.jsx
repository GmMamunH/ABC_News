import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export const NavList = () => {
  const navLink = [
    { catName: "Mobiles", path: "/" },
    { catName: "Automobiles", path: "/automobiles" },
    { catName: "Business", path: "/business" },
    { catName: "Tech", path: "/tech" },
  ];
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navLink.map(({ catName, path }, index) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
          key={index}
        >
          <NavLink
            to={path}
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            {catName}
          </NavLink>
        </Typography>
      ))}
    </ul>
  );
};
