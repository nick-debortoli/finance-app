const config = {
    // Server information
    "server": {
        "host": "localhost",
        "port": 3000
    }, 

    "data": {
        "source": [
        { type: "CSV",
          enabled: false,
          options: {
            directory: '/data/',
            filename: 'example.csv'
          }},

          { type: "FAKE",
          enabled: true,
          options: {
            numberOfTransactions: 1000,
            categories: [
                'Eating Out',
                'Alcohol',
                'Memberships',
                'Clothes',
                'Travel',
                'Fun',
                'Student Loans',
                'Mortgage',
                'Utilities',
                'Gas/Car',
                'Groceries',
                'Misc'
            ],
            dateStart: new Date('2022-01-01'),
            dateEnd: new Date('2022-10-24'),
            maxTransaction: 300,
            minTransaction: 1
          }},

          { type: "FIREBASE",
          enabled: false,
          options: {
           
          }}]
    }
}