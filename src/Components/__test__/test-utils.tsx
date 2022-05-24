import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Rootprovider } from "../../services/RootContext";
import "@testing-library/jest-dom/extend-expect";

type ContextProps = {
  children: JSX.Element;
};

const AllTheProviders = ({ children }: ContextProps) => {
  return <Rootprovider>{children}</Rootprovider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
