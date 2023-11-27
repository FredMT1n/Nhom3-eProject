import { useNavigate } from "react-router-dom";

function ProductSub({name, image, price, id}) {
    const navigate = useNavigate();
    return ( 
        <div className="product-container" onClick={() => navigate(`/products/${id}`)}>
            <img src={image} alt={id} className="product-profile-pic"/>
            <h2 className="product-name">{name}</h2>
            {price}
        </div>
     );
}

export default ProductSub;