import { Typography } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";


export const Loading = () => {
  return (
    <div className="flex flex-col items-center">
      <Spinner color="green" className="h-16 w-16 "/>
      <Typography color="blue-gray" variant="h6">
        Loading...
      </Typography>
    </div>
  );
}
