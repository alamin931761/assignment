"use client";

import { TBlog } from "@/types";
import { useState } from "react";

const Card = ({ blog }: { blog: TBlog }) => {
  // State to manage the collapsed state of the card
  const [collapse, setCollapse] = useState(true);

  return (
    <div key={blog._id} className="mb-4 bg-seashell rounded-[10px] p-4">
      <div className={`${collapse ? "h-[172px]" : "h-full"} overflow-hidden`}>
        {/* Title of the blog */}
        <h1 className="text-base lg:text-[26px] font-semibold text-baltic-sea">
          {blog.title}
        </h1>

        {/* Description of the blog, split into paragraphs */}
        <div className="indent-12 text-xs text-carbon-grey mt-[11px]">
          {blog.description
            .split("\n")
            .map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>
      </div>

      {/* Horizontal line separating the content from the footer */}
      <hr className="border border-[#3030301A] mt-2 my-3" />

      {/* Footer section containing hashtags and the toggle button */}
      <div className="flex justify-between">
        <div className="flex gap-[6px]">
          {blog.hashtags.map((tag: string, index: number) => (
            <p
              className="text-xs text-dark-pastel-blue bg-milk-white py-[2px] px-[6px] rounded-[10px]"
              key={index}
            >
              {tag}
            </p>
          ))}
          <p className="text-xs text-dark-pastel-blue bg-milk-white px-2 py-1 rounded-full">
            +
          </p>
        </div>

        {/* Button to toggle the collapse state */}
        <button
          className="text-fun-blue font-medium"
          onClick={() => setCollapse(!collapse)}
        >
          {collapse ? "Read more" : "Read less"}
        </button>
      </div>
    </div>
  );
};

export default Card;