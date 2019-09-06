//budget是预算，求预算之内可以买的最少件数。prices是全部商品的价格。
function solution(prices, budget) {
	//要求买到的最小件数，所以要使买的每件产品要尽可能的贵。
    //把全部价格都放在数组里
    let priArr = [...prices.split(",")];
	console.log(priArr);
    let result = 0;
    //从高价到低价
    let sortPri = priArr.sort(function(a,b){return b-a});
    //遍历
    for(let i=0;i<sortPri.length;i++){
		console.log(budget);
        if(budget/sortPri[i]>=1){
            result = result + Math.floor(budget/sortPri[i]);//从贵的买起，件数++
			budget = budget - Math.floor(budget/sortPri[i])*sortPri[i];	
        }
    }
	return result;
}
let result = solution (1,30,300,1000);
console.log(result);
