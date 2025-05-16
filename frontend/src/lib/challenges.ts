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
      name: "Challenge 2",
      description: "Description 2",
      link: "/challenges/challenge-2",
    },
    {
      id: "3",
      name: "Challenge 3",
      description: "Description 3",
      link: "/challenges/challenge-3",
    },
  ];
};
