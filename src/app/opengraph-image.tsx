import { ImageResponse } from "next/og";

/* Replaces the previously-referenced /og.jpg, which did not exist in
   public/ — every share card was rendering with a broken image. */

export const alt = "Hector Cordero — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#F6EEE6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 64,
            height: 6,
            backgroundColor: "#6f4e37",
            marginBottom: 40,
          }}
        />
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            color: "#4b3526",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          Hector Cordero
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#6f4e37",
            marginTop: 20,
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#8c6a55",
            marginTop: 48,
          }}
        >
          Computer Science · University of Central Florida
        </div>
      </div>
    ),
    { ...size }
  );
}
