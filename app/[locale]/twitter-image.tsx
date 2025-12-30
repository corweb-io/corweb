import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Corweb - Custom Software for SMEs";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const title =
    locale === "fr"
      ? "Logiciels Sur-Mesure pour PME"
      : "Custom Software for SMEs";

  const subtitle =
    locale === "fr"
      ? "Développement accéléré par l'IA"
      : "AI-Accelerated Development";

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        backgroundImage:
          "radial-gradient(circle at 25% 25%, rgba(196, 255, 50, 0.1) 0%, transparent 50%)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            backgroundColor: "rgba(196, 255, 50, 0.1)",
            border: "2px solid rgba(196, 255, 50, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
          }}
        >
          {"</>"}
        </div>
        <span
          style={{
            fontSize: "48px",
            fontWeight: "bold",
          }}
        >
          <span style={{ color: "#c4ff32" }}>Cor</span>
          <span style={{ color: "#f5f5f5" }}>web</span>
        </span>
      </div>

      {/* Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#f5f5f5",
            textAlign: "center",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "32px",
            color: "#c4ff32",
            margin: 0,
            fontFamily: "monospace",
          }}
        >
          $ {subtitle.toLowerCase().replace(/ /g, "_")}
        </p>
      </div>

      {/* Bottom tagline */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#666",
          fontSize: "20px",
        }}
      >
        <span>corweb.io</span>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
