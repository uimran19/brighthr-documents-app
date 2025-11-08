import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FolderPage from "./FolderPage";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom";

describe("FolderPage", () => {
  it("should render folder and file names from mock data on the root path", () => {
    //Arrange
    render(
      <BrowserRouter>
        <FolderPage />
      </BrowserRouter>
    );
    //Act - none in this test
    //Assert
    expect(screen.getByText("Expenses")).toBeInTheDocument();
    expect(screen.getByText("Misc")).toBeInTheDocument();
    expect(screen.getByText("Employee Handbook")).toBeInTheDocument();
  });
  it("should render folder contents when in the Expenses folder", () => {
    //Arrange
    render(
      <MemoryRouter initialEntries={["/expenses"]}>
        <Routes>
          <Route path="/:folderName" element={<FolderPage />} />
        </Routes>
      </MemoryRouter>
    );
    //Act - none in this test
    //Assert
    expect(screen.getByText("Fuel allowances")).toBeInTheDocument();
    expect(screen.queryByText("Misc")).not.toBeInTheDocument();
  });
  it("should render folder contents when in the Misc folder", () => {
    //Arrange
    render(
      <MemoryRouter initialEntries={["/misc"]}>
        <Routes>
          <Route path="/:folderName" element={<FolderPage />} />
        </Routes>
      </MemoryRouter>
    );
    //Act - none in this test
    //Assert
    expect(screen.getByText('Welcome to the company!')).toBeInTheDocument()
    expect(screen.queryByText("Fuel allowances")).not.toBeInTheDocument();
    expect(screen.queryByText("Expenses")).not.toBeInTheDocument();
  });
  it("should display an error message when trying to enter an invalid directory", () => {
    //Arrange
    render(
      <MemoryRouter initialEntries={["/notexist"]}>
        <Routes>
          <Route path="/:folderName" element={<FolderPage />} />
        </Routes>
      </MemoryRouter>
    );
    //Act - none in this test
    //Assert
    expect(screen.getByText('Invalid directory name')).toBeInTheDocument()
    expect(screen.queryByText("Fuel allowances")).not.toBeInTheDocument();
    expect(screen.queryByText("Expenses")).not.toBeInTheDocument();
  });
});
