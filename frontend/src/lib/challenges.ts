import { Challenge } from "@/types/challenge";

export const getChallenges = async (): Promise<Challenge[]> => {
  // TODO: Implement logic to get challenges from the database

  // Mock data
  return [
    {
      id: "1",
      name: "Sequence Memory",
      description: "Memorize the sequence of numbers and repeat it back.",
      link: "/challenges/sequence-memory",
    },
    {
      id: "2",
      name: "Reaction Time",
      description: "React to a stimulus as quickly as possible.",
      link: "/challenges/reaction-time",
    },
    {
      id: "3",
      name: "Challenge 3",
      description: "Description 3",
      link: "/challenges/challenge-3",
    },
  ];
};
