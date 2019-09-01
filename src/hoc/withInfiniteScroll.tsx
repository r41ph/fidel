import React, { useEffect, useState } from "react";

const withInfiniteScroll = (WrappedComponent: any) => {
  const WithInfiniteScroll = (props: any) => {
    const [fetchMoreItems, setFetchMoreItems] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", handleInfiniteScroll);
      return () => window.removeEventListener("scroll", handleInfiniteScroll);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleInfiniteScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setFetchMoreItems(true);
        return;
      }
      setFetchMoreItems(false);
    };

    return <WrappedComponent fetchMoreItems={fetchMoreItems} {...props} />;
  };

  WithInfiniteScroll.displayName = `WithInfiniteScroll(${getDisplayName(
    WrappedComponent
  )})`;

  return WithInfiniteScroll;
};

function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withInfiniteScroll;
