const expenseOperations = {
    expenses:[],

    add(id, name, cost, remarks, photo, color, date){
        var expenseObject = new Expense(id,name,cost,remarks,date,color,photo);
        this.expenses.push(expenseObject);
        return expenseObject;
    },
    len(){
        return this.expenses.length;
    }
}

