import React, { useEffect, useState } from "react";

const withInfiniteScroll = WrappedComponent => {
  const WithInfiniteScroll = () => {
    const [fetchMoreItems, setFetchMoreItems] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", handleInfiniteScroll);
      return () => window.removeEventListener("scroll", handleInfiniteScroll);
    }, []);

    const handleInfiniteScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        setFetchMoreItems(false);
        return;
      }
      console.log("Fetch more list items!");
      setFetchMoreItems(true);
    };

    return <WrappedComponent fetchMoreItems={fetchMoreItems} />;
  };

  WithInfiniteScroll.displayName = `WithInfiniteScroll(${getDisplayName(
    WrappedComponent
  )})`;

  return WithInfiniteScroll;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withInfiniteScroll;
