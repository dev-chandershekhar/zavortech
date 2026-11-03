import BookingCalendar from "./BookingCalendar";

const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

export default function BookingEmbed() {
  if (!calLink) return <BookingCalendar />;
  return (
    <iframe
      title="Book the free audit"
      src={`https://cal.com/${calLink}?embed=true&layout=month_view`}
      className="h-[700px] w-full rounded-xl border border-line bg-card"
      loading="lazy"
    />
  );
}
