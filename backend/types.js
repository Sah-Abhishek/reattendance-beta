const zod = require('zod');

const createTodo = zod.object({
    first: zod.string(),
    second: zod.string(),
    third: zod.string(),
    fourth: zod.string(),
    fifth: zod.string(),
    sixth: zod.string(),
    seventh: zod.string(),
    eighth: zod.string(),

})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}