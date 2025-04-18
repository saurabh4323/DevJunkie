import React from "react";
import ButtonsShowcase from "./All";
import Sidebar from "@/app/packages/Slidebar";
export default function page() {
  return (
    <div>
      <div className="flex min-h-screen  text-white-400">
        <Sidebar />
        <ButtonsShowcase></ButtonsShowcase>
      </div>
    </div>
  );
}
