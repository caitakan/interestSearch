export interface StoreState {
    auth: Auth;
  }

export interface Auth{
  email: string;
  googleID: string;
  name: string;
}