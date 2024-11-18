import { ServiceUser } from "../types/ServiceUser";

export const filterByStatus = (users: ServiceUser[], status: string) => {
  return users.filter((user) => user.careStatus === status);
};

export const filterByAgeRange = (
  users: ServiceUser[],
  min: number,
  max: number
) => {
  return users.filter((user) => user.age >= min && user.age <= max);
};

export const filterByUpcomingAppointments = (users: ServiceUser[]) => {
  const now = new Date();
  return users.filter((user) => new Date(user.nextAppointment) > now);
};
