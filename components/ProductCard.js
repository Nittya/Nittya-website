// ProductCard.js

const ProductCard = ({ product }) => {
    return (
        <div className="product-card p-4 rounded-md shadow-md">
            <div className="image-container">
                <img src={product.image} alt={product.title} width={200} height={200} className="m-auto h-[30vh] md:h-[36vh] block" />
            </div>
            <div className="text-container mt-4">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
