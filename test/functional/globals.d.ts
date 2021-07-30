declare namespace NODEJS {
  interface Global {
    testRequest: import("supertest").SuperTest<import("supertest").Test>;
  }
}
