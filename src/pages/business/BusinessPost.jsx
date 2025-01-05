/* eslint-disable react/prop-types */
import { Tooltip } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const BusinessPost = ({ post }) => {
  return (
    <Card className="mt-6 w-80">
      <CardHeader color="blue-gray" className="relative h-48 w-72">
        <img src={post?.urlToImage} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Tooltip content={post?.title}>
          <h5 className="mb-2 text-gray-900 text-xl font-semibold line-clamp-1">
            {post?.title}
          </h5>
        </Tooltip>
        <Tooltip content={post?.description}>
          <p className="text-gray-600 text-sm line-clamp-2">
            {post?.description}
          </p>
        </Tooltip>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/business-details/${post.title}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
