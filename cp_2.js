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

