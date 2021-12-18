import React from "react";
import './filter.css'

export const Filter = ({ onRouteChange }) => (
    <div className="filter">
        <div className="filter-container">
            <h3>All Posts</h3>
        </div>
        <div className="filter-button">
            <button
                onClick = {() => onRouteChange("form")}
                className="create-button">
                Create New
            </button>
        </div>
            
          {/*} <div className="filter-bar">
                <ul>
                    <li><button>Most Pouplar</button></li>
                    <li><button>Not Answered</button></li>
                    <li><button>Answered</button></li>
                    <li><button>Most Viewed</button></li>
                </ul>
            </div>*/}
    </div>
)