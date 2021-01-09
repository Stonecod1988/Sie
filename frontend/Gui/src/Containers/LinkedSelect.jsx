import React, {forwardRef} from 'react'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css';
import machine from '../Machine'
import useMachine from "../Hooks/useMachine";

/*
* lorsqu'on clique selectionne un valeur
* l'etat du select passe à la valeur selection
*
*/
const LinkedSelect = forwardRef((props, ref) => {
    const [state, context, can, send] = useMachine(machine, props);
    const handleSelect = (e) => {
        props.handleSelectChange(e)
        // return send("edit")

    };
    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col-md-3">{state}</div>
                <div className="col-md-6">
                    <Select
                        options={props.data}
                        value={props.value}
                        onChange={() => send('edit')}
                        ref={ref}
                        placeholder={props.message}
                    />
                </div>
                <div className="col-md-3">{JSON.stringify(context)}</div>
            </div>
        </div>
    )
});


export default LinkedSelect