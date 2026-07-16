import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Button,
  Hr,
} from "@react-email/components";

interface Props {
  name: string;
  subject: string;
  message: string;
  ticket: string;
}

export default function ContactConfirmation({
  name,
  subject,
  message,
  ticket,
}: Props) {
  return (
    <Html>
      <Head />

      <Body
        style={{
          background: "#f4f7fb",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "30px",
        }}
      >
        <Container
          style={{
            maxWidth: "650px",
            background: "#ffffff",
            borderRadius: "12px",
            overflow: "hidden",
            margin: "0 auto",
            boxShadow: "0 5px 20px rgba(0,0,0,.08)",
          }}
        >
          {/* Header */}
          <Section
            style={{
              background: "#15803d",
              padding: "45px",
              textAlign: "center",
            }}
          >
            <Heading
              style={{
                color: "white",
                margin: 0,
                fontSize: "36px",
              }}
            >
              🌱 AGRIC AI
            </Heading>

            <Text
              style={{
                color: "#dcfce7",
                fontSize: "18px",
              }}
            >
              Smart Agriculture Powered by Artificial Intelligence
            </Text>
          </Section>

          {/* Body */}
          <Section style={{ padding: "40px" }}>
            <Heading>Hello {name},</Heading>

            <Text style={{ fontSize: "16px", lineHeight: "28px" }}>
              Thank you for contacting <strong>AGRIC AI</strong>.
            </Text>

            <Text style={{ fontSize: "16px", lineHeight: "28px" }}>
              We have successfully received your message and one of our team
              members will respond within <strong>24–48 hours.</strong>
            </Text>

            {/* Message Card */}
            <Section
              style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                padding: "20px",
                marginTop: "25px",
              }}
            >
              <Heading
                as="h3"
                style={{
                  fontSize: "20px",
                  marginTop: 0,
                }}
              >
                Your Message
              </Heading>

              <Text>
                <strong>Subject:</strong> {subject}
              </Text>

              <Text>{message}</Text>
            </Section>

            {/* Ticket */}
            <Section
              style={{
                background: "#ecfdf5",
                border: "1px solid #16a34a",
                borderRadius: "10px",
                padding: "20px",
                marginTop: "30px",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 5,
                }}
              >
                Reference Number
              </Text>

              <Heading
                style={{
                  color: "#15803d",
                  margin: 0,
                }}
              >
                {ticket}
              </Heading>
            </Section>

            {/* Button */}
            <Section
              style={{
                textAlign: "center",
                marginTop: "35px",
              }}
            >
              <Button
                href="https://agric-ai.com"
                style={{
                  background: "#16a34a",
                  color: "#fff",
                  padding: "15px 35px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Visit AGRIC AI
              </Button>
            </Section>

            <Hr />

            <Text>
              Thank you for trusting AGRIC AI.
            </Text>

            <Text>
              We look forward to working with you.
            </Text>
          </Section>

          {/* Footer */}
          <Section
            style={{
              background: "#111827",
              color: "white",
              padding: "35px",
              textAlign: "center",
            }}
          >
            <Heading
              style={{
                color: "white",
                marginTop: 0,
              }}
            >
              Augustin Nkundimana
            </Heading>

            <Text style={{ color: "#d1d5db" }}>
              Founder & CEO, AGRIC AI
            </Text>

            <Text style={{ color: "#d1d5db" }}>
              📧 augunkundimana@gmail.com
            </Text>

            <Text style={{ color: "#d1d5db" }}>
              🌍 https://agric-ai.com
            </Text>

            <Text style={{ color: "#d1d5db" }}>
              Kigali, Rwanda
            </Text>

            <Hr />

            <Text
              style={{
                color: "#9ca3af",
                fontSize: "12px",
              }}
            >
              © 2026 AGRIC AI LTD • This is an automated confirmation email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}