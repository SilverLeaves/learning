function getSomething() {
  return "something";
}

async function testAsync() {
  return Promise.resolve("hello async");
}

async function get() {
  return "kankan";
}

async function test() {
  const v1 = await getSomething();
  const v2 = await testAsync();
  const v3 = await get();
  console.log(v1, v2, v3);
}

test();
