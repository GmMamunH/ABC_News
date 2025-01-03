import { Typography } from "@material-tailwind/react";

import logo from "../../../assets/logo/abclogo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-blue-gray-50 py-6 mt-3">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row gap-3 items-center justify-between">
        <Typography color="blue-gray" className="font-normal flex items-center gap-2">
          &copy; {currentYear}{" "}
          <img className="w-24" src={logo} alt="abc logo" />
        </Typography>
        <ul className="flex flex-wrap  items-center flex-col md:flex-row gap-3 ">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
}
