import React from "react";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';
import {WordAndDefinition} from './WordAndDefinition';

it("renders definition", async () => {
  const dummyWord = {
    word: "Word",
    definition: "Definition definition definition definition definition"
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({json: () => Promise.resolve(dummyWord)})
  );

  const {findByText, unmount} = render(<WordAndDefinition />);

  expect(await findByText(/Word/)).toBeInTheDocument();
  expect(await findByText(/definition/)).toBeInTheDocument();

  // expect(await findByText(/just testing/)).toBeInTheDocument();
  // just testing for failed case

  global.fetch.mockRestore();
  unmount();
});
