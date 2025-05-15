import { Challenge } from "@/types/challenge";

export const getChallenger = async (): Promise<Challenge[]> => {
  // TODO: Implement logic to get challenges from the database

  // Mock data
  return [
    {
      id: "1",
      name: "Challenge 1",
      description: "Description 1",
    },
    {
      id: "2",
      name: "Challenge 2",
      description: "Description 2",
    },
    {
      id: "3",
      name: "Challenge 3",
      description: "Description 3",
    },
  ];
};
