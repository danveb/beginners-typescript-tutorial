import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

// initialize type Base where we declare the id as string
// we then extend Base to User, Post, Comment to share same "id" property from Base
type Base = {
  id: string, 
}; 

interface User extends Base {
  // id: string;
  firstName: string;
  lastName: string;
}

interface Post extends Base {
  // id: string;
  title: string;
  body: string;
}

interface Comment extends Base {
  // id: string;
  comment: string;
}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>,
];
