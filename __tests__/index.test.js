// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import Home from "../pages/index";
import DATA from "../assets/data.json";

// jest.mock("axios");

describe("Home general", () => {
  it("renders the title", () => {
    render(<Home page={DATA.en} lang="en" data={DATA.dozer} />);
    const heading = screen.getByRole("heading", {
      name: /boom\sand\sbucket/i,
    });
    expect(heading).toBeInTheDocument();
  });
});

describe("Home results filtering", () => {
  it("renders the filter controls", () => {
    render(<Home page={DATA.en} lang="en" data={DATA.dozer} />);

    const filterSubmit = screen.getByRole("button", { name: "Filter" });

    expect(filterSubmit).toBeInTheDocument();
  });

  it("can filter by name", async () => {
    act(() => {
      render(<Home page={DATA.en} lang="en" data={DATA.dozer} />);
    });

    const input = screen.getByRole("textbox", { name: "text" });
    const submit = screen.getByRole("button", { name: "Filter" });

    const D1Dozer = screen.getByText(/Caterpillar\s-\sD1/i);
    const D4Dozer = screen.getByText(/Cat\s-\sD4/i);

    act(() => {
      userEvent.type(input, "D1");
      userEvent.click(submit);
    });

    await waitFor(() => expect(D1Dozer).toBeInTheDocument());
    await waitFor(() => expect(D4Dozer).not.toBeInTheDocument());
  });

  it("can filter by category", async () => {
    act(() => {
      render(<Home page={DATA.en} lang="en" data={DATA.dozer} />);
    });

    const input = screen.getAllByRole("checkbox", { name: "category" })[0];
    const submit = screen.getByRole("button", { name: "Filter" });

    const D1Dozer = screen.getByText(/Caterpillar\s-\sD1/i);
    const D4Dozer = screen.getByText(/Cat\s-\sD4/i);

    act(() => {
      userEvent.click(input);
      userEvent.click(submit);
    });

    await waitFor(() => expect(D1Dozer).toBeInTheDocument());
    await waitFor(() => expect(D4Dozer).not.toBeInTheDocument());
  });
});
