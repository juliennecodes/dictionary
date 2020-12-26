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

//okay, so this seems to work?
//so spyon is watching the global object, which is what was specified
//it's specifically watching its fetch method?
//if there are calls to the fetch method, it mocks the real implementation
//with a stand in
//so when there are fetch calls being made, the stand in function
//replaces it?
//in the real implementation, a fetch request is made to the server
//the server sends in information from the database depending on the
//information sent in the request
//the server then responds to the request using that information and
//sends a response
//the promise is resolved once the response from the server is sent
//the server response is further processed to get rid of the extraneous information
//the body of the server response is extracted, which takes some time
//res.json returns a promise that resolves to the response body
//that response body is then used to set the state of the component
//in the mock implementation, the mock function replaces all the server communication
//it skips that process and moves on to the resolved promise
//question - the resolved promise is the fetch right?
//so the mock skips the server communication and sends in hm
//what's going on here?
    // Promise.resolve({json: () => Promise.resolve(dummyWord)})
//resolve the promise and the end value is an object with a property of json
//json property has a function, which when called resolves to the value of the
//mocked data

//sooo is it resolving res.json() then not fetch promise?
//I don't get how that information is passed to the component though?

//okay, so word and definition component is rendered
//I didn't pass in any information to it for it to call fetch?
//or is it that spyOn called fetch
//but how could it? the component hasn't even rendered yet

//hmmm
//I don't get how the mock and component gets connected

//okay, so let's say it somehow replaces the fetch in the component,
//the component then sets the state using the resolved promise?

//does having the spyOn induce fetch request in a component?
//when that induced fetch request is made, the promise that is to be resolved by the server
//gets replaced by the mock promise resolve
//then it is testing whether the component works by seeing whether it is
//processing the mocked data?
