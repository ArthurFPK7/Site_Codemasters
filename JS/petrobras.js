document.addEventListener("DOMContentLoaded", function() {
    const busca = document.getElementById("txtBuscaBacias");
    const resultsList = document.getElementById("results");
    const data = [
      "Apple",
      "Banana",
      "Cherry",
      "Durian",
      "Elderberry",
      "Fig",
      "Grapes",
      "Honeydew",
      "Jackfruit",
      "Kiwi",
      "Lemon",
      "Mango",
      "Nectarine",
      "Orange",
      "Papaya",
      "Quince",
      "Raspberry",
      "Strawberry",
      "Tangerine",
      "Ugli fruit",
      "Watermelon"
    ];
  
    function filterItems(query) {
      return data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    }
  
    function displayResults(results) {
      resultsList.innerHTML = "";
      results.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        resultsList.appendChild(li);
      });
    }
  
    busca.addEventListener("input", function() {
      const query = this.value.trim();
      const filteredItems = filterItems(query);
  
      displayResults(filteredItems);
    });
  });""
  