export interface ServiceUser {
    id: number;
    name: string;
    age: number;
    careStatus: "Active" | "Inactive" | "On Hold";
    nextAppointment: string;
  }
  