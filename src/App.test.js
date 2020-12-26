import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {WordAndDefinition} from './WordAndDefinition';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders definition", async () => {
  const dummyWord = {
    word: "Word",
    definition: "Definition definition definition definition definition"
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(dummyWord)
    })
  );
  await act(async () => {
    render(<WordAndDefinition />, container);
  });

  expect(container.querySelector(".word").textContent).toBe(dummyWord.word);
  expect(container.querySelector(".definition").textContent).toBe(dummyWord.definition);

  global.fetch.mockRestore();
});
