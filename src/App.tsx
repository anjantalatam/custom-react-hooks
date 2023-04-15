import { useRef } from "react";
import useIsScrollComplete from "./hooks/useIsScrollComplete";
import styles from "./app.module.css";

function App() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const { isScrollComplete } = useIsScrollComplete({ ref: divRef });

  return (
    <div>
      <div ref={divRef} className={styles["parent-div"]}>
        <div className={styles["child-div"]}>
          {[...Array(10)].map((_, index) => (
            <p key={`key-${index}`}>Scrollable Content</p>
          ))}
        </div>
      </div>
      {isScrollComplete && (
        <p style={{ textAlign: "center" }}>Scroll is Complete ✅</p>
      )}
    </div>
  );
}

export default App;
