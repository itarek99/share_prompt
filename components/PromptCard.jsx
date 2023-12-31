"use client";

import Image from "next/image";
import { useState } from "react";

const PromptCard = ({ post, onTagClick }) => {
  const [copied, setCopied] = useState("");
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="Creator Image"
            height={40}
            width={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">{post.creator.username}</h3>
          </div>
        </div>
        <div className="copy_btn" onClick={() => {}}>
          <Image
            src={copied === post.prompt ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
            alt={copied === post.prompt ? "Copy" : "Already Copied"}
            width={16}
            height={16}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p onClick={() => onTagClick && onTagClick(post.tag)} className="font-inter text-sm blue_gradient cursor-pointer">
        {post.tag}
      </p>
    </div>
  );
};
export default PromptCard;
