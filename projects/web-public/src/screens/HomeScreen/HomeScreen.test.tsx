import { customRender } from "@njs-five/test-commons/react-testing-library";
import { HomeScreen } from "./HomeScreen";

const render = customRender();

describe("<HomeScreen />", () => {
  it("should render the page", () => {
    const { container } = render(<HomeScreen />);

    expect(container).toMatchSnapshot();
  });
});
