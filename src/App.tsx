import Examples from "./examples";
import "./app.scss";
import { useState } from "react";
import clsx from "clsx";

const tabs = [
  {
    id: "examples",
    component: <Examples />,
    title: "Example",
  },
];

function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  const handleTabClick = (id: string) => {
    setSelectedTab(id);
  };

  return (
    <div className="m-4">
      <div className="tabs tabs-boxed">
        {tabs.map((tab) => (
          <a
            className={clsx("tab", { "tab-active": tab.id === selectedTab })}
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}>
            {tab.title}
          </a>
        ))}
      </div>

      <p>Some text</p>

      <div className="m-3">
        {tabs.filter((tab) => tab.id === selectedTab)[0].component}
      </div>
    </div>
  );
}

export default App;
