import { useState } from "react";
import defaultAbs from "/abs/default-abs.png";
import { absCoor } from "../constant/AbsCoor";
import { AbsActive } from "../components/AbsActive";
import { Link } from "react-router-dom";

export enum AbsPart {
  AllOver = "all-over",
  Luq = "luq",
  Ruq = "ruq",
  Llq = "llq",
  Rlq = "rlq",
  Epigastrium = "epigastrium",
  Suprapubic = "suprapubic",
  None = "",
}

export const AbsPage: React.FC = () => {
  const [absPart, setAbsPart] = useState<AbsPart>(AbsPart.None);

  console.log(absPart);

  return (
    <>
      <div className="flex flex-col items-center bg-white rounded-2xl max-w-4xl mx-auto border-8 mt-10">
        <p className=" flex justify-center text-3xl bg-white mt-10">
          บริเวณไหนบนท้องเจ็บมากที่สุด?
        </p>
        <div className="relative">
          <img
            src={defaultAbs}
            alt="default-abs"
            width={828}
            height={976}
            className="mx-auto"
            useMap="#defaultAbs"
          />
          <map name="defaultAbs">
            {absCoor.map((part) => (
              <area
                key={part.name}
                shape={part.shape}
                coords={part.coords}
                alt={part.alt}
                className="cursor-pointer"
                onClick={() => setAbsPart(part.name as AbsPart)}
              />
            ))}
          </map>
          <AbsActive absPart={absPart} />

          <div className="flex justify-end">
            <Link to="/finger-page">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4 text-2xl mb-10">
                ต่อไป
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
