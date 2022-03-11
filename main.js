let money, time;

// function start() {
//     money = +prompt('Ваш бюджет на месяц?');
//     time = prompt('Введите дату в формате YYYY-MM-DD');

//     while(isNaN(money) || money == '' || money == null) {
//         money = +prompt('Ваш бюджет на месяц?');
//     }
// }
// start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

// function chooseExpenses() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt('Статья расходов'),
//             b = prompt('Во сколько обойдется');
    
//         if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//             console.log('Отлично!');
//             appData.expenses[a] = b;
    
//         } else {
//             console.log('Введите статью расходов. Значение не должно превышать 50 символов');
//             i--;
//         }
//     }
// }
// chooseExpenses();

// function detectDayBudget () {
//     appData.moneyPerDay = (appData.budget / 30).toFixed();
//     alert('Ужедневный бюджет: ' + appData.moneyPerDay);
// }
// detectDayBudget();

function chooseOptExpenses () {
    for (let i = 1; i <= 3; i ++) {
        let a = prompt('Статья необязательных расходов');
        appData.optionalExpenses[i] = a;
    }
}
chooseOptExpenses();

// function checkSavings() {
//     if (appData.savings == true) {
//         let save = +prompt('Сумма накоплений'),
//             percent = +prompt('Под каой процент');

//         appData.monthIncome = save/100/12*percent;
//         alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
//     }
// }

// checkSavings()