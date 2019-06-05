import React from 'react'
import { connect } from  'react-redux'

function sort (items) {
    return items.sort((a, b) => a.id - b.id)
}

function Cart(props) {
    return <table>
        <thread>
            <tr>
                <th>Proizvod</th> 	&nbsp;	&nbsp;
                <th>Kolicina</th>	&nbsp;	&nbsp;
                <th>+/-</th>
                <th></th>
                <th></th>
            </tr>
        </thread>
        <tbody>
             {
                sort(props.cart).map(item => <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td><button onClick ={(e) => props.addToCart(item) }>+</button>

                    <button onClick ={(e) => props.removeFromCart(item) }>-</button>
                    </td>
                    <td>
                        <button onClick ={(e) => props.removeAllFromCart(item)}>
                            Izbrisi sve iz kosarice
                        </button>
                    </td>
                </tr>)
             }
        </tbody>
    </table>

}
function mapStateToProps(state){
    return {
        cart: state.cart,
    }
}
function mapDispatchToProps(dispatch){
    return{
        addToCart: (item) => {
            dispatch ({type: 'ADD', payload: item})
        },
        removeFromCart:  (item)  =>{
            dispatch({type: 'REMOVE', payload: item})
        },
        removeAllFromCart:  (item)  =>{
            dispatch({type: 'REMOVE_ALL', payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)