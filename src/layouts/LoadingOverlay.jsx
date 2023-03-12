import React, { useState, useEffect } from "react";

const LoadingOverlay = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="overlay">
          <div className="loader"></div>
        </div>
      )}
      {!loading && children}
    </>
  );
};

export default LoadingOverlay;
