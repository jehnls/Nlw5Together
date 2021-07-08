describe("get email user received compliment", () => {
  interface IUser {
    name: string;
    email: string;
  }

  const user: IUser = {
    name: "jef",
    email: "jef@live.com",
  };

  it("should return person's email  that it was received compliment", () => {
    expect(user.email).toEqual("jef@live.com");
  });
});
