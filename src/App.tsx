import { useState } from "react";
import "./styles.css";
import BasicTimeline from "./Timeline/BasicTimeline";
import ColorTimeline from "./Timeline/ColorTimeline";
import OppositeContent from "./Timeline/OppositeContent";

type ProtoType = "Basic" | "Color" | "Opposite";

export default function App() {
  const [view, setView] = useState<ProtoType>("Opposite");

  const View = () => {
    switch (view) {
      case "Basic":
        return <BasicTimeline />;
      case "Color":
        return <ColorTimeline />;
      case "Opposite":
        return <OppositeContent />;
      default:
        return <></>;
    }
  };
  return (
    <div>
      <h1>Tutorial For Timeline</h1>
      {View()}
    </div>
  );
}
