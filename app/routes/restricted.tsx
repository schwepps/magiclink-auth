import { json, redirect, type LoaderArgs, type V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { getSession } from "utils/sessions.server";

export const meta: V2_MetaFunction = () => {
    return [
      { title: "Restricted page" },
      { name: "description", content: "The restricted page of my auth app" },
    ];
  };
  

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const data = await session.get("data");

  if (data === undefined) return redirect("/login");

  // Try to parse the data
  if (typeof data === "string") {
    try {
      if (!JSON.parse(data).data?.hasOwnProperty("userId")) return redirect("/login");
    } catch (error) {
      return redirect("/login");
    }
  }
  
  return json({});
}

export default function Index() {
  return (
    <div className="w-full max-w-5xl p-8">
      <h1 className="font-bold text-4xl">I'm a restricted access page</h1>
      <Link className="mt-4 underline hover:no-underline" to="/">Go back to home</Link>
    </div>
  );
}
