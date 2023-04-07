import { Link } from "@remix-run/react";
import { Container } from "../../common/Container";

export function Header() {
  return (
    <div className="sticky top-0 z-10">
      <div className="border-b-0 border-gray-800 bg-slate-950 bg-opacity-75 py-6 relative after:absolute after:inset-0 after:backdrop-blur-sm after:blur after:-z-10">
        <Container>
          <Link to="/" className="text-md title">
            CoachAI
          </Link>
        </Container>
      </div>
    </div>
  );
}
