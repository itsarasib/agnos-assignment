import { useState } from "react";
import defaultAbs from "/abs/default-abs.png";
import { absCoor } from "../components/AbsCoor";
import { AbsActive } from "../components/AbsActive";

export const AbsPage: React.FC = () => {
  const [absPart, setAbsPart] = useState<string>("");

  return (
    <>
      <div className="flex flex-col items-center bg-neutral-500 rounded-2xl">
        <p className=" flex justify-center text-2xl bg-slate-800">
          เจ็บท้องบริเวณไหนมากที่สุด
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
                onClick={() => setAbsPart(part.name)}
              />
            ))}
          </map>
          <AbsActive absPart={absPart} />

          <div className="flex justify-end">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">
              ต่อไป
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
