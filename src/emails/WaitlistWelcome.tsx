import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";

interface WaitlistWelcomeProps {
  name?: string;
}

export default function WaitlistWelcome({ name }: WaitlistWelcomeProps) {
  return (
    <Html>
      <Head />
      <Preview>You&apos;re on the Trajter Waitlist</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>
            Welcome{name ? `, ${name}` : ""}
          </Heading>
          <Text style={text}>
            You&apos;ve joined the Trajter waitlist. We&apos;ll notify you when
            pre-sale opens.
          </Text>
          <Text style={text}>
            In the meantime, explore our collection at{" "}
            <Link href="https://trajter.com" style={link}>
              trajter.com
            </Link>
            .
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
  fontSize: "24px",
  fontWeight: "normal",
  marginBottom: "16px",
};

const text = {
  color: "#a1a1a1",
  fontSize: "16px",
  lineHeight: "24px",
};

const link = {
  color: "#c9a962",
};
