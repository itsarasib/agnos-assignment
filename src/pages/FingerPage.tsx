import { useState } from "react";
import defaultFinger from "/finger/default-finger.png";
import { FingerActive } from "../components/FingerActive";
import { fingerCoor } from "../components/FingerCoor";

export const FingerPage: React.FC = () => {
  const [fingerPart, setFingerPart] = useState<string>("");

  return (
    <>
      <div className="flex flex-col items-center bg-neutral-500 rounded-2xl">
        <p className=" flex justify-center text-2xl bg-slate-800">
          เจ็บนิ้วบริเวณไหนมากที่สุด?
        </p>
        <div className="relative">
          <img
            src={defaultFinger}
            alt="default-finger"
            width={828}
            height={976}
            className="mx-auto"
            useMap="#defaultFinger"
          />
          <map name="defaultFinger">
            {fingerCoor.map((part) => (
              <area
                key={part.name}
                shape={part.shape}
                coords={part.coords}
                alt={part.alt}
                className="cursor-pointer"
                onClick={() => setFingerPart(part.name)}
              />
            ))}
          </map>
          <FingerActive fingerPart={fingerPart} />

          <div className="flex justify-start">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">
              ย้อนกลับ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
