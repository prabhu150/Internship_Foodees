var mongoose= require('mongoose');
var bcrypt= require('bcrypt-nodejs');

//User Schema
var userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  facebook: String,
  google: String,
  twitter: String,
  tokens: Array,
  type:{type:String,default:'Customer'},
  tiffinstatus:{type:String,default:'Order not sent'},
  
  profile: {
    name: { type: String, default: '' },
    gender: { type: String, default: '' },
    location: {type: String, default: ''},
    picture: { type: String, default: 'http://transmedia.trinity.edu/~amille10/minisite3/facebookpicture.jpg' },
    time: { type: String, default: (new Date()).getFullYear() }, 
},


address: {
      line1: { type: String, default: '' },
      line2: { type: String, default: '' },
      line3: { type: String, default: '' },
      line4: { type: String, default: '' },
      line5: { type: String, default: '' },
      line6: { type: String, default: '' },
      line7: { type: Number, default: '' },
    },
    
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

/**
 * Password hash middleware.
 */
userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

// Compile Schema into a mongoose Model
var User = mongoose.model('User',userSchema);
module.exports = User;