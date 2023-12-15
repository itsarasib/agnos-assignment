import React from "react";

import { AbsPage } from "./pages/AbsPage";
import { FingerPage } from "./pages/FingerPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AbsPage />} />
        <Route path="/finger-page" element={<FingerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
