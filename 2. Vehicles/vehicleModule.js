
const vehicleTypes = {
    car: {
        wheels: 4,
        fuelType: 'Petrol',
    },
    motorcycle: {
        wheels: 2,
        fuelType: 'Gasoline',
    },
    bicycle: {
        wheels: 2,
        type: 'Manual',
    },
};

// Add a new vehicle type
exports.addVehicleType = (type, wheels, fuelType) => {
    vehicleTypes[type] = { wheels, fuelType };
};

// Get all vehicle types
exports.getAllVehicleTypes = () => {
    return vehicleTypes;
};

// Calculate the total number of wheels in the system
exports.getTotalWheels = () => {
    let totalWheels = 0;
    Object.values(vehicleTypes).forEach((vehicle) => {
        totalWheels += vehicle.wheels;
    });
    return totalWheels;
};
