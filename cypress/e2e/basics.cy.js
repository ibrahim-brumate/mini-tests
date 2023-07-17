/// <reference types="cypress" />

it("object tests", () => {
  const obj = {
    a: 1,
    b: 2,
  };

  const bannanas1 = {
    a: 1,
    b: 2,
  };

  const bannanas = {
    bannanas: false,
    b: 5,
  };

  const obj3 = {};

  expect(obj).not.equal(bannanas1);
  expect(obj).deep.equal(bannanas1);
  expect(bannanas).to.have.property("bannanas");
  expect(obj3).to.be.empty;
  expect(bannanas).include({ b: 5 });
  expect(bannanas1).to.have.property("b");
});

it("array tests", () => {
  const fruits = [1, 2, 3];
  expect(fruits).to.have.members([1, 2, 3]);
  expect(fruits).to.include.members([1, 3]);
  expect(fruits).to.be.not.empty;
});

it("data tests", () => {
  const f = 1;
  const a = "dois";
  const b = true;
  const d = null;
  const c = undefined;
  const e = [];

  expect(f).to.be.a("number");
  expect(a).to.be.a("string");
  expect(b).to.not.be.a("object");
  expect(d).to.be.null;
  expect(c).to.be.undefined;
  expect(e).to.be.an("array");
});
