import bcrypt from "bcryptjs";
import { env } from "./env";

export function hashPassword(password: string) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

export function comparePassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}
