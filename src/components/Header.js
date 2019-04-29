import React from 'react';

const Header = ({title, subTitle, buttonLabel, handleClick}) => {
    return (
        <header>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <button type="submit" onClick={handleClick}>{buttonLabel}</button>
        </header>
    )
}

export default Header;