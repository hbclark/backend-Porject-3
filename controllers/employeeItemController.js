const Employee = require('../models/employee');
//get all Employees
exports.getAllEmployeeItems = async (req, res) => {
    try {
        const EmployeeItems = await Employee.find();
        res.json(EmployeeItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    }

exports.getEmployeeItem = async (req, res) => {
    try {
        const EmployeeItem = await Employee.findOne({Empid:req.params.id});
        res.json(EmployeeItem);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}



//create a new Employee
exports.createEmployeeItem = async (req,res)=>{
    try{
        const newEmployeeItem = new Employee(req.body);
        const EmployeeItem = await newEmployeeItem.save();
        res.status(200).json(EmployeeItem);
    }catch(e){
        res.status(400).json({error:e.message});
    }
}
//update a Employee
exports.updateEmployeeItem=  async(req,res)=>{
    try{
        const updatedEmployeeItem = await Employee.findOneAndUpdate
        ({Empid:req.params.id},req.body,{new:true});
        res.status(200).json("Employee updated successfully");
    }catch(e){
        res.status(400).json({error:e.message});

    }
}

exports.updateEmployeeItemByPatch=  async(req,res)=>{
    try{
        const updatedEmployeeItem = await Employee.findOneAndUpdate({Empid:req.params.id},req.body,{new
        :true});
        res.status(200).json("Employee patched successfully");
        

}
catch(e){
    res.status(400).json({error:e.message});
}
}
//delete a Employee
exports.deleteEmployeeItem = async(req,res)=>{
    try{
        await Employee.deleteOne({Empid:req.params.id});
        res.status(200).end("Employee deleted successfully");
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}