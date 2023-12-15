import { absCoor } from "../constant/AbsCoor";

interface AbsActiveProps {
  absPart: string;
}

export const AbsActive: React.FC<AbsActiveProps> = ({ absPart }) => {
  const currentPart = absCoor.find((part) => part.name === absPart);

  if (absPart == "all-over") {
    return (
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
