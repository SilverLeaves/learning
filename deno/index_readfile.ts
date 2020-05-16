const dir = Deno.readDir("./");

for await (const file of dir) {
  console.log(file.name);

  const content = await Deno.open(file.name);

  await Deno.copy(content, Deno.stdout);

  console.log(content)

  content.close();
}
