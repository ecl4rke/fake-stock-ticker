import {getStockData} from "./fakeStockAPI.js"

const stockDisplayName = document.getElementById("name")
const stockDisplaySymbol = document.getElementById("symbol")
const stockDisplayPrice = document.getElementById("price")
const stockDisplayPriceIcon = document.getElementById("price-icon")
const stockDisplayTime = document.getElementById("time")

let prevPrice = null

function renderStockTicker(stockData) {
  const {name, sym, price, time} = stockData

  stockDisplayName.textContent = `Name: ${name}`
  stockDisplaySymbol.textContent = `Symbol: ${sym}`
  stockDisplayPrice.textContent = `Price: ${price}`
  stockDisplayPriceIcon.innerHTML = price === null ? `<div class="triangle right"></div>`
                                      : price < prevPrice ? `<div class="triangle down"></div>`
                                      : price > prevPrice ? `<div class="triangle up"></div>`
                                      : `<div class="triangle right"></div>`
  
  stockDisplayTime.textContent = `Time: ${time}`
  prevPrice = price
}

renderStockTicker(getStockData())
const intervalRender = setInterval(() => renderStockTicker(getStockData()), 1500)
