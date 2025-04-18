"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Slidebar";
import MainContent from "./MainContent";

export default function Home() {
  const pathname = usePathname();
  const [currentSection, setCurrentSection] = useState("getting-started");
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("/packages.json")
      .then((response) => response.json())
      .then((data) => setPackages(data.packages || []))
      .catch((error) => console.error("Error loading package data:", error));

    setCurrentSection(
      pathname === "/testimonials" ? "testimonials" : "getting-started"
    );
  }, [pathname]);

  return (
    <div className="flex min-h-screen  text-white-400">
      <Sidebar />
      <MainContent currentSection={currentSection} packages={packages} />
    </div>
  );
}
