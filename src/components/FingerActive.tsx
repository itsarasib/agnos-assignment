import { fingerCoor } from "../constant/FingerCoor";

interface FingerActiveProps {
  fingerPart: string;
}

export const FingerActive: React.FC<FingerActiveProps> = ({ fingerPart }) => {
  const currentPart = fingerCoor.find((part) => part.name === fingerPart);

  if (fingerPart === "others-highlight") {
    return (
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
    );
  }

  if (!currentPart) {
    return null;
  }

  return (
    <>
      <img
        src={currentPart.highlight}
        alt={currentPart.alt}
        className="absolute left-0 top-0 pointer-events-none"
      />
      <img
        src={currentPart.active}
        alt={currentPart.alt}
        className="absolute left-0 top-0 pointer-events-none"
      />
    </>
  );
};
