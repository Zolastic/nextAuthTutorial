import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "./components/UserCard";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <div className="flex flex-col items-center p-6rounded-lg font-bold text-5xl text-slate-100">
          You are not logged in!
        </div>
      )}
    </>
  );
}
