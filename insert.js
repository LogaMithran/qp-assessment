const products = [{
    "product_name": "Apples", "category": "Fruits", "product_units": [{
        "item_sku": "APP_001", "unit_category": "1kg", "units": 50, "price": 3.5, "expiry": "2025-11-15"
    }, {
        "item_sku": "APP_002", "unit_category": "3kg", "units": 30, "price": 9.0, "expiry": "2025-11-15"
    }]
}, {
    "product_name": "Bananas", "category": "Fruits", "product_units": [{
        "item_sku": "BAN_001", "unit_category": "1kg", "units": 60, "price": 2.0, "expiry": "2025-10-20"
    }, {
        "item_sku": "BAN_002", "unit_category": "5kg", "units": 25, "price": 8.5, "expiry": "2025-10-20"
    }]
}, {
    "product_name": "Oranges", "category": "Fruits", "product_units": [{
        "item_sku": "ORG_001", "unit_category": "2kg", "units": 45, "price": 4.5, "expiry": "2025-12-05"
    }, {
        "item_sku": "ORG_002", "unit_category": "4kg", "units": 20, "price": 8.5, "expiry": "2025-12-05"
    }]
}, {
    "product_name": "Potatoes", "category": "Vegetables", "product_units": [{
        "item_sku": "POT_001", "unit_category": "2kg", "units": 40, "price": 5.0, "expiry": "2025-12-01"
    }, {
        "item_sku": "POT_002", "unit_category": "5kg", "units": 20, "price": 12.0, "expiry": "2025-12-01"
    }]
}, {
    "product_name": "Tomatoes", "category": "Vegetables", "product_units": [{
        "item_sku": "TOM_001", "unit_category": "1kg", "units": 50, "price": 3.0, "expiry": "2025-11-30"
    }, {
        "item_sku": "TOM_002", "unit_category": "3kg", "units": 25, "price": 7.5, "expiry": "2025-11-30"
    }]
}, {
    "product_name": "Carrots", "category": "Vegetables", "product_units": [{
        "item_sku": "CAR_001", "unit_category": "2kg", "units": 35, "price": 4.0, "expiry": "2025-12-10"
    }, {
        "item_sku": "CAR_002", "unit_category": "5kg", "units": 15, "price": 10.0, "expiry": "2025-12-10"
    }]
}, {
    "product_name": "Eggs", "category": "Dairy", "product_units": [{
        "item_sku": "EGG_001", "unit_category": "12-pack", "units": 90, "price": 4.0, "expiry": "2025-09-30"
    }, {
        "item_sku": "EGG_002", "unit_category": "24-pack", "units": 50, "price": 7.5, "expiry": "2025-09-30"
    }]
}, {
    "product_name": "Milk", "category": "Dairy", "product_units": [{
        "item_sku": "MLK_001", "unit_category": "1L", "units": 120, "price": 3.5, "expiry": "2025-03-15"
    }, {
        "item_sku": "MLK_002", "unit_category": "2L", "units": 85, "price": 6.0, "expiry": "2025-03-15"
    }]
}, {
    "product_name": "Bread", "category": "Bakery", "product_units": [{
        "item_sku": "BRD_001", "unit_category": "Whole Wheat Loaf", "units": 45, "price": 3.99, "expiry": "2025-02-20"
    }]
}, {
    "product_name": "Cheese", "category": "Dairy", "product_units": [{
        "item_sku": "CHS_001", "unit_category": "200g", "units": 75, "price": 5.99, "expiry": "2025-06-30"
    }, {
        "item_sku": "CHS_002", "unit_category": "500g", "units": 40, "price": 12.99, "expiry": "2025-06-30"
    }]
}, {
    "product_name": "Yogurt", "category": "Dairy", "product_units": [{
        "item_sku": "YGT_001", "unit_category": "500g", "units": 60, "price": 4.49, "expiry": "2025-03-01"
    }]
}, {
    "product_name": "Chicken Breast", "category": "Meat", "product_units": [{
        "item_sku": "CHK_001", "unit_category": "500g", "units": 30, "price": 8.99, "expiry": "2025-03-10"
    }, {
        "item_sku": "CHK_002", "unit_category": "1kg", "units": 25, "price": 15.99, "expiry": "2025-03-10"
    }]
}, {
    "product_name": "Ground Beef", "category": "Meat", "product_units": [{
        "item_sku": "BEF_001", "unit_category": "500g", "units": 40, "price": 7.99, "expiry": "2025-03-05"
    }]
}, {
    "product_name": "Salmon Fillet", "category": "Seafood", "product_units": [{
        "item_sku": "SLM_001", "unit_category": "200g", "units": 25, "price": 9.99, "expiry": "2025-02-28"
    }]
}, {
    "product_name": "Apples", "category": "Produce", "product_units": [{
        "item_sku": "APL_001", "unit_category": "1kg bag", "units": 100, "price": 4.99, "expiry": "2025-03-15"
    }]
}, {
    "product_name": "Bananas", "category": "Produce", "product_units": [{
        "item_sku": "BAN_001", "unit_category": "1kg bunch", "units": 150, "price": 2.99, "expiry": "2025-02-25"
    }]
}, {
    "product_name": "Orange Juice", "category": "Beverages", "product_units": [{
        "item_sku": "OJ_001", "unit_category": "1L", "units": 80, "price": 4.49, "expiry": "2025-04-15"
    }, {
        "item_sku": "OJ_002", "unit_category": "2L", "units": 45, "price": 7.99, "expiry": "2025-04-15"
    }]
}, {
    "product_name": "Coffee Beans", "category": "Beverages", "product_units": [{
        "item_sku": "COF_001", "unit_category": "500g", "units": 60, "price": 12.99, "expiry": "2025-12-31"
    }]
}, {
    "product_name": "Pasta", "category": "Dry Goods", "product_units": [{
        "item_sku": "PST_001", "unit_category": "500g", "units": 200, "price": 2.49, "expiry": "2026-01-15"
    }]
}, {
    "product_name": "Rice", "category": "Dry Goods", "product_units": [{
        "item_sku": "RCE_001", "unit_category": "1kg", "units": 150, "price": 3.99, "expiry": "2026-06-30"
    }, {
        "item_sku": "RCE_002", "unit_category": "5kg", "units": 45, "price": 15.99, "expiry": "2026-06-30"
    }]
}, {
    "product_name": "Tomato Sauce", "category": "Canned Goods", "product_units": [{
        "item_sku": "TMS_001", "unit_category": "500ml", "units": 120, "price": 2.99, "expiry": "2025-12-31"
    }]
}, {
    "product_name": "Tuna", "category": "Canned Goods", "product_units": [{
        "item_sku": "TNA_001", "unit_category": "200g can", "units": 180, "price": 2.49, "expiry": "2026-08-15"
    }]
}, {
    "product_name": "Potato Chips", "category": "Snacks", "product_units": [{
        "item_sku": "CHP_001", "unit_category": "200g bag", "units": 100, "price": 3.99, "expiry": "2025-06-30"
    }]
}, {
    "product_name": "Chocolate Bar", "category": "Snacks", "product_units": [{
        "item_sku": "CHC_001", "unit_category": "100g", "units": 150, "price": 2.99, "expiry": "2025-08-31"
    }]
}, {
    "product_name": "Ice Cream", "category": "Frozen", "product_units": [{
        "item_sku": "ICE_001", "unit_category": "1L tub", "units": 40, "price": 5.99, "expiry": "2025-12-31"
    }]
}, {
    "product_name": "Frozen Pizza", "category": "Frozen", "product_units": [{
        "item_sku": "FPZ_001", "unit_category": "400g", "units": 60, "price": 6.99, "expiry": "2025-09-30"
    }]
}, {
    "product_name": "Butter", "category": "Dairy", "product_units": [{
        "item_sku": "BTR_001", "unit_category": "250g", "units": 85, "price": 4.99, "expiry": "2025-05-15"
    }]
}, {
    "product_name": "Carrots", "category": "Produce", "product_units": [{
        "item_sku": "CRT_001", "unit_category": "1kg bag", "units": 120, "price": 2.99, "expiry": "2025-03-10"
    }]
}, {
    "product_name": "Potatoes", "category": "Produce", "product_units": [{
        "item_sku": "POT_001", "unit_category": "5kg bag", "units": 70, "price": 8.99, "expiry": "2025-04-30"
    }]
}, {
    "product_name": "Tomatoes", "category": "Produce", "product_units": [{
        "item_sku": "TOM_001", "unit_category": "500g pack", "units": 90, "price": 3.99, "expiry": "2025-02-28"
    }]
}, {
    "product_name": "Onions", "category": "Produce", "product_units": [{
        "item_sku": "ONI_001", "unit_category": "1kg bag", "units": 130, "price": 2.99, "expiry": "2025-04-15"
    }]
}, {
    "product_name": "Cereal", "category": "Breakfast", "product_units": [{
        "item_sku": "CRL_001", "unit_category": "500g box", "units": 75, "price": 4.99, "expiry": "2025-12-31"
    }]
}, {
    "product_name": "Oatmeal", "category": "Breakfast", "product_units": [{
        "item_sku": "OAT_001", "unit_category": "1kg bag", "units": 90, "price": 3.99, "expiry": "2026-01-31"
    }]
}, {
    "product_name": "Honey", "category": "Condiments", "product_units": [{
        "item_sku": "HNY_001", "unit_category": "500g jar", "units": 60, "price": 7.99, "expiry": "2026-12-31"
    }]
}, {
    "product_name": "Maple Syrup", "category": "Condiments", "product_units": [{
        "item_sku": "MPS_001", "unit_category": "250ml bottle", "units": 45, "price": 8.99, "expiry": "2026-06-30"
    }]
}, {
    "product_name": "Olive Oil", "category": "Cooking", "product_units": [{
        "item_sku": "OIL_001", "unit_category": "500ml bottle", "units": 70, "price": 9.99, "expiry": "2026-03-31"
    }, {
        "item_sku": "OIL_002", "unit_category": "1L bottle", "units": 40, "price": 17.99, "expiry": "2026-03-31"
    }]
}, {
    "product_name": "Black Pepper", "category": "Spices", "product_units": [{
        "item_sku": "PEP_001", "unit_category": "100g jar", "units": 100, "price": 3.99, "expiry": "2026-12-31"
    }]
}, {
    "product_name": "Salt", "category": "Spices", "product_units": [{
        "item_sku": "SLT_001", "unit_category": "500g box", "units": 150, "price": 1.99, "expiry": "2027-12-31"
    }]
}, {
    "product_name": "Green Tea", "category": "Beverages", "product_units": [{
        "item_sku": "TEA_001", "unit_category": "50 bags", "units": 85, "price": 4.99, "expiry": "2026-06-30"
    }]
}];

async function sendProducts() {
    for (const product of products) {
        console.log(product)
        try {
            const response = await fetch('http://localhost:3000/v1/products/', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(product)
            });

            const result = await response.json();
            console.log(`Product ${product.product_name} sent:`, result);
        } catch (error) {
            console.error(`Error sending ${product.product_name}:`, error);
        }
    }
}

sendProducts();
