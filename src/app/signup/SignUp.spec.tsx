import { render } from "@testing-library/react";
import { SignUp } from ".";

test("SignUp renders correctly", () => {
  const { debug } = render(
    <SignUp href="/" activeClassName="active">
      <a>Cadastro</a>
    </SignUp>
  );

  debug();
});
