import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: "usersApi",
    tagTypes:['user'],
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints:(builder) => ({
        users: builder.query({
            query: () => '/users',
            providestags:['user']
        }),
        user: builder.query({
            query: (id) => `/users/${id}`,
            providestags:['user']
        }),
        addUser: builder.mutation({
            query:(data) =>({
                url:`/users`,
                method:'POST',
                body:data
            }),
            invalidatesTags:['user']
        }),
        editUser: builder.mutation({
            query:({id, ...rest}) =>({
                url:`/users/${id}`,
                method:'PUT',
                body:rest
            }),
            invalidatesTags:['user']
        }),
        deleteUser: builder.mutation({
            query:(id) =>({
                url:`/users/${id}`,
                method:'DELETE'
            }),
            invalidatesTags:['user']
        })
    })
})

export const { useUsersQuery, useUserQuery, useAddUserMutation, useEditUserMutation, useDeleteUserMutation } = usersApi;