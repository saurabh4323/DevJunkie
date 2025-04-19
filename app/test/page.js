"use client";
import React from "react";
import CoolButtons, {
  GradientButton,
  MinimalButton,
  NeonButton,
  PulseButton,
} from "devjunkie-buttons";
export default function page() {
  return (
    <div>
      <GradientButton>Click Me</GradientButton>
      <NeonButton>Click Me</NeonButton>
      <PulseButton>Click Me</PulseButton>
      <MinimalButton>Click Me</MinimalButton>
      <GradientButton>Click Me</GradientButton>
    </div>
  );
}
