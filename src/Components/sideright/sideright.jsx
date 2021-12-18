import React from "react";

import './sideright.css';

export const Sideright = () => (
<div className="right-container">
    <div className="post-container">
        <div className="post-container-title">
            <h2>Last Posts</h2>
        </div>
        <div className="post-container-list">
            <ul>
                <li>Aporte 1</li>
                <li>Aporte 2</li>
            </ul>
        </div>
    </div>
    <div className="post-container">
        <div className="post-container-title">
            <h2>Most Viewed</h2>
        </div>
        <div className="post-container-list">
            <ul>
                <li>Aporte 1</li>
                <li>Aporte 2</li>
            </ul>
        </div>
    </div>
</div>
    )
