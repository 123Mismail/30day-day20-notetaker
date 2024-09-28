import { configureStore } from '@reduxjs/toolkit'
import todoSlice from "@/app/features/todo/todoSlice"


export const store=configureStore({
    reducer:todoSlice
})