import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Main.css";
import Form from "./form/index";
import Task from "./task/task";

export default class Main extends Component {
    state = {
        newTask: "",
        task: [],
        index: -1,
    }

    // Salva os dados no localStorage
    componentDidMount() {
        const task = JSON.parse(localStorage.getItem("task")) || [];
        if (Array.isArray(task)) {
            this.setState({ task });
        }
    }

    // Carrega as tarefas do localStorage
    componentDidUpdate(prevProps, prevState) {

        if (this.state.task !== prevState.task) {
            localStorage.setItem("task", JSON.stringify(this.state.task));
        }
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
                task: [...newsTaks],
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

                <Form
                    handleSubmit={this.handleSubmit}
                    handleInput={this.handleInput}
                    newTask={newTask}
                />

                <Task
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                    task={task}
                />
            </div>


        );
    }
}