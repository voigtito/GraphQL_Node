//usuários (mesma formatação feita no Schema.graphql)

const users = [
    { id: 1, name: 'Gustavo', email: 'generico@gmail.com'},
    { id: 2, name: 'Voigt', email: 'genericoooo@gmail.com'}
];

module.exports = {
    Query: {
        users: () => users,
        user: () => user[0]
    },

    Mutation: {
        createUser: () => user[0]
    },
};