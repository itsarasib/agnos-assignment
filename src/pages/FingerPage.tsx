import { useState } from "react";
import defaultFinger from "/finger/default-finger.png";
import { FingerActive } from "../components/FingerActive";
import { fingerCoor } from "../constant/FingerCoor";
import { Link } from "react-router-dom";

export enum FingerPart {
  dip = "dip",
  pip = "pip",
  mcp = "mcp",
  None = "",
}

export const FingerPage: React.FC = () => {
  const [fingerPart, setFingerPart] = useState<FingerPart>(FingerPart.None);

  console.log(fingerPart);

  return (
    <>
      <div className="flex flex-col items-center bg-white rounded-2xl max-w-4xl mx-auto border-8 mt-10">
        <p className=" flex justify-center text-3xl bg-white mt-10">
          บริเวณไหนบนมือเจ็บมากที่สุด?
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
                onClick={() => setFingerPart(part.name as FingerPart)}
              />
            ))}
          </map>
          <FingerActive fingerPart={fingerPart} />

          <div className="flex justify-start">
            <Link to="/abs-page">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4 text-2xl mb-10">
                ย้อนกลับ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
