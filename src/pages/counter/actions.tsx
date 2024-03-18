export const Increment = (payload: number) => (
    {
        type: 'INCREMENT',
        payload
    }
)

export const Decrement = (payload: number) => (
    {
        type: 'DECREMENT',
        payload
    }
)
export const SetCounter = (payload: number) => (
    {
        type: 'SET_COUNTER',
        payload
    }
)