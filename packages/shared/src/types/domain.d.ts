declare namespace APPS {
  type User = import('./user').User;
  type UserDTO = import('./user').UserDTO;

  export { UserDTO, User };
}
