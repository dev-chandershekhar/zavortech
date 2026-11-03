import { ImageResponse } from "next/og";

export const alt = "ZavorTech: your AI-built project, ready for production";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #16040f 0%, #4F0341 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 36, color: "#e9a9dc", fontWeight: 700 }}>{"{ } ZavorTech"}</div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
          Your AI-built project, ready for production.
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 30, color: "#d9c2d3" }}>
          Secured, tested, deployed and documented.
        </div>
      </div>
    ),
    size,
  );
}
