import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import "./form.css";

export default function Form({ handleSubmit, handleInput, newTask }) {
    return (
        <form onSubmit={handleSubmit} action="#" className="form">
            <input type="text" onChange={handleInput} value={newTask} />
            <button type="submit" >
                <FaPlus />
            </button>
        </form>
    )
}

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired,
    newTask: PropTypes.string.isRequired,
};