const Employee = require("../lib/Employee");

test("Test type of class Employee.", () => {
    const e = new Employee({});
    expect(typeof(e)).toBe("object");
});

test("Check Name", () => {
    const name = "Adam";
    const e = new Employee({ name: "Adam"});
    expect(e.getName()).toBe(name);
});

test("Role check", () => {
    const role = "Employee";
    const e = new Employee({ role: "Employee"});
    expect(e.getRole()).toBe(role);
});

test("Email check", () => {
    const email = "test@test.com";
    const e = new Employee({email});
    expect(e.getEmail()).toBe(email);
});

test("Id check", () => {
    const id = 0;
    const e = new Employee({id});
    expect(e.getId()).toBe(id);
});