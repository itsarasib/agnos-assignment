import { useState } from "react";
import defaultAbs from "/abs/default-abs.png";

export const AbsPage: React.FC = () => {
  const [absPart, setAbsPart] = useState<string>("");

  return (
    <>
      <div className="relative bg-slate-500 mx-auto max-w-lg rounded-2xl py-10">
        <p className=" flex justify-center text-xl">เจ็บบริเวณไหนมากที่สุด</p>
        <div className="relative">
          <img
            src={defaultAbs}
            alt="default-abs"
            width="500"
            height="400"
            className="mx-auto"
            useMap="defaultAbs"
          />

          <map name="defaultAbs">{}</map>
        </div>
      </div>
    </>
  );
};
