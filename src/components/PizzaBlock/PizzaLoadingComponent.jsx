import React from "react";
import ContentLoader from "react-content-loader";

export const PizzaLoadingComponent = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={260}
      height={467}
      viewBox="0 0 260 467"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="126" cy="143" r="105" />
      <rect x="0" y="269" rx="6" ry="3" width="260" height="26" />
      <rect x="0" y="308" rx="6" ry="6" width="260" height="84" />
      <rect x="0" y="406" rx="6" ry="0" width="60" height="27" />
      <rect x="109" y="406" rx="30" ry="30" width="151" height="48" />
    </ContentLoader>
  );
};
