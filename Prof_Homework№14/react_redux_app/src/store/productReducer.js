const defaultState = [
    {id:1, title: 'Bicycle', count: 5},
    {id:2, title: 'Scooter', count: 4},
    {id:3, title: 'Dumbbell', count: 7},
    {id:4, title: 'Rackets', count: 5},
]

const INCR = "INCR"
const DECR = "DECR"
const NEW_PRODUCT = "NEW_PRODUCT"

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCR: 
            return state.map((product) => 
                product.id === action.payload ? {...product, count: product.count + 1} : product
            )
        case DECR:
            return state.map((product) => 
                product.id === action.payload ? {...product, count: product.count - 1} : product
            )
        case NEW_PRODUCT:
            let new_product = {
                id: Date.now(),
                title: action.payload[0],
                count: action.payload[1]
            }
            return [...state, new_product]
        default:
            return state
    }
}

export const inctAction = (payload) => ({type: INCR, payload})
export const decrAction = (payload) => ({type: DECR, payload})
export const newProductAction = (payload) => ({type: NEW_PRODUCT, payload})