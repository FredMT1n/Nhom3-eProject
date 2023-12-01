import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import { useCart } from 'react-use-cart';

function BillingInfo() {
    const { cartTotal } = useCart()
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    return (
        <div className="billing-container">
            <Table>
                <thead>
                    <tr>
                        <td colSpan={2} ><h2>Billing Information</h2></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Provisional: </td>
                        <td>{formatter.format(cartTotal)}</td>
                    </tr>
                    <tr>
                        <td>Total: </td>
                        <td>{formatter.format(cartTotal)}</td>
                    </tr>
                </tbody>
            </Table>
            <button className='payment-button'>Proceed with payment</button>
        </div>
    );
}

export default BillingInfo;