export const getProductPayload = (body: any) => {
    return {
        product_name: body.product_name,
        product_sku: body.product_sku,
        category: body.category,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime()
    }
}