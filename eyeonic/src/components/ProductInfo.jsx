import { PiDownloadSimple } from "react-icons/pi";

function ProductInfo() {
    return (
        <div className="productinfo">
            <h1 class="mt-5">PRODUCT INFORMATION</h1>
            <hr />
            <article>
                <div class="card-body">
                    <div className="infomation">
                        <dl class="row">
                            <dt class="col-sm-3">Product</dt>
                            <dt class="col-sm-3">Material: </dt>

                            <dd className="info">Titanium metal:</dd>
                        </dl>

                    </div>
                </div>
            </article>
            <div className="info">
                <a href="a"><PiDownloadSimple />Download description</a>
            </div>
        </div>
    );
}

export default ProductInfo;