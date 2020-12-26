import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {WordAndDefinition} from './WordAndDefinition';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
//so before each test, div element is created and it is attached to the document
//it will be used as a render target - does that mean like how a root is a render target?

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
//after each test, the component is unmounted from the container
//div is removed from the document?
//container binding now points to the value null

it("renders definition", async () => {
  const dummyWord = {
    word: "Word",
    definition: "Definition definition definition definition definition"
  };
  //this will be the mocked response to the fetch request

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(dummyWord)
    })
  );
  //spyOn creates a mock function
  //spyOn tracks calls to object[methodname]
  //I guess in this case, means spyOn tracks calls to the global object [fetch]
  //global object is window? in the browser?
  //are there other kinds?

  //mock functions are known as spies because they let you spy on the behaviour
  //of a function that is called indirectly by some other code
  //what?

  //spyOn takes two parameters
  //the first parameter is an object
  //the second parameter is the name of the method to be spied upon
  //spyOn replaces the method with a stub
  //a stub is a piece of code used to stand in for some other programming functionality

  //is the stand in the function inside mockImplementation?

  //mockImplementation - accepts a function that should be used as the implementation of the mock
  //implementation will be executed when the mock is called

  //okay, so when the method fetch of the global object is called,
  //the function inside mockImplementation is executed
  //how does it get passed to the component though?
  //it listens to the component making fetch and replaces that fetch with a resolved promise?
  //how do you test for multiple fetches in one component?


  await act(async () => {
    render(<WordAndDefinition />, container);
    //is it necessary to pass in props at this point?
    //I removed it and the test still passed
  });

  expect(container.querySelector(".word").textContent).toBe(dummyWord.word);
  expect(container.querySelector(".definition").textContent).toBe(dummyWord.definition);

  global.fetch.mockRestore();
  //mock restore removes the mock
  //it restores the initial implementation
  //it restores the fetch in the component?

});
