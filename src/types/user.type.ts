// Base type for common user fields
export type BaseUser = {
  username: string;
  password: string;
  email: string;
  address: string;
};

// Full user type including additional fields
export type User = BaseUser & {
  id: string;
  mobile: string;
};

export type LoginForm = Pick<BaseUser, "email" | "password">;

export type RegistrationForm = Omit<BaseUser, "id">;

export type AuthContextType = {
  userS: UserContext | null;
  setUserS: (user: UserContext | null) => void;
};

export type UserContext = {
  username: string
}
