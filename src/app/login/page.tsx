import { LoginForm } from "./components/LoginFrom";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4 sm:p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            アカウントにログイン
          </h1>
          <p className="text-sm text-slate-600">
            または{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              新規登録
            </a>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
