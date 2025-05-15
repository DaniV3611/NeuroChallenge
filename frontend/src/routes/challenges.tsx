import { Challenge } from "@/types/challenge";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/challenges")({
  component: RouteComponent,
});

function RouteComponent() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  return (
    <div className="w-full min-h-dvh bg-gradient-to-bl from-blue-200 via-pink-100 to-green-200 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mt-20 animate-fade-in-up">
        Challenges
      </h1>
    </div>
  );
}
