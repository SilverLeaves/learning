console.log(Deno.args);

const url = Deno.args[0];
const res = await fetch(url);
const content = await res.arrayBuffer();

Deno.stdout.write(new Uint8Array(content));
