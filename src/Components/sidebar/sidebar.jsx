import React from "react";
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";
import App from "../../App";
import './sidebar.css';
import t3dev from "./t3dev.png"
import Aportes from "../../pages/aporte";

export const Sidebar = () => (
        <div className="sidebar-container-main">
            <div className="sidebar-container">
                <div className="sidebar-container-item">
                    <Link to="/eng-inst" className="link">
                        <h3>Aportes de Ingenieria</h3>  
                    </Link>    
                </div>

                <div className="sidebar-container-item">
                    <Link to="/pcms" className="link">
                        <h3>PCM'S</h3>  
                    </Link>  
                </div>

                <div className="sidebar-container-item">
                    <Link to="/work-arounds" className="link">
                        <h3>Work Around</h3>  
                    </Link>    
                </div>

                <div className="sidebar-container-item">
                    <Link to="/golden" className="link">
                        <h3>Inventario Golden</h3>  
                    </Link>   
                </div>

                <div className="sidebar-container-item">
                    <Link to="/manuals" className="link">
                        <h3>Manuales</h3>  
                    </Link>   
                </div>

            </div>
        </div>
    
    )