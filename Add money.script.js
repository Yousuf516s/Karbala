// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Data for bank transfers
    const bankData = [
        { amount: 100, charge: 7 },
        { amount: 500, charge: 7 },
        { amount: 900, charge: 7 },
        { amount: 1000, charge: 14 },
        { amount: 20000, charge: 400 },
        { amount: 30000, charge: 800 },
        { amount: 50000, charge: 2000 }
    ];

    // Data for card transfers
    const cardData = [
        { amount: 100, charge: 5 },
        { amount: 500, charge: 10 },
        { amount: 1000, charge: 20 },
        { amount: 5000, charge: 100 },
        { amount: 10000, charge: 150 },
        { amount: 20000, charge: 300 },
        { amount: 30000, charge: 450 }
    ];

    // Function to create chart
    function createChart(svgId, data) {
        const svg = document.getElementById(svgId);
        const width = svg.getAttribute('width');
        const height = svg.getAttribute('height');
        const padding = 40;

        const xScale = d3.scaleBand()
            .domain(data.map(d => d.amount))
            .range([padding, width - padding])
            .padding(0.1);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.charge)])
            .range([height - padding, padding]);

        const barWidth = xScale.bandwidth();

        // Create bars
        data.forEach(d => {
            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("x", xScale(d.amount));
            rect.setAttribute("y", yScale(d.charge));
            rect.setAttribute("width", barWidth);
            rect.setAttribute("height", height - padding - yScale(d.charge));
            rect.setAttribute("fill", "#007bff");
            svg.appendChild(rect);
        });

        // Add x-axis
        const xAxis = d3.axisBottom(xScale);
        d3.select(svg).append("g")
            .attr("transform", `translate(0, ${height - padding})`)
            .call(xAxis);

        // Add y-axis
        const yAxis = d3.axisLeft(yScale);
        d3.select(svg).append("g")
            .attr("transform", `translate(${padding}, 0)`)
            .call(yAxis);
    }

    // Create the charts
    createChart("bank-chart-svg", bankData);
    createChart("card-chart-svg", cardData);
});
