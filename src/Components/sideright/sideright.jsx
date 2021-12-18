import React from "react";
import question from './question.png'
import book from './book.png'
import pencil from './pencil.png'
import './sideright.css';

export const Sideright = () => (
<div>
    <div className="post-container">
        <div className="post-container-title">
            <h2>Last Posts</h2>
        </div>
        <div className="post-container-list">
                <div className="list-item" >
                    <div className="list-item-img">
                        <img src={book} alt="help"/>
                    </div>
                    <div className="list-item-title">
                        <p>Comandos MiHawk</p>
                    </div>
                </div>
                <div className="list-item" >
                    <div className="list-item-img">
                        <img src={pencil} alt="help"/>
                    </div>
                    <div className="list-item-title">
                        <p>Fallas de HMCRAID en un Mowgli</p>
                    </div>
                </div>
                <div className="list-item" >
                    <div className="list-item-img">
                        <img src={question} alt="help"/>
                    </div>
                    <div className="list-item-title">
                        <p>Como hacer CHPKEY en Denali</p>
                    </div>
                </div>
        </div>
    </div>
    <div className="post-container">
        <div className="post-container-title">
            <h2>Most Viewed</h2>
        </div>
        <div className="post-container-list">
                <div className="list-item" >
                    <div className="list-item-img">
                        <img src={book} alt="help"/>
                    </div>
                    <div className="list-item-title">
                        <p>Comandos Linux</p>
                    </div>
                </div>
                <div className="list-item" >
                    <div className="list-item-img">
                        <img src={pencil} alt="help"/>
                    </div>
                    <div className="list-item-title">
                        <p>Work Around Haleakala</p>
                    </div>
                </div>
                <div className="list-item" >
                    <div className="list-item-img">
                        <img src={question} alt="help"/>
                    </div>
                    <div className="list-item-title">
                        <p>¿Como setear IP desde el Panel?</p>
                    </div>
                </div>
        </div>
    </div>
    </div>
    )
