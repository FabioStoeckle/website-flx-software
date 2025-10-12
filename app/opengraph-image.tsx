import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FLX Software – Apps. Tools. Klartext.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111827",
          gap: "32px",
          fontFamily: "Rajdhani",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: 120,
              fontWeight: 700,
              color: "#22D3EE",
              letterSpacing: "-0.02em",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            FLX
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: "#22D3EE",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#0EA5E9",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            SOFTWARE
          </div>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#F8FAFC",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          Apps. Tools. Klartext.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

