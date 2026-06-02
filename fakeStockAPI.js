export function getStockData() {
    return {
        name: 'EpicVues',
        sym: 'EpV',
        price: (Math.random()*3).toFixed(2),  

        /* returns a timestamp the format: hh/mm/ss */
        time: new Date().toTimeString().slice(0, 8)
    }
}