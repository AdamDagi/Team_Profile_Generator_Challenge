const Manager = require("../lib/Manager");

test("Test type of class Manager.", () => {
    const e = new Manager({});
    expect(typeof(e)).toBe("object");
});

test("Role check", () => {
    const role = "Manager";
    const e = new Manager({ role: "Manager"});
    expect(e.getRole()).toBe(role);
});

test("Office number check", () => {
    const officeNumber = 12345;
    const e = new Manager({officeNumber});
    expect(e.getOfficeNumber()).toBe(officeNumber);
});

test("Id check", () => {
    const id = 1;
    const e = new Manager({id});
    expect(e.getId()).toBe(id);
});

test("Name check", () => {
    const name = "Adam";
    const e = new Manager({name});
    expect(e.getName()).toBe(name);
});

test("Email check", () => {
    const email = "test@test.com";
    const e = new Manager({email});
    expect(e.getEmail()).toBe(email);
});