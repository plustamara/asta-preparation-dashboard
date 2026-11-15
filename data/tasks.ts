export type Priority = "High" | "Medium";

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
};

export const tasks: Task[] = [
  {
    id: "sword-control",
    title: "Sword control",
    description: "Practise precise anti-magic sword movements.",
    priority: "High",
  },
  {
    id: "physical-endurance",
    title: "Physical endurance",
    description: "Complete a focused strength and stamina session.",
    priority: "Medium",
  },
  {
    id: "team-coordination",
    title: "Team coordination",
    description: "Review a preparation plan with the Black Bulls.",
    priority: "High",
  },
];