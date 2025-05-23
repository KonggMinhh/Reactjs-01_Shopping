import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/public/img/en.png" alt="" />
                        <KeyboardArrowDownIcon className="icon" />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon className="icon" />
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">
                            Women
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">
                            Men
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/3">
                            Children
                        </Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">
                        KongShop
                    </Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">
                            Homepage
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">
                            About
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">
                            Contact
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">
                            Stores
                        </Link>
                    </div>
                    <div className="icons">
                        <SearchIcon className="icon" />
                        <PersonOutlineIcon className="icon" />
                        <FavoriteBorderIcon className="icon" />
                        <div className="cartIcon">
                            <ShoppingCartOutlinedIcon className="icon" />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
