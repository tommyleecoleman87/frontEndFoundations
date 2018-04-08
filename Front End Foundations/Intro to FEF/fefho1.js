function totalPrice(sqEdge, pricePerSqFt) {
    sqEdge *= sqEdge;
    let total = sqEdge * pricePerSqFt;
    return total;
}