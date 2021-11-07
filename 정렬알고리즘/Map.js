// Map

let m = new Map();

m.set("하나", "1");
m.set(1, "하나");
m.set(true, 1);
m.set(false, 0);
console.log(m.get("하나"));
console.log(m.get(1));
console.log(m.has("하나"));
console.log(m.delete("하나"));
console.log(m.has("하나"));

console.log(m);
console.log(m.size);

for (let variable of m) {
  console.log(variable[0]);
}

console.log(m.keys());
console.log(m.values());
console.log(m.entries());
