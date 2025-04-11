// src/schemas/login.schema.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "有効なメールアドレスを入力してください。" })
    .email({ message: "有効なメールアドレスを入力してください。" }),
  password: z
    .string()
    .min(1, { message: "パスワードは6文字以上で入力してください。" })
    .min(6, { message: "パスワードは6文字以上で入力してください。" }),
});
