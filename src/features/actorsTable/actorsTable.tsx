import React from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { decrement, increment } from './actorsTableSlice'

export default function ActorsTable() {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.userData.value)
    const dispatch = useAppDispatch()

    return (
        <>
            <button onClick={() => dispatch(increment(count))}>
                count is {count}
            </button>
            <button onClick={() => dispatch(decrement(count))}>
                count is {count}
            </button>
        </>
    )
}