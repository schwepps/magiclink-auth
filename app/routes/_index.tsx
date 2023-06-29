import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "My auth app" },
    { name: "description", content: "Welcome to my auth app!" },
  ];
};

export default function Index() {
  return (
    <div className="w-full max-w-5xl p-8">
      <h1 className="font-bold text-4xl">Welcome to my auth app</h1>
      <Link className="mt-4 underline hover:no-underline" to="/restricted">Go to private functionality</Link>
    </div>
  );
}
