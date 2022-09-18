import React from "react";

const App = (): JSX.Element => {
  return (
    <div className="desktop:bg-desktop tablet:bg-tablet mobile:bg-mobile bg-no-repeat bg-cover bg-center bg-fixed h-full">
      Hello world!
    </div>
  );
};

export default App;
