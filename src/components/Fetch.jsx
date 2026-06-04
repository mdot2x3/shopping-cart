async function Fetch(setCardData) {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const fetchData = await response.json();
    console.log(fetchData);
    const selected = fetchData.slice(0, 20);
    // for each item in selected, map a new object to state
    setCardData(
      selected.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        description: item.description,
        category: item.category,
        image: item.image,
      })),
    );
  } catch (error) {
    console.log(error);
  }
}

export default Fetch;
