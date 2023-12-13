const products = require('../artifacts/products.json');

const getItems = (req, res) => {
    try {
        const { name, offset = 1, limit = 10 } = req.query;

        let filteredProducts = products;

        if (name) {
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(name.toLowerCase())
            );
        }

        const startIndex = (offset - 1) * limit;
        const endIndex = offset * limit;
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

        res.status(200).json({
            msg: "Request Success",
            data: {
                products: paginatedProducts,
                pagination: {
                    limit: limit,
                    offset: offset,
                    total: filteredProducts.length
                }
            }
        });

    } catch (error) {
        res.status(500).json({
            msg: "Internal server error",
            data: error,
        });
    }
}

const getItemById = (req, res) => {
    try {
        const { id } = req.params;
        
        const product = products.find((p) => p.id === id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
    
        res.status(200).json({
            msg: "Request Success",
            data: product
        });
    } catch (error) {
        console.log("error: ", error)
        res.status(500).json({
            msg: "Internal server error",
            data: error,
        });
    }
} 

module.exports = {
    getItems,
    getItemById
}