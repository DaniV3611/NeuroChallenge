import { CardContent, CardTitle, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { Label } from "../ui/label";
import { toast } from "sonner";

interface Props {
  changeTab: (tab: string) => void;
}

const Login = ({ changeTab }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log(email, password);

    if (true) {
      toast.success("Login successful!");
    } else {
      toast.error("Login failed");
    }
  };

  return (
    <CardHeader>
      <CardTitle>Log In</CardTitle>
      <CardContent className="mt-4">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full bg-gray-800">
            Log In
          </Button>
        </form>
        <div className="mt-2 text-center text-sm -mb-4">
          <span className="text-gray-600">Don't have an account? </span>
          <Button
            variant="link"
            className="text-gray-800 font-medium p-0"
            onClick={() => changeTab("signup")}
          >
            Create your account here
          </Button>
        </div>
      </CardContent>
    </CardHeader>
  );
};

export default Login;
