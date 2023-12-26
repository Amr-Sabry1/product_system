const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 1,
            maxLength: 100,
        },
        price: {
            type: "integer",
        },
        id: {
            type: "integer",

        },
    },
    required: ["name", "age", "id"],
    maxProperties: 2,
    minProperties: 2,
};

module.exports = ajv.compile(schema);