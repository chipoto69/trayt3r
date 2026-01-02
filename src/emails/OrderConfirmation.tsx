import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface OrderConfirmationProps {
  customerName: string;
  tierName: string;
  amount: number;
}

export default function OrderConfirmation({
  customerName = "Collector",
  tierName = "Pre-Sale",
  amount = 2100,
}: OrderConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>Your Trajter Table is Reserved</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Thank You, {customerName}</Heading>
          <Text style={text}>
            Your <span style={accentText}>{tierName}</span> reservation is
            confirmed.
          </Text>
          <Section style={priceBox}>
            <Text style={priceText}>Total: ${amount.toLocaleString()}</Text>
          </Section>
          <Text style={mutedText}>
            We&apos;ll be in touch with production updates. Expected delivery:
            8-12 weeks.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#0a0a0a",
  fontFamily: "system-ui, sans-serif",
};

const container = {
  border: "1px solid #262626",
  borderRadius: "4px",
  margin: "40px auto",
  padding: "32px",
  maxWidth: "500px",
};

const heading = {
  color: "#fafafa",
  fontSize: "28px",
  fontWeight: "normal",
  textAlign: "center" as const,
  marginBottom: "24px",
};

const text = {
  color: "#a1a1a1",
  fontSize: "16px",
  lineHeight: "24px",
};

const accentText = {
  color: "#c9a962",
  fontWeight: "600",
};

const priceBox = {
  backgroundColor: "#141414",
  borderRadius: "4px",
  padding: "16px",
  marginTop: "24px",
  marginBottom: "24px",
};

const priceText = {
  color: "#fafafa",
  fontSize: "20px",
  margin: "0",
  textAlign: "center" as const,
};

const mutedText = {
  color: "#666",
  fontSize: "14px",
  textAlign: "center" as const,
};
