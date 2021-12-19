import React from "react";

import './form.css';

const Form = () => {
    return (
        <div className='form-container'>
            <form method="GET">
            <label>

                <div className="form-inputs">
                    
                    <div className="input-name">
                        <input type="text" name="name" placeholder="User"/>
                    </div>

                    <div className="input-src">
                        <input type="text" name="src" placeholder="SRC"/>
                    </div>     

                    <div className="input-program">
                        <input type="text" name="prog" placeholder="Program"/>
                    </div>    

                    <div className="input-title">
                        <input type="text" name="title" placeholder="Title" />
                    </div>
                    
                    <div className="input-selector-system">
                        <select  name="system">
                            <option  value="none">System</option>
                            <option  value="mowgly">Mowgly</option>
                            <option value="zz">ZZ</option>
                            <option value="fleetwood">Fleetwood</option>
                            <option value="denali">Denali</option>
                            <option value="tuleta">Tuleta</option>
                            <option value="mihawk">mihawk</option>
                            <option value="solution">solution</option>
                        </select>
                    </div>

                    <div className="input-selector-so">
                        <select>
                            <option value="none">SO</option>
                            <option value="linux">Linux</option>
                            <option value="ide">IDE</option>
                            <option value="aix">AIX</option>
                        </select>
                    </div>

                </div>

                <div className="form-textarea">
                    <div className="input-textarea">
                            <textarea id="message" type="text" rows="10" cols="115" placeholder="Your Description"/>
                    </div>
                </div>
  
                <div className="form-buttons">
                    <input className="button-save" type="submit" value="Save" />
                    <input className="button-return"  type="submit" value="Return" />
                </div>
            </label>           
            </form>
        </div>
    );

}            
export default Form;