export function getStockData() {
    return {
        name: 'EpicVues',
        sym: 'EpV',
        /* return a random number between 0 and 3 to two decimal places */
        price: (Math.random()*3).toFixed(2),  

        /* return a timestamp  in this format: hh/mm/ss */
        time: new Date().toTimeString().slice(0, 8)
    }
}