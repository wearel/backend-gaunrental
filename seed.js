var seeder = require('mongoose-seed');
const mongoose = require('mongoose');


// Connect to MongoDB via Mongoose
seeder.connect('mongodb+srv://root:root@cluster0.sbzlz.mongodb.net/db-gaun?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
}, function () {

  // Load Mongoose models
  seeder.loadModels([
    './models/user',
    './models/admin/categories'

  ]);



  // Clear specified collections
  seeder.clearModels(['user-register', 'categories'], function () {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });
  });
});


var data = [
    {
        'model' : 'categories',
        'documents' : [
            {
                _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901111'),
                name : 'Adat Sunda',
                productid : [
                    {_id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222')}
                ]
            }
        ]
    },

    // user-register
    {
        'model' : 'user-register',
        'documents' : [
            {_id: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
                name: 'amilin',
                email: 'amilin@gmail.com',
                password: '12345678',
                nohandphone: '121212232'
        }
        ]
    }

]