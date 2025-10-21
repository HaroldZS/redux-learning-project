export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
};

export const capitalizing = (store) => (next) => (action) => {
    const capitalized = action.action.payload.map((pokemon) => ({ name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1), url: pokemon.url }));
    const capitalizedAction = { ...action.action, payload: capitalized };
    next({ ...action, action: capitalizedAction });
}