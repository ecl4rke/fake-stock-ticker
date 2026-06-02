import {getStockData} from "./fakeStockAPI.js"

let prevPrice = null

function renderStockTicker(stockData) {
  const stockDisplayName = document.getElementById("name")
  const stockDisplaySymbol = document.getElementById("symbol")
  const stockDisplayPrice = document.getElementById("price")
  const stockDisplayPriceIcon = document.getElementById("price-icon")
  const stockDisplayTime = document.getElementById("time")

  const {name, sym, price, time} = stockData

  stockDisplayName.textContent = `Name: ${name}`
  stockDisplaySymbol.textContent = `Symbol: ${sym}`
  stockDisplayPrice.textContent = `Price: ${price}`
  stockDisplayPriceIcon.innerHTML = price < prevPrice ? `<div class="triangle down">`
                                      : price > prevPrice ? `<div class="triangle up">`
                                      : `<div class="triangle right">`
  
  stockDisplayTime.textContent = `Time: ${time}`
  prevPrice = price
}

renderStockTicker(getStockData())
const intervalRender = setInterval(() => renderStockTicker(getStockData()), 1000)
