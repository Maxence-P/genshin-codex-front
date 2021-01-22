import '../../styles/Navbar.css';
import {
  SearchIcon, DropdownIcon,
  EmblemLiyue, EmblemMondstadt, EmblemNationUnknown,
  WeaponBow, WeaponCatalyst, WeaponClaymore, WeaponPolearm, WeaponSword,
  ElementAnemo, ElementCryo, ElementDendro, ElementElectro, ElementGeo, ElementHydro, ElementPyro
} from '../ImportImg';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {

  return (
    <Navbar>
      <NavItem icon={<DropdownIcon className="dropdown_icon" />}>
        <DropdownMenu />
      </NavItem>
      <NavItem icon="Ok" />
      <NavItem icon={<SearchIcon />} />
    </Navbar>
  );
}

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  );
}

const NavItem = (props) => {

  const [open, setOpen] = useState(props.opened);

  return (
    <li className="nav-item">
      <span onClick={() => setOpen(!open)}>{props.icon}</span>

      {open && props.children}
    </li>
  )
}

const CompareItems = (item) => {
  if (item === "Mondstadt") {
    return (<img src={EmblemMondstadt} alt={item} width="40" height="40" />);
  } else if (item === "Liyue") {
    return (<img src={EmblemLiyue} alt={item} width="40" height="40" />);
  } else if (item === "Sumeru") {
    return (<img src={EmblemNationUnknown} alt={item} width="40" height="40" />);
  } else if (item === "Natlan") {
    return (<img src={EmblemNationUnknown} alt={item} width="40" height="40" />);
  } else if (item === "Inazuma") {
    return (<img src={EmblemNationUnknown} alt={item} width="40" height="40" />);
  } else if (item === "Fontaine") {
    return (<img src={EmblemNationUnknown} alt={item} width="40" height="40" />);
  } else if (item === "Snezhnaya") {
    return (<img src={EmblemNationUnknown} alt={item} width="40" height="40" />);
  } else if (item === "Bow") {
    return (<img src={WeaponBow} alt={item} width="40" height="40" />)
  } else if (item === "Sword") {
    return (<img src={WeaponSword} alt={item} width="40" height="40" />)
  } else if (item === "Claymore") {
    return (<img src={WeaponClaymore} alt={item} width="40" height="40" />)
  } else if (item === "Catalyst") {
    return (<img src={WeaponCatalyst} alt={item} width="40" height="40" />)
  } else if (item === "Polearm") {
    return (<img src={WeaponPolearm} alt={item} width="40" height="40" />)
  } else if (item === "Pyro") {
    return (<img src={ElementPyro} alt={item} width="40" height="40" />)
  } else if (item === "Hydro") {
    return (<img src={ElementHydro} alt={item} width="40" height="40" />)
  } else if (item === "Anemo") {
    return (<img src={ElementAnemo} alt={item} width="40" height="40" />)
  } else if (item === "Cryo") {
    return (<img src={ElementCryo} alt={item} width="40" height="40" />)
  } else if (item === "Dendro") {
    return (<img src={ElementDendro} alt={item} width="40" height="40" />)
  } else if (item === "Electro") {
    return (<img src={ElementElectro} alt={item} width="40" height="40" />)
  } else if (item === "Geo") {
    return (<img src={ElementGeo} alt={item} width="40" height="40" />)
  }
};

const DropdownMenu = () => {

  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/home')
      .then(res => res.json())
      .then(data => { setListItems(data) })
  }, [])

  const titles = ["Ville", "Vision", "Arme"];

  return (
    <div className="dropdown">
      {titles.map((title, index) => {
        const items = listItems[index];
        return (
        items !== undefined && (
          <div className="dropdown-line">
            <p className="dropdown-head">{title}</p>
            <div className="dropdown-items">
              {items.map((item) => {
                const itemValue = Object.values(item)[0];
                return (
                  <Link to={`/Characters/${itemValue}`}>{CompareItems(itemValue)}</Link>
                )
              })}
            </div>
          </div>
        ))}
      )}
    </div>
  )
};

export default Navigation;