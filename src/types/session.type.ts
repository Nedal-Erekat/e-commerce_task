import { JWTPayload } from "jose";

export type SessionPayload = JWTPayload & {
    userId?: string;
    username?: string;
    expiresAt?: Date
}
