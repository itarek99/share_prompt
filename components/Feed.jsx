"use client";
import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, onTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard onTagClick={onTagClick} key={post._id} post={post} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/prompt")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Start typing..."
          value={searchTerm}
          onChange={handleSearch}
          className="search_input peer"
        />
      </form>
      <PromptCardList data={posts} onTagClick={() => {}} />
    </section>
  );
};
export default Feed;
