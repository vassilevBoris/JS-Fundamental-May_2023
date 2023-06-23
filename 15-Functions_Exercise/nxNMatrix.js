function nxNMatrix(n) {
    function rowGenerator(n) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += `${n} `;
        }
        return row;
    }
    for (let i = 1; i <= n; i++) {
        console.log(rowGenerator(n));
    }
}
nxNMatrix(3);