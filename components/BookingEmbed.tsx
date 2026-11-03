const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

export default function BookingEmbed() {
  if (!calLink) {
    return (
      <div className="rounded-xl border border-dashed border-line bg-card p-10 text-center text-sm text-muted">
        Booking is not configured yet. Set <code className="font-mono">NEXT_PUBLIC_CAL_LINK</code> (for example
        <code className="font-mono"> yourname/audit</code>) or use the form below.
      </div>
    );
  }
  return (
    <iframe
      title="Book the free audit"
      src={`https://cal.com/${calLink}?embed=true&layout=month_view`}
      className="h-[700px] w-full rounded-xl border border-line bg-card"
      loading="lazy"
    />
  );
}
