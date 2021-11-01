import React from 'react'
import {BsSearch} from 'react-icons/bs'
import styled from 'styled-components'

function SearchBar() {
    return (
        <SearchBarWrap>
            <SearchInput type="text" ></SearchInput>
            <SearchIcon />
        </SearchBarWrap>
    )
}

export default SearchBar


const SearchBarWrap = styled.div`
    width: 12rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    position: relative;
    
`

const SearchInput = styled.input`
    border : none;
    height: 100%;
    background-color: #f6f6f6;
    color: #5f5f5f;
    position: relative;
    width: 100%;
    border-radius:4px;
`

const SearchIcon = styled(BsSearch)`
    font-weight: bold;
    position: absolute;
    top: auto;
    right: 20px;
    cursor: pointer;
`
