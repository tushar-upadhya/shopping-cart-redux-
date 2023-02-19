import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Table } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../redux/actions/action";

const Header = () => {
    const [price, setPrice] = useState(0);
    console.log("price:", price);

    const getData = useSelector((state) => state.cartReducer.carts);
    // console.log("getData:", getData);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id) => {
        dispatch(DLT(id));
    };

    const total = () => {
        let price = 0;
        getData.map((ele, k) => {
            price = ele.price * ele.qnty + price;
        });
        setPrice(price);
    };

    useEffect(() => {
        total();
    }, [total]);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink
                    to="/"
                    className="text-decoration-none text-light mx-3"
                >
                    Add to Cart
                </NavLink>

                <Nav className="me-auto">
                    <NavLink to="/" className="text-decoration-none text-light">
                        Home
                    </NavLink>
                </Nav>

                <Badge
                    badgeContent={getData.length}
                    color="primary"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    <i
                        class="fa-solid fa-cart-shopping text-light"
                        style={{ fontSize: 25, cursor: "pointer" }}
                    ></i>
                </Badge>
            </Container>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {getData.length ? (
                    <div
                        className="card_details"
                        style={{ width: "24rem", padding: "20" }}
                    >
                        <Table>
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Restaurant Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getData.map((e) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>
                                                    <NavLink
                                                        to={`/cart/${e.id}`}
                                                        onClick={handleClose}
                                                    >
                                                        <img
                                                            src={e.imgdata}
                                                            style={{
                                                                width: "5rem",
                                                                height: "5rem",
                                                            }}
                                                            alt=""
                                                        />
                                                    </NavLink>
                                                </td>
                                                <td>
                                                    <p>{e.rname}</p>
                                                    <p>Price : ₹ {e.price}</p>
                                                    <p>Quantity : {e.qnty}</p>
                                                    <p
                                                        style={{
                                                            color: "red",
                                                            frontSize: "20",
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={() =>
                                                            dlt(e.id)
                                                        }
                                                    >
                                                        <i className="fas fa-trash smalltrash"></i>
                                                    </p>
                                                </td>
                                                <td
                                                    className="mt-5"
                                                    style={{
                                                        color: "red",
                                                        frontSize: "20",
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={() => dlt(e.id)}
                                                >
                                                    <i className="fas fa-trash largetrash"></i>
                                                </td>
                                            </tr>
                                        </>
                                    );
                                })}
                                <p className="text-center">Total : ₹ {price}</p>
                            </tbody>
                        </Table>
                    </div>
                ) : (
                    <div
                        className="card_details d-flex justify-content-center align-item-center"
                        style={{
                            width: "15rem",
                            padding: 5,
                            position: "relative",
                        }}
                    >
                        <i
                            className="fa fa-close smallclose"
                            style={{
                                position: "absolute",
                                top: 5,
                                right: 20,
                                frontSize: 23,
                                cursor: "pointer",
                            }}
                            onClick={handleClose}
                        ></i>
                        <p style={{ frontSize: 22 }}>Empty cart</p>
                        <img
                            src="https://media.tenor.com/wAtVg60lUmAAAAAd/blue-shopping.gif"
                            alt=""
                            className="emptycart_img"
                            style={{ width: "3rem", padding: 4 }}
                        />
                    </div>
                )}
            </Menu>
        </Navbar>
    );
};

export default Header;
