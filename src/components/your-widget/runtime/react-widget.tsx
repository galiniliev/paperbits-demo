import { RuntimeComponent } from "./runtimeComponent.decorator";
import * as React from "react";


@RuntimeComponent({ selector: "my-widget" })
export class HelloWorld extends React.Component {
    public render() {
        return (
            <div>
                Hello, React!
            </div>
        );
    }
}