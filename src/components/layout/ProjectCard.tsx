"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

const ProjectCard = ({ id, title, summary, url, image }: ProjectCardProps) => {
  return (
    <Link
      to={`/case-studies/${id}`}
      className="group flex flex-col h-full cursor-pointer"
    >
      <div className="flex-grow">
        <div className="flex aspect-[3/2] overflow-clip rounded-xl">
          <div className="flex-1">
            <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="mb-2 line-clamp-1 pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </div>
        <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
          {summary}
        </div>
      </div>
      <div className="flex items-center text-sm mt-auto">
        Read more{" "}
        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export { ProjectCard };
