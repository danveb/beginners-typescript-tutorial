interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */

  // be explicit with role of User, which are all strings
  // initialize union of admin, user and super-admin only
  role: "admin" | "user" | "super-admin";
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
