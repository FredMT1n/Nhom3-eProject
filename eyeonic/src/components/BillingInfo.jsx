import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

function BillingInfo() {
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
                        <td>11.468.000đ</td>
                    </tr>
                    <tr>
                        <td>Total: </td>
                        <td>11.468.000đ</td>
                    </tr>
                </tbody>
            </Table>
            <button className='payment-button'>Proceed with payment</button>
        </div>
     );
}

export default BillingInfo;