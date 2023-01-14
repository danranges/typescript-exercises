function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "))
  } else {
    console.log("Welcome lone traveler " + x)
  }
}
