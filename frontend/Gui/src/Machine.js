import {createMachine, guard, invoke, reduce, state, transition} from "robot3";

const wait = (duration) => {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            // resolve()
            reject(new Error("impossible de synchroniser"))
        }, duration)
    })
};


export default createMachine({
    idle: state(
        transition("edit", "edit")
    ),
    edit: state(
        transition("cancel", "idle"),
        transition("submit", "loading",
            guard((ctx) => ctx.editedTitle && ctx.editedTitle !== ctx.title)),
        transition("input", "edit",
            reduce((ctx, ev) => ({...ctx, editedTitle: ev.value})))
    ),
    loading: invoke(
        async () => {
            await wait(2000);
            return {title: "titre côté serveur"}
        },
        transition("done", "success", reduce((ctx, ev) => ({
            ...ctx, title: ev.data.title
        }))),
        transition("error", "error", reduce((ctx, ev) => ({
            ...ctx, error: ev.error.message
        })))
    ),
    success: state(
        transition("dismiss", "idle"),
        transition("cancel", "edit")

    ),
    error: state(
        transition("dismiss", "edit"),
        transition("cancel", "idle")
    )
}, (componentContext) => componentContext);

