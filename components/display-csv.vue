<template>
    <div class="flex justify-center">        
        <div id="csv-table" class="w-auto table-scroller">                
        </div>        
    </div>
</template>

<script>
import * as d3 from 'd3';
export default {
    props: {
        fileName: {
            type: String,
            default: ''
        }
    },    
    async mounted() {               
        const data = await d3.csv(`/data_files/${this.fileName}`);
        const rows = data.map(d => {return [d.YearsExperience, d.Salary]});
        const headers = [["Years of Experience", "Salary"]]
        const container = d3.select("#csv-table")
                .append("table");
        container.append("thead")
            .selectAll("tr")
                .data(headers).enter()
                .append("tr")
            .selectAll("th")
                .data(d => d).enter()
                .append("th")
                .text(d => d);
        container.append("tbody")
            .selectAll("tr")
                .data(rows).enter()
                .append("tr")
            .selectAll("td")
                .data(d => d).enter()
                .append("td")
                .text(d => d);   
        d3.select("table").attr("class", "table-scroller");
        
    }
}
</script>

<style>
    .table-scroller {
        max-height: 10rem;
        overflow-y: scroll;
    }
</style>