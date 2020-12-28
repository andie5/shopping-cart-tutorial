import React from 'react'

const Nav = ({activeTab, onTabChange}) => {
    const itemClass = tabName => `App-nav-item ${activeTab === tabName ? 'selected' :
     ''}`
return <nav className="App-nav">
    <ul>
        <li className={itemClass('items')}>
            <button onClick={() => onTabChange('items')}>Items</button>
        </li>
        {/* <NavItem item='items'/> */}
        <li className={itemClass('cart')}>
            <button onClick={() => onTabChange('cart')}>Cart</button>
        </li>
    </ul>
</nav>
}

// const NavItem = ({item})  => (
//         <button onClick={() => onTabChange(props.item)}>item</button>
// )
export default Nav