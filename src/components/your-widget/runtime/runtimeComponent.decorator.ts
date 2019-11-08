import * as ReactDOM from "react-dom";
import React, { Component, PropTypes, createElement } from "react";


export function RuntimeComponent(config: any): (target: any) => void {
    return (target) => {

        let onDispose: () => void;

        class RuntimeComponentProxy extends HTMLElement {
            constructor() {
                super();

                const element = <HTMLElement>this;

                setTimeout(() => {
                    const reactElement = createElement(target, {});
                    ReactDOM.render(reactElement, element);
                }, 10);
            }

            public connectedCallback(): void {
                // Not implemented
            }

            public disconnectedCallback(): void {
                if (onDispose) {
                    onDispose();
                }
            }
        }

        customElements.define(config.selector, RuntimeComponentProxy);
    };
}