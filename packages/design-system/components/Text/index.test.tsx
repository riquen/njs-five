import { customRender } from "@njs-five/test-commons/react-testing-library";
import { Text } from ".";

const render = customRender();

describe("<Text />", () => {
  it("should render h1 tag", () => {
    const { container } = render(<Text tag="h1">Sample Text</Text>);
    expect(container).toMatchSnapshot();
  });
});
