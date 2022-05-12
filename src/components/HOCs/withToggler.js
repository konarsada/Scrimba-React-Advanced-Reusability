import React, {Component} from "react"


class Toggler extends Component {
    state = {
        on: this.props.defaultOnValue,
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }

    render() {
        /*
        C is the <Main /> component
        The props passed to C are received by <Main /> in this.props
        */

        //const C = this.props.component
        const {component: C, defaultOnValue, ...props} = this.props
        
        return (
            <C
                on={this.state.on}
                toggle={this.toggle}
                {...props}
            />
        )
    }
}

/*
HOC is a function that takes a component as a parameter
and returns a new component wrapping the given component
and "supercharging" it by giving it some extra abilities
*/

export function withToggler(component, optionsObj) {
    return function(props) { /* props passed to <Main /> in App.js */
        return (
            <Toggler
                component={component}
                defaultOnValue={optionsObj.defaultOnValue}
                {...props}
            />
        )
    }
}