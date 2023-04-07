import { Link } from "@remix-run/react";
import { Container } from "../../common/Container";

export function Footer() {
  return (
    <div className="border-t border-gray-800 py-4 text-sm text-gray-300">
      <Container>
        <div className="flex gap-4">
          <span>
            © 2023 <Link to="/">CoachAI</Link>
          </span>
          <span>•</span>
          <span>Propulsé par ChatGPT</span>
        </div>
      </Container>
    </div>
  );
}
