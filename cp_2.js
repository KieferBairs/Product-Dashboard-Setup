const API_URL = "https://www.course-api.com/javascript-store-products";

// Fetch, Then, Catch
function fetchProductsThen() {
    fetch(API_URL)
        .then((res) => {
            if (!res.ok) throw new Error (`HTTP ${res.status}`)
            return res.json();
        })
        .then((products) => {
            console.log("Products (then):");
            products.forEach((p) => console.log(p.fields.name));
        })
        .catch((err) => {
            console.error("Fetch error (then):", err);
    });
}

// Async/await + try/catch
async function fetchProductAsync() {
    try {
        const res =await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const products = await res.json();
        displayProducts(products);
      } catch (error) {
        handleError(error);
        }
}

// Display first 5 products with image, name, and price
function displayProducts(products) {
    const container = document.getElementById("product-container");
    if (!container) return;

    container.innerHTML = ""; // Clear before inserting new products

    const FirstFive = products.slice(0,5);
    FirstFive.forEach((p) => {
        const {name, price, image} = p.fields;
        const imgUrl = image[0].url;
        const formattedPrice = (price / 100).toLocaleString("en-US", {
            stle: "currency",
            currenct: "USD",
        });
        
    
