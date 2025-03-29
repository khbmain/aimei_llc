export function me() {
  return `{
    ID: "123124124124",
    username: "testuser",
  }`;
}

export function loginUser(
  ctx: any,
  user: { username: string; password: string }
) {
  return new Promise((resolve, reject) => {});
}

export function register() {
  return new Promise((resolve, reject) => {});
}
