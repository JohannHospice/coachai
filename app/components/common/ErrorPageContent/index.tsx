import { Container } from "../Container";
import { Heading } from "../Heading";
import { LinkHome } from "../LinkHome";

export function ErrorPageContent({
  title,
  children,
}: {
  children: any;
  title: string;
}) {
  return (
    <Container>
      <Heading title={title} subtitle={children} />
      <LinkHome>Tenter une nouvelle recherche</LinkHome>
    </Container>
  );
}
