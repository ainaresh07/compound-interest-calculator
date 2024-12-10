// script.js
document.getElementById("calculate-btn").addEventListener("click", () => {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100;
  const days = parseInt(document.getElementById("days").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(days) || principal <= 0 || rate <= 0 || days <= 0) {
    alert("Please enter valid positive values for all inputs.");
    return;
  }

  const tableBody = document.querySelector("#result-table tbody");
  tableBody.innerHTML = ""; // Clear previous results

  document.getElementById("result-section").classList.remove("hidden");

  let amount = principal;

  // Render rows
  for (let day = 1; day <= days; day++) {
    amount *= (1 + rate);
    const row = `<tr>
                  <td>${day}</td>
                  <td>${amount.toFixed(2)}</td>
                </tr>`;
    tableBody.innerHTML += row;
  }
});

// Clear Button Functionality
document.getElementById("clear-btn").addEventListener("click", () => {
  document.getElementById("principal").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("days").value = "";
  document.querySelector("#result-table tbody").innerHTML = "";
  document.getElementById("result-section").classList.add("hidden");
});

// Back Button Functionality
document.getElementById("back-btn").addEventListener("click", () => {
  document.getElementById("principal").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("days").value = "";
  document.querySelector("#result-table tbody").innerHTML = "";
  document.getElementById("result-section").classList.add("hidden");
});

// PDF Download Functionality
document.getElementById("download-pdf").addEventListener("click", () => {
  const { jsPDF } = window.jspdf; // Ensure you include jsPDF library
  const pdf = new jsPDF();
  pdf.text("Compound Interest Table", 10, 10);

  const table = document.getElementById("result-table");
  pdf.autoTable({
    head: [[...table.querySelectorAll("th")].map((th) => th.textContent)],
    body: [...table.querySelectorAll("tbody tr")].map((tr) =>
      [...tr.querySelectorAll("td")].map((td) => td.textContent)
    ),
  });

  pdf.save("Compound_Interest_Table.pdf");
});
