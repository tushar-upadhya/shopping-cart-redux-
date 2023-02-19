import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import cardData from "./cardData";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

const Cards = () => {
    const [data, setData] = useState(cardData);
    // console.log("data:", data);

    const dispatch = useDispatch();

    const send = (e) => {
        // console.log("e:", e);
        dispatch(ADD(e));
    };

    return (
        <div className="container mt-3">
            <h2 className="text-center">Add to cart</h2>

            <div className="row d-flex justify-content-center align-items-center">
                {data.map((element, id) => {
                    return (
                        <>
                            <Card
                                style={{ width: "20rem", border: "none" }}
                                className="mx-2 mt-4 card_style"
                            >
                                <Card.Img
                                    variant="top"
                                    src={element.imgdata}
                                    style={{ height: "16rem" }}
                                    className="mt-3"
                                />
                                <Card.Body>
                                    <Card.Title>{element.rname}</Card.Title>
                                    <Card.Text>
                                        price : ₹ {element.price}
                                    </Card.Text>
                                    <div className="button_div d-flex justify-content-center ">
                                        <Button
                                            variant="primary"
                                            onClick={() => send(element)}
                                            className="col-lg-12"
                                        >
                                            Add to cart
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Cards;
