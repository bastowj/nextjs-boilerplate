import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../Navbar";

const mockUsePathname = jest.fn();

jest.mock("next/navigation", () => ({
  usePathname: () => mockUsePathname(),
}));

jest.mock("next-themes", () => ({
  useTheme: () => ({ resolvedTheme: "light", setTheme: jest.fn() }),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt ?? ""} {...props} />
  ),
}));

jest.mock("@/lib/icons", () => ({
  SunIcon: () => <svg />,
  MoonIcon: () => <svg />,
  Bars3Icon: () => <svg />,
  XMarkIcon: () => <svg />,
}));

describe("Navbar", () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue("/texts/example-post");
  });

  it("marks the parent route current on nested pages", () => {
    render(<Navbar />);

    const textsLinks = screen.getAllByRole("link", { name: "Texts" });
    expect(textsLinks).toHaveLength(1);
    for (const link of textsLinks) {
      expect(link).toHaveClass("font-medium");
      expect(link).toHaveAttribute("aria-current", "page");
    }

    for (const link of screen.getAllByRole("link", { name: "Home" })) {
      expect(link).toHaveClass("font-normal");
      expect(link).not.toHaveAttribute("aria-current");
    }
  });

  it("labels the primary navigation and exposes mobile menu state", () => {
    render(<Navbar />);

    expect(
      screen.getByRole("navigation", { name: "Primary navigation" }),
    ).toBeInTheDocument();

    const openButton = screen.getByRole("button", {
      name: "Open navigation menu",
    });
    expect(openButton).toHaveAttribute("aria-expanded", "false");
    expect(openButton).toHaveAttribute(
      "aria-controls",
      "mobile-navigation-menu",
    );

    fireEvent.click(openButton);
    expect(
      screen.getByRole("button", { name: "Close navigation menu" }),
    ).toHaveAttribute("aria-expanded", "true");
    expect(
      document.getElementById("mobile-navigation-menu"),
    ).toBeInTheDocument();
  });
});
