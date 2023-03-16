import React from 'react';
import styled from 'styled-components';

const Header = () => {
    const HeaderBox = styled.div`
        padding : 20px 0;
        button {
            border: none;
            background:none;
            cursor:  pointer;
        }
    `
    return (
        <HeaderBox>
            <button>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/32px-Hamburger_icon.svg.png?20160819113547" alt="" />
            </button>
        </HeaderBox>
    );
};

export default Header;