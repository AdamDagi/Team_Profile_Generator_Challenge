const Engineer = require("../lib/Engineer");

test("Test type of class Engineer.", () => {
    const e = new Engineer({});
    expect(typeof(e)).toBe("object");
});

test("Role check", () => {
    const role = "Engineer";
    const e = new Engineer({ role: "Engineer"});
    expect(e.getRole()).toBe(role);
});

test("Id check", () => {
    const id = 2;
    const e = new Engineer({id});
    expect(e.getId()).toBe(id);
});

test("Name check", () => {
    const name = "Adam";
    const e = new Engineer({name});
    expect(e.getName()).toBe(name);
});

test("Email check", () => {
    const email = "test@test.com";
    const e = new Engineer({email});
    expect(e.getEmail()).toBe(email);
});

test("GitHub check", () => {
    const github = "@GitHub";
    const e = new Engineer({github});
    expect(e.getGitHub()).toBe(github);
});