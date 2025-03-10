import { render } from "@testing-library/react";
import React, { Component } from "react";
import { FaPlus, FaEdit, FaWindowClose } from "react-icons/fa";
import "./Main.css";

export default class Main extends Component {
    state = {
        newTask: "",
        task: [],
        index: -1,
    }

    // Salva os dados no localStorage
    componentDidMount() {

    }

    // Carrega as tarefas do localStorage
    componentDidUpdate(prevProps, prevState) {

    }

    // Captura o valor do input
    handleInput = (e) => {
        this.setState({ newTask: e.target.value });
    }

    // Captura o evento do submit e mostra a tarefa
    handleSubmit = (e) => {
        e.preventDefault();
        const { task, index } = this.state;
        let { newTask } = this.state;
        const newsTaks = [...task];

        if (task.indexOf(newTask) !== -1) return alert("Tarefa já existe");

        if (index === -1) {
            this.setState({
                task: [...task, newTask],
                newTask: "",
            });
        } else {
            newsTaks[index] = newTask;
            this.setState({
                task: [newsTaks],
                index: -1,
            })
        }
    }

    // Exclui uma tarefa da lista
    handleDelete = (e) => {
        const { task, index } = this.state;
        task.splice(index, 1);
        this.setState({ task, index: -1 });

    }

    // Edita uma tarefa da lista
    handleEdit = (e, index) => {
        const { task } = this.state;

        this.setState({
            index,
            newTask: task[index],
        });
    }

    render() {
        const { newTask, task } = this.state;

        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>

                <form onSubmit={this.handleSubmit} action="#" className="form">
                    <input type="text" onChange={this.handleInput} value={newTask} />
                    <button type="submit" >
                        <FaPlus />
                    </button>
                </form>

                <ul className="task">
                    {task.map((t, index) => (
                        <li key={t}>{t}
                            <span>
                                <FaEdit onClick={(e) => this.handleEdit(e, index)} className="edit" />
                                <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className="delete" />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}