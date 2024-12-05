const ProductsCard = ({ data }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data && data.length > 0 ? (
                data.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col gap-4"
                        style={{ animationDelay: `${product.aosDelay ?? 0}ms` }}
                    >
                        <div className="relative h-[200px] overflow-hidden rounded-md">
                            <img
                                className="object-cover w-full h-full"
                                src={product.image} // Mise à jour de la clé pour correspondre à l'API Fake Store
                                alt={product.title}
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                        </div>
                        <h3 className="text-sm font-medium text-gray-700">{product.title}</h3>
                        <p className="text-sm text-gray-500">{product.price} $</p>
                    </div>
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
};

export default ProductsCard;
