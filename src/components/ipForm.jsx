import React, { useRef } from "react";
import "../styles/ipForm.css";

const IpForm = ({ submitForm, isLoading }) => {
    const ipRef = useRef(null);

    return (
        <form
            className="form"
            onSubmit={(e) => {
                e.preventDefault();
                submitForm(ipRef.current.value);
            }}
        >
            <label className="ipLabel">
                <span className="textLabel">Ip del usuario</span>
                <input
                    required
                    className="ipInput"
                    type={"text"}
                    placeholder={"Introduce aqui la IP"}
                    ref={ipRef}
                />
                <small>Por ejemplo 54.85.132.205</small>
            </label>
            <button className="ip-btn" type="sumbit" formMethod="GET">
                Buscar IP
                {isLoading ? <span className="loader"></span> : ""}
            </button>
        </form>
    );
};

export default IpForm;
