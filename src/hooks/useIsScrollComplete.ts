import React, { RefObject, useCallback, useEffect, useState } from "react";

interface IUseIsScrollComplete<TElement> {
  ref: RefObject<TElement>;
  querySelector?: string;
  markAsComplete?: boolean;
}

const THRESHOLD = 1;

function useIsScrollComplete<TElement extends HTMLElement | null>({
  ref,
  querySelector,
  markAsComplete = true,
}: IUseIsScrollComplete<TElement>) {
  const [isScrollComplete, setIsScrollComplete] = useState(false);

  const onScroll: EventListener = useCallback(({ target }) => {
    const { scrollHeight, clientHeight, scrollTop } = target as Element;

    if (Math.abs(scrollHeight - clientHeight - scrollTop) < THRESHOLD) {
      setIsScrollComplete(true);
    }
  }, []);

  useEffect(() => {
    const element = ref.current;
    const targetElement = querySelector
      ? element?.querySelector(querySelector)
      : element;

    if (targetElement) {
      targetElement.addEventListener("scroll", onScroll);

      if (isScrollComplete && markAsComplete) {
        targetElement.removeEventListener("scroll", onScroll);
      }

      return () => {
        targetElement.removeEventListener("scroll", onScroll);
      };
    }
  }, [isScrollComplete]);

  return { isScrollComplete };
}

export default useIsScrollComplete;
