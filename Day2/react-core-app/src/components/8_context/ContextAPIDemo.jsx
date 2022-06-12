// import React, { Component } from 'react';
// import DataTable from '../common/DataTable';

// class ComponentTwo extends Component {
//     render() {
//         return (
//             <div>
//                 <DataTable items={this.props.data}>
//                     <h4 className="text-info text-uppercase font-weight-bold">Employees Table</h4>
//                 </DataTable>
//             </div>
//         );
//     }
// }

// class ComponentOne extends Component {
//     render() {
//         return (
//             <div>
//                 <ComponentTwo data={this.props.data} />
//             </div>
//         );
//     }
// }

// class ContextAPIDemo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             employees: [
//                 { id: 1, name: "Manish" },
//                 { id: 2, name: "Abhijeet" },
//                 { id: 3, name: "Ramakant" },
//                 { id: 4, name: "Subodh" },
//                 { id: 5, name: "Abhishek" }
//             ]
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <h2 className="text-primary text-uppercase text-center mt-5 mb-5">Context API Demo</h2>

//                 <ComponentOne data={this.state.employees} />
//             </div>
//         );
//     }
// }

// export default ContextAPIDemo;

// -------------------------------------------------------------------------

// import React, { Component } from 'react';
// import DataTable from '../common/DataTable';

// // const obj = React.createContext();
// // console.log(obj);

// const { Provider, Consumer } = React.createContext();

// class ComponentThree extends Component {
//     render() {
//         return (
//             <div>
//                 <Consumer>
//                     {
//                         (data) => (
//                             <DataTable items={data}>
//                                 <h4 className="text-info text-uppercase font-weight-bold">Employees Table</h4>
//                             </DataTable>
//                         )
//                     }
//                 </Consumer>
//             </div>
//         );
//     }
// }

// class ComponentTwo extends Component {
//     render() {
//         return (
//             <div>
//                 <Consumer>
//                     {
//                         (data) => (
//                             <DataTable items={data}>
//                                 <h4 className="text-info text-uppercase font-weight-bold">Employees Table</h4>
//                             </DataTable>
//                         )
//                     }
//                 </Consumer>
//             </div>
//         );
//     }
// }

// class ComponentOne extends Component {
//     render() {
//         return (
//             <div>
//                 <ComponentTwo />
//                 <ComponentThree />
//             </div>
//         );
//     }
// }

// class ContextAPIDemo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             employees: [
//                 { id: 1, name: "Manish" },
//                 { id: 2, name: "Abhijeet" },
//                 { id: 3, name: "Ramakant" },
//                 { id: 4, name: "Subodh" },
//                 { id: 5, name: "Abhishek" }
//             ]
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <h2 className="text-primary text-uppercase text-center mt-5 mb-5">Context API Demo</h2>

//                 <Provider value={this.state.employees}>
//                     <ComponentOne />
//                 </Provider>
//             </div>
//         );
//     }
// }

// export default ContextAPIDemo;

// ------------------------------------------------------------------------- Multiple Providers

import React, { Component } from 'react';
import DataTable from '../common/DataTable';

// const obj = React.createContext();
// console.log(obj);

const { Provider, Consumer } = React.createContext();
const C1 = React.createContext();
const C2 = React.createContext();

class ComponentFour extends Component {
    render() {
        return (
            <div>
                <h3 className="text-primary">Component Four - {this.context}</h3>
            </div>
        );
    }
}

ComponentFour.contextType = C1;

class ComponentThree extends Component {
    render() {
        return (
            <div>
                <Consumer>
                    {
                        (data) => (
                            <DataTable items={data}>
                                <h4 className="text-info text-uppercase font-weight-bold">Employees Table</h4>
                            </DataTable>
                        )
                    }
                </Consumer>
            </div>
        );
    }
}

class ComponentTwo extends Component {
    render() {
        return (
            <div>
                <C1.Consumer>
                    {
                        (data) => (
                            <h3 className="text-primary">{data}</h3>
                        )
                    }
                </C1.Consumer>

                <C2.Consumer>
                    {
                        (data) => (
                            <h3 className="text-primary">{data}</h3>
                        )
                    }
                </C2.Consumer>

                <Consumer>
                    {
                        (data) => (
                            <DataTable items={data}>
                                <h4 className="text-info text-uppercase font-weight-bold">Employees Table</h4>
                            </DataTable>
                        )
                    }
                </Consumer>
            </div>
        );
    }
}

class ComponentOne extends Component {
    render() {
        return (
            <div>
                <ComponentTwo />
                <ComponentThree />
                <ComponentFour />
            </div>
        );
    }
}

class ContextAPIDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { id: 1, name: "Manish" },
                { id: 2, name: "Abhijeet" },
                { id: 3, name: "Ramakant" },
                { id: 4, name: "Subodh" },
                { id: 5, name: "Abhishek" }
            ]
        };
    }

    render() {
        return (
            <div>
                <h2 className="text-primary text-uppercase text-center mt-5 mb-5">Context API Demo</h2>

                <C1.Provider value={"Data from Context One (C1)"}>
                    <C2.Provider value={"Data from Context Two (C2)"}>
                        <Provider value={this.state.employees}>
                            <ComponentOne />
                        </Provider>
                    </C2.Provider>
                </C1.Provider>
            </div>
        );
    }
}

export default ContextAPIDemo;