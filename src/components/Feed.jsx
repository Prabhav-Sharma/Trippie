import { useEffect, useRef, useState, useMemo } from "react";
import { getLatestFeed } from "../Utils/helpers";
import { PostCard } from ".";
import CommentCard from "./CommentCard";

function PostFeed({
  posts,
  type = "POST",
  finishText = "You've seen everything. ^_^",
}) {
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

  const ContentFeed = ({ type, feed }) => {
    switch (type) {
      case "POST":
        return feed.map((post) => <PostCard key={post._id} post={post} />);

      case "COMMENT":
        return feed.map((comment) => (
          <CommentCard key={comment._id} comment={comment} />
        ));
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 mt-4 mb-14 sm:mb-0">
      <ContentFeed type={type} feed={feed} />
      <span ref={loadingRef} className="text-white  self-center">
        {posts.length === feed.length ? (
          finishText
        ) : (
          <p className="animate-pulse">Loading...</p>
        )}
      </span>
    </div>
  );
}

export default PostFeed;
