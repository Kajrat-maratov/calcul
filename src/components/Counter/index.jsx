import React from 'react'

export class Counter extends React.Component {

    constructor() {
        super()
        this.state = {
            inputValue: 1,
            inputValue2: 1,
            result: 0
        }
    }


    input1 = (e) => {
        this.setState((prev) => ({ inputValue: parseInt(e.target.value) }))
    }
    input2 = (e) => {
        this.setState((prev) => ({ inputValue2: parseInt(e.target.value) }))
    }
    onPlus = () => {
        this.setState(() => ({ result: parseInt(this.state.inputValue) + parseInt(this.state.inputValue2) }))
    }
    onMinus = () => {
        this.setState(() => ({ result: parseInt(this.state.inputValue) - parseInt(this.state.inputValue2) }))
    }
    onMult = () => {
        this.setState(() => ({ result: parseInt(this.state.inputValue) * parseInt(this.state.inputValue2) }))
    }
    onDel = () => {
        this.setState(() => ({ result: parseInt(this.state.inputValue) / parseInt(this.state.inputValue2) }))
    }
    render() {
        return <div>

            <input type="number" defaultValue={this.state.inputValue} onChange={this.input1} />
            <button onClick={this.onPlus}>+</button>

            <button onClick={this.onDel}>/</button>

            <button onClick={this.onMinus}>-</button>

            <button onClick={this.onMult}>*</button>

            <input type="number" defaultValue={this.state.inputValue2} onChange={this.input2} />
            <p>={this.state.result}</p>
        </div>
    }
}
