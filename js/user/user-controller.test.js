const UserController = require("./user-controller");
const User = require("./user");

//const userController = new UserController();
let userController;
beforeEach(() => {
  userController = new UserController(); // Se crea una nueva antes de cada test
});

test('add user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test('add() agrega un usuario que no está en la lista', () => {
  const usuario = { id: 1, nombre: 'Ana', email: 'ana@example.com' };
  userController.add(usuario);
  expect(userController.getUsers()).toContainEqual(usuario);
});


test('remove() no elimina si el usuario no existe (mismo objeto no presente)', () => {
  const user = { id: 1, nombre: 'Ana', email: 'ana@example.com' };
  // No lo agregamos a la lista
  userController.remove(user);
  expect(userController.getUsers()).toEqual([]); // Lista debe permanecer vacía
});

test('findByEmail() encuentra al usuario por su email', () => {
  const user = new User(2, 'Luis', 'luis@mail.com');
  userController.add(user);
  const resultado = userController.findByEmail('luis@mail.com');
  expect(resultado).toEqual(user);
});

test('findByEmail() retorna undefined si no encuentra el email', () => {
  const resultado = userController.findByEmail('fantasma@mail.com');
  expect(resultado).toBeUndefined();
});

test('findById() devuelve al usuario con ID específico', () => {
  const user = new User(3, 'María', 'maria@mail.com');
  userController.add(user);
  const resultado = userController.findById(3);
  expect(resultado).toEqual(user);
});

test('findById() retorna undefined cuando no hay usuario con ese ID', () => {
  const resultado = userController.findById(98);
  expect(resultado).toBeUndefined();
});