const listener = Deno.listen({ port: 666 });

console.log("start");

// for await (const con of listener) {
//   Deno.copy(con, con);
//   Deno.copy(con, Deno.stdout);
// }

async function run() {
  for await (const con of listener) {
    Deno.copy(con, con);
    Deno.copy(con, Deno.stdout);
  }
}

run();
console.log("end");
