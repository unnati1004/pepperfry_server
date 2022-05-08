const mongoose =require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema=new mongoose.Schema(
    {
        full_name:{ type:String, require:true },
        mobile:{ type:Number, require:true },
        email:{ type: String, require:true },
        password:{ type: String, require:true },
    }, 
    {
        versionKey:false, 
        timestamp:true,
    }
);
userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
    this.password = bcrypt.hashSync(this.password, 6);
    return next();
  });
  
  userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  
module.exports=mongoose.model("user", userSchema);