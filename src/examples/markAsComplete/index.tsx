import { useRef } from "react";
import useIsScrollComplete from "../../hooks/useIsScrollComplete";
import styles from "./styles.module.css";

function MarkAsComplete() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const newRef = useRef<HTMLDivElement | null>(null);
  const { isScrollComplete } = useIsScrollComplete({ ref: containerRef });
  const { isScrollComplete: isComplete } = useIsScrollComplete({
    ref: newRef,
    markAsComplete: false,
  });

  return (
    <div style={{ display: "flex", padding: "0px 20px" }}>
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <div ref={containerRef} className={styles["parent-div"]}>
          <div className={styles["child-div"]}>
            {[...Array(10)].map((_, index) => (
              <p key={`key-${index}`}>Scrollable Content</p>
            ))}
          </div>
        </div>

        <p style={{ textAlign: "center" }}>
          markAsComplete: <span className="bold">true</span>
        </p>
        <br />

        {isScrollComplete && (
          <p style={{ textAlign: "center" }}>Scroll is Complete ✅</p>
        )}
      </div>

      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <div ref={newRef} className={styles["parent-div"]}>
          <div className={styles["child-div"]}>
            {[...Array(10)].map((_, index) => (
              <p key={`key-${index}`}>Scrollable Content</p>
            ))}
          </div>
        </div>
        <p style={{ textAlign: "center" }}>
          markAsComplete: <span className="bold">false</span>
        </p>

        <br />

        {isComplete && (
          <p style={{ textAlign: "center" }}>Scroll is Complete ✅</p>
        )}
      </div>
    </div>
  );
}

export default MarkAsComplete;
