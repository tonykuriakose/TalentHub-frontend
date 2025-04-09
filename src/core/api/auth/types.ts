import { User } from "@core/types/user.Interface";

export interface LoginResponse {
    token: string;
    user: User
} 
export interface RegisterResponse {
    user: User
} 