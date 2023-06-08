import { expect, it } from "vitest";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const createThenGetUser = async (
  // TODO
  // function createUser returns a Promise of type "string"
  createUser: () => Promise<string>,
  // TODO
  // function getUser takes in an id of type "string" and returns a Promise of "User" 
  getUser: (id: string) => Promise<User> ,
): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};

it("Should create the user, then get them", async () => {
  const user = await createThenGetUser(
    async () => "123",
    async (id) => ({
      id,
      firstName: "Matt",
      lastName: "Pocock",
    }),
  );

  expect(user).toEqual({
    id: "123",
    firstName: "Matt",
    lastName: "Pocock",
  });
});
