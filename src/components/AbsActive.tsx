import { absCoor } from "./AbsCoor";

interface AbsActiveProps {
  absPart: string;
}

export const AbsActive: React.FC<AbsActiveProps> = ({ absPart }) => {
  return (
    <>
      {absPart === "" && <></>}
      {absPart === "all-over" && (
        <>
          {absCoor.map((part) => (
            <img
              key={part.name}
              src={part.highlight}
              alt={part.alt}
              className="absolute left-0 top-0 pointer-events-none"
            />
          ))}
        </>
      )}
      {absPart !== "all-over" && (
        <>
          {absCoor.map((part) => (
            <img
              key={part.name}
              src={part.highlight}
              alt={part.alt}
              style={{ display: part.name === absPart ? "initial" : "none" }}
              className="absolute left-0 top-0 pointer-events-none"
            />
          ))}
        </>
      )}
    </>
  );
};
