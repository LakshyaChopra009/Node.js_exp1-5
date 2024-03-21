const vehicleModule = require('./vehicleModule');

// Add a new vehicle type
vehicleModule.addVehicleType('truck', 6, 'Diesel');

// Get all vehicle types
const allVehicleTypes = vehicleModule.getAllVehicleTypes();
console.log('All Vehicle Types:');
Object.keys(allVehicleTypes).forEach((type) => {
    console.log(`- ${type}: ${allVehicleTypes[type].wheels} wheels, Fuel: ${allVehicleTypes[type].fuelType || allVehicleTypes[type].type}`);
});

// Calculate the total number of wheels
const totalWheels = vehicleModule.getTotalWheels();
console.log(`Total Wheels in the System: ${totalWheels}`);
