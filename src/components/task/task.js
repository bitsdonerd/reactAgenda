import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import "./task.css";
import Form from "../form";

export default function Task({ handleEdit, handleDelete, task }) {
    return (
        <ul className="task">
            {task.map((t, index) => (
                <li key={t}>{t}
                    <span>
                        <FaEdit
                            onClick={(e) => handleEdit(e, index)}
                            className="edit"
                        />

                        <FaWindowClose
                            onClick={(e) => handleDelete(e, index)}
                            className="delete"
                        />
                    </span>
                </li>
            ))}
        </ul>
    )
}

Form.propTypes = {
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    task: PropTypes.array.isRequired,
};