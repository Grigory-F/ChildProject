class SelectGoodsParam{
  constructor(dateTime, goodsId, autorizated) {
    this.dateTime = dateTime;
    this.goodsId = goodsId;
    this.autorizated = autorizated;
  }
}
class SaveReport {
  constructor(selectParam) {
    this.selectParam = selectParam;
  }
  save() {
    return JSON.stringify({
      dateTime: this.selectParam.dateTime,
      goodsId: this.selectParam.goodsId,
      autorizated: this.selectParam.autorizated,
    }, 2);
  }
}


let newGoodForPay = document.querySelectorAll(".button-check");
let arrayGoodsId = [];
for (let i = 0; i < newGoodForPay.length; i++) {
  newGoodForPay[i].addEventListener("click", (e) => {
    arrayGoodsId.push(e.target.dataset.goods);
    console.log(arrayGoodsId);
  })
}

document.querySelector(".button").addEventListener("click", (e) => {
  let arra = new SaveReport(
    new SelectGoodsParam(new Date, arrayGoodsId, true)
  ).save();
  localStorage.setItem("saveCartGoodsParam", arra);
})

