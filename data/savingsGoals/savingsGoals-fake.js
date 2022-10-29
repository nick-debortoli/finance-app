let loadFakeSavingsGoals = (options, callback) => {

    let savingsGoals = [];
    let categories = ['Roof', 'Scooter', 'Ski Trip'];
    let goal = [5000, 500, 1000];
    let saved = [2500, 100, 320];
  
    for (let index = 0; index < categories.length; index++) { 
    
        let savingsGoal = {
            id: index+1,
            category: categories[index],
            goal: goal[index],
            saved: saved[index]
            //due date?
        };

        savingsGoals.push(savingsGoal);
    }

    callback(savingsGoals);
};