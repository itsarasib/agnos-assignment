import { fingerCoor } from "./FingerCoor";

interface FingerActiveProps {
  fingerPart: string;
}

export const FingerActive: React.FC<FingerActiveProps> = ({ fingerPart }) => {
  return (
    <>
      {fingerPart === "" && <></>}

      {fingerPart === "others-highlight" && (
        <>
          {fingerCoor.map((part) => (
            <img
              key={part.name}
              src={part.highlight}
              alt={part.alt}
              style={{ display: part.name === fingerPart ? "initial" : "none" }}
              className="absolute left-0 top-0 pointer-events-none"
            />
          ))}
        </>
      )}

      {fingerPart !== "others-highlight" && (
        <>
          {fingerCoor.map((part) => (
            <img
              key={part.name}
              src={part.highlight}
              alt={part.alt}
              style={{ display: part.name === fingerPart ? "initial" : "none" }}
              className="absolute left-0 top-0 pointer-events-none"
            />
          ))}
          {fingerCoor.map((part) => (
            <img
              key={part.name}
              src={part.active}
              alt={part.alt}
              style={{ display: part.name === fingerPart ? "initial" : "none" }}
              className="absolute left-0 top-0 pointer-events-none"
            />
          ))}
        </>
      )}
    </>
  );
};
