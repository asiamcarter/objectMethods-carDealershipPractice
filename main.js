let outputArticle = document.querySelector(".outputArticle")

salesByWeek.forEach(sale => {
    outputArticle.innerHTML +=
    `
    <p>Employee: ${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</p>
    <p>Gross Profit: ${sale.gross_profit}</p>
   `
    for (const entry of Object.entries(sale.vehicle)) {
        outputArticle.innerHTML += `
        <p>${entry[0]} : ${entry[1]}</p>
        `
    }

outputArticle.innerHTML += `<hr/>`

})

