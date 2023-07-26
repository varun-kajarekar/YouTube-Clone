import React from 'react'
import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'


const SearchBar = () => {
    return (
        <Paper
            component='form'
            onSubmit={() => { }}
            sx={
                {
                    borderRadius: 20,
                    border: '1px solid #e3e3e3',
                    pl: 2,
                    boxShadow: 'none',
                }
            }
        >

            <input
                className='search-bar'
                placeholder='Search.....'
                onChange={() => { }}
                style={
                    {
                        border: 0,
                        outline: 0
                    }
                }
            />

            <IconButton
                type='submit'
                sx={
                    {
                        p: '10px',
                        color: 'red'
                    }
                }
            >
                <Search />
            </IconButton>


        </Paper>
    )
}

export default SearchBar