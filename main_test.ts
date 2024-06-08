import { assertEquals } from "jsr:@std/assert";

Deno.test(function addTest() {
  const x = 1 + 2;
  assertEquals(x, 3);
});
