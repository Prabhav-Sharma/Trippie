import { useEffect, useRef, useState, useMemo } from "react";
import { getSortedFeed } from "../Utils/helpers";
import { PostCard, CommentCard } from ".";
import { IoMdFunnel } from "../Utils/icons";

function Feed({ posts, type = "POST", finishText = "" }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [sortBy, setSortBy] = useState("Latest");
  const [sortByToggle, setSortByToggle] = useState(false);
  const feed = useMemo(
    () => getSortedFeed(posts, pageNumber, sortBy),
    [pageNumber, posts, sortBy]
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
    <div className="w-full flex flex-col mt-4 mb-14 sm:mb-0">
      {feed.length !== 0 && (
        <div className="flex flex-col relative gap-1.5 items-center text-sm sm:text-base self-end mr-2 p-1 rounded-md font-normal text-blue-600 bg-white">
          <span
            className="flex w-32 sm:w-36 justify-center items-center gap-1 px-1.5 cursor-pointer"
            onClick={() => setSortByToggle((toggle) => !toggle)}
          >
            <IoMdFunnel /> Sort: {sortBy}
          </span>
          <ul
            className={`${
              sortByToggle ? "flex" : "hidden"
            } -translate-y-1 absolute bg-white rounded-md top-10 z-20 w-full flex-col gap-1 items-center pb-1`}
          >
            <li
              className="hover:text-blue-700 cursor-pointer"
              onClick={() => setSortBy("Latest")}
            >
              Latest
            </li>
            <li
              className="hover:text-blue-700 cursor-pointer"
              onClick={() => setSortBy("Oldest")}
            >
              Oldest
            </li>
            <li
              className="hover:text-blue-700 cursor-pointer"
              onClick={() => setSortBy("Trending")}
            >
              Trending
            </li>
          </ul>
        </div>
      )}
      <div className="mt-2 w-full flex flex-col">
        <ContentFeed type={type} feed={feed} />
      </div>
      <span ref={loadingRef} className="text-white self-center">
        {posts.length === feed.length ? (
          finishText
        ) : (
          <p className="animate-pulse">Loading...</p>
        )}
      </span>
    </div>
  );
}

export default Feed;
