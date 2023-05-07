import { Link } from "@remix-run/react";
import { Container } from "../../commons/Container";

export function Footer() {
  return (
    <div className="border-t border-white/10 py-4 text-sm text-gray-300">
      <Container>
        <div className="flex flex-1 justify-between">
          <div className="flex gap-4">
            <span>
              © 2023 <Link to="/">CoachAI</Link>
            </span>
            <span>•</span>
            <span>Propulsé par ChatGPT</span>
          </div>
          <Link target="_blank" to="https://github.com/JohannHospice/coachai">
            GitHub
          </Link>
        </div>
      </Container>
    </div>
  );
}
