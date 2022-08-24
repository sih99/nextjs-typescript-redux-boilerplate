export interface User {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export type StatusState = {
  authed: boolean;
  account: User | null;
};
