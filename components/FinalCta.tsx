import Button from "./Button";
import { BOOKING_URL } from "@/lib";

export default function FinalCta() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-4xl rounded-2xl bg-accent px-8 py-16 text-center text-accent-fg">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Show us the project you are most worried about.
        </h2>
        <p className="mx-auto mt-4 max-w-xl opacity-90">
          A 30-minute screen-share review and an honest assessment, whether or not you hire us.
        </p>
        <div className="mt-8">
          <Button href={BOOKING_URL} variant="secondary">Book the free audit</Button>
        </div>
      </div>
    </section>
  );
}
