const GOOGLE_SHEET_ID = "1n-_CUr9HXY1x9UD3mMOMcHZ7gpt1k8-Q64X3I-_iyp8";

const DataLoader = {
    loadSheet: async function(sheetname) {
        const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetname)}&headers=1`;

        const res = await fetch(url);
        const text = await res.text();

        // Google wraps JSON in a weird callback
        const json = JSON.parse(text.substring(47).slice(0, -2));

        const rows = json.table.rows;
        const headers = json.table.cols.map(col => col.label);

        return rows.map(row => {
            const obj = {};
                row.c.forEach((cell, i) => {
                obj[headers[i]] = cell ? cell.v : "";
            });
            return obj;
        });
    },
    loadCampaignList: async function() {
        const rows = await this.loadSheet("Campaigns");

        return rows.map(row => ({
            type: row.Type,
            label: row.Label,
            subLabel: row["Sub-label"],
            description: row.Description,
            sheetName: row.Type.trim()
        }));
    }
};

export default DataLoader;