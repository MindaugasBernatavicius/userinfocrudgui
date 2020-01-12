import React from 'react';
import BaseTable, { Column  , AutoResizer} from 'react-base-table';
import 'react-base-table/styles.css'

// Ref :: https://reactjs.org/docs/faq-ajax.html
class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [] };
        this.collumnWidths = { name: 0, email: 0 };
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/v1/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.map(item => {
                            // calculate column widths
                            if(this.collumnWidths.name < item.name.length) this.collumnWidths.name = item.name.length;
                            if(this.collumnWidths.email < item.email.length) this.collumnWidths.email = item.email.length ;

                            // .. add action buttons
                            item.buttons = <>
                                <button onClick={() => this.handleSeeInfoAction(this, item.id)}>See all info</button>
                                <button onClick={() => this.handleDeleteAction(this, item.id)}>Delete</button>
                            </>;
                            return item;
                        })
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '170vh', marginBottom: 25 }}>
                    <BaseTable data={items} height={items.length * 53 - 13}
                               width={50 + this.collumnWidths.name * 10 + this.collumnWidths.email * 10 + 200} >
                        <Column title="ID" key="id" dataKey="id" width={50} />
                        <Column title="NAME" key="name" dataKey="name" width={this.collumnWidths.name * 10} />
                        <Column title="EMAIL" key="email" dataKey="email" width={this.collumnWidths.email * 10} />
                        <Column title="ACTIONS" key="buttons" dataKey="buttons" width={200}/>
                    </BaseTable>
                </div>
            );
        }
    }

    handleSeeInfoAction = (e, id) => {
        console.log('INFO:' + id);
    };

    handleDeleteAction = (e, id) => {
        console.log('DELETE:' + id);
    };

    // render() {
    //     const { error, isLoaded, items } = this.state;
    //     if (error) {
    //         return <div>Error: {error.message}</div>;
    //     } else if (!isLoaded) {
    //         return <div>Loading...</div>;
    //     } else {
    //         return (
    //             <ul>
    //                 {items.map(item => (
    //                     <li key={item.id}>
    //                         {item.id} {item.name} { "[ " + item.phoneNumbers.join(" , ") + " ]" } { item.addresses.length !== 0 ? "[ " + item.addresses.map(x => x['country']) + " ]": "[ ]" } { <button>Info</button>}
    //                     </li>
    //                 ))}
    //             </ul>
    //         );
    //     }
    // }
}

export default Users;