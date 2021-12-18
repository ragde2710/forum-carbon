import React from "react";
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";
import App from "../../App";
import './sidebar.css';
import t3dev from "./t3dev.png"
import Aportes from "../../pages/aporte";

export const Sidebar = () => (
        <div className="sidebar-container">
            <div className="sidebar-container-main">
                    <h2>Work in progress</h2>
            </div>
            <div className="sidebar-footer">
                <div className="sidebar-footer-text">
                    <p>Made by T3</p>
                </div>
                <div className="sidebar-footer-img">
                    <img src={t3dev} alt="t3dev"/>
                </div>
            </div>
        </div>
    
    )