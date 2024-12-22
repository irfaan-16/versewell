import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="min-h-fitScreen flex items-center justify-center">
      <SignIn />
    </section>
  );
}
