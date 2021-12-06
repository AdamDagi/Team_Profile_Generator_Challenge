const Intern = require("../lib/Intern");

test("Test type of class Intern.", () => {
    const e = new Intern({});
    expect(typeof(e)).toBe("object");
});

test("Role check", () => {
    const role = "Intern";
    const e = new Intern({ role: "Intern"});
    expect(e.getRole()).toBe(role);
});

test("Name check", () => {
    const name = "Adam";
    const e = new Intern({name});
    expect(e.getName()).toBe(name);
});

test("Id check", () => {
    const id = 3;
    const e = new Intern({id});
    expect(e.getId()).toBe(id);
});

test("Email check", () => {
    const email = "test@test.com";
    const e = new Intern({email});
    expect(e.getEmail()).toBe(email);
});

test("School check", () => {
    const school = "Columbian";
    const e = new Intern({school});
    expect(e.getSchool()).toBe(school);
});