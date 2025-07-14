export interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  manager: string;
  role: string;
  state: string;
  country: string;
  postalCode: string;
  password: string;
  joiningDate: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}
