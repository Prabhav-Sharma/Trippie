import { useEffect, useRef, useState, useMemo } from "react";
import { getLatestFeed } from "../Utils/helpers";
import { PostCard } from ".";

function PostFeed({ posts }) {
  const [pageNumber, setPageNumber] = useState(1);
  const feed = useMemo(
    () => getLatestFeed(posts, pageNumber),
    [pageNumber, posts]
  );

  const loadingRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((page) => page + 1);
        }
      },
      { threshold: 0.5 }
    );

    if (loadingRef.current) observer.observe(loadingRef.current);

    return () => {
      if (loadingRef.current) observer.unobserve(loadingRef.current);
    };
  }, [loadingRef]);

  return (
    <div className="w-full flex flex-col gap-2 mt-2 mb-14 sm:mb-0">
      {feed.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
      <span ref={loadingRef} className="text-white animate-pulse self-center">
        {posts.length === feed.length
          ? "You've seen everything. ^_^"
          : "Loading..."}
      </span>
    </div>
  );
}

export default PostFeed;
