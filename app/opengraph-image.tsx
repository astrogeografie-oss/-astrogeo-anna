import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const imageData = await readFile(join(process.cwd(), "public/anna-portrait.jpg"));
  const portrait = `data:image/jpeg;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          background: "#faf7f2",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Portrait – left half */}
        <div
          style={{
            width: 480,
            height: 630,
            flexShrink: 0,
            position: "relative",
            display: "flex",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portrait}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
          {/* Fade to right */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, transparent 60%, #faf7f2 100%)",
            }}
          />
        </div>

        {/* Right – text */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 80px 60px 40px",
          }}
        >
          {/* Label */}
          <div
            style={{
              fontFamily: "serif",
              fontSize: 13,
              letterSpacing: "0.4em",
              color: "#6a4c10",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Astrogeografie · Deutschland
          </div>

          {/* Headline */}
          <div
            style={{
              fontFamily: "serif",
              fontSize: 58,
              fontWeight: 300,
              color: "#2c2010",
              lineHeight: 1.15,
              marginBottom: 8,
            }}
          >
            Astrokartographie
          </div>
          <div
            style={{
              fontFamily: "serif",
              fontSize: 58,
              fontWeight: 500,
              color: "#b8922e",
              lineHeight: 1.15,
              marginBottom: 32,
            }}
          >
            mit Anna Thoma
          </div>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 1,
              background: "#b8922e",
              opacity: 0.5,
              marginBottom: 32,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontFamily: "serif",
              fontSize: 22,
              fontWeight: 300,
              color: "#52402e",
              lineHeight: 1.5,
              marginBottom: 40,
            }}
          >
            Finde deinen Kraftort auf der Erde.{"\n"}90 Min. Deep-Dive · ab 495 €
          </div>

          {/* URL badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(184,146,46,0.12)",
              border: "1px solid rgba(184,146,46,0.35)",
              borderRadius: 4,
              padding: "10px 18px",
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#b8922e",
              }}
            />
            <div
              style={{
                fontFamily: "serif",
                fontSize: 15,
                letterSpacing: "0.1em",
                color: "#8a6420",
                textTransform: "uppercase",
              }}
            >
              astrogeoanna.com
            </div>
          </div>
        </div>

        {/* Top gold line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(to right, transparent, #b8922e, transparent)",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
