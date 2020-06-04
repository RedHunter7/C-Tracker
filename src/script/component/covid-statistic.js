class covidStatistic extends HTMLElement {
    connectedCallback() {
        this.id = this.getAttribute("id") || null;
        this.innerHTML = `
    <div class="covid-statistic" id="${this.id}">
        <main>
            <h2>Covid Global Statistic</h2>
            <div class="table-statistic" id="table-statistic"></div>
        </main>
    </div>
        `;
    }
}

customElements.define("covid-statistic", covidStatistic);