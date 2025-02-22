import React from "react";
import Input from "../../components/Input";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { FiMail } from "react-icons/fi";

jest.mock("@unform/core", () => {
  return {
    useField() {
      return {
        fieldName: "email",
        defaultValue: "",
        error: "",
        registerField: jest.fn(),
      };
    },
  };
})

describe("Input component", () => {
  it("should be able to render an input", () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" icon={FiMail} />
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it("should render highlight on input focus", async() => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" icon={FiMail} />
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle('border-color: #ff9000');
      expect(containerElement).toHaveStyle('color: #666360');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).not.toHaveStyle('border-color: #ff9000');
      expect(containerElement).not.toHaveStyle('color: #ff9000');
    });
  });

  it("should keep input border highlight when input is filled", async() => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" icon={FiMail} />
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.change(inputElement, {
      target: { value: 'johndoe@example.com.br'}
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle('color: #666360');
    });
  });
})
