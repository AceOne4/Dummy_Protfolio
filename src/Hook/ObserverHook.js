import { useState, useMemo, useEffect } from "react";

const UseObserever = function (options, targetref) {
  const [isVisable, setisvislable] = useState(null);
  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target) {
        setisvislable(entry.target.id);
      }
    });
  };
  //we wrap it with memeo to stop it from re render
  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    targetref.forEach((target) => {
      if (target.current) observer.observe(target.current);
    });

    return () => {
      targetref.forEach((target) => {
        if (target.current) observer.unobserve(target.current);
      });
    };
  }, [targetref, optionsMemo]);
  return isVisable;
};

export default UseObserever;
