import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Section,
} from "@react-email/components";

export default function EmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Html>

      <Head />

      <Body
        style={{
          backgroundColor: "#f4f4f5",
          fontFamily: "Arial, sans-serif",
        }}
      >

        <Container
          style={{
            backgroundColor: "#ffffff",
            margin: "40px auto",
            maxWidth: "650px",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >

          <Section
            style={{
              backgroundColor: "#16a34a",
              padding: "35px",
              textAlign: "center",
            }}
          >

            <Img
              src="https://agric-ai.com/logo.png"
              width="90"
              style={{
                margin: "0 auto",
              }}
            />

            <h1
              style={{
                color: "white",
                marginTop: "20px",
              }}
            >
              AGRIC AI
            </h1>

            <p
              style={{
                color: "#dcfce7",
              }}
            >
              AI-Powered Agriculture Solutions
            </p>

          </Section>

          <Section
            style={{
              padding: "40px",
            }}
          >

            {children}

          </Section>

        </Container>

      </Body>

    </Html>
  );
}