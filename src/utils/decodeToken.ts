import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp: number;
  iat: number;
  [key: string]: unknown;
}

export function decodeToken(token: string): DecodedToken {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded;
  } catch (error) {
    console.error("Invalid token:", error);
    throw new Error("Invalid token");
  }
}
