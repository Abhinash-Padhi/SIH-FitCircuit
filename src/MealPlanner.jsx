import React, { useState } from 'react';
import './MealPlanner.css'; // Import custom CSS for styling
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const MealPlanner = () => {
  const [userData, setUserData] = useState({
    weight: '',
    height: '',
    age: '',
    gender: '',
    dietType: '',
  });
  const [mealPlan, setMealPlan] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [bmiStatement, setBmiStatement] = useState('');

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateBMI = () => {
    const { weight, height } = userData;
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      return bmi;
    }
    return null;
  };

  const generateMealPlan = () => {
    const bmi = calculateBMI();
    let category = 'maintenance'; // Default category
    let statement = '';
    if (!userData.weight || !userData.age || !userData.height || !userData.gender || !userData.dietType) {
      alert('Please fill in all fields before generating the meal plan.');
      return; 
    }
    if (bmi < 18.5) {
      category = 'weightGain';
      statement = <b>Your BMI is {bmi.toFixed(1)}, which is considered underweight. The meal plan provided is designed to help you gain weight and build muscle. The meals are rich in calories, protein, and essential nutrients to support healthy weight gain.</b>;
    } else if (bmi > 25) {
      category = 'weightLoss';
      statement = <b>Your BMI is {bmi.toFixed(1)}, which is considered overweight. The meal plan provided is designed to help you lose weight and achieve a healthier body composition. The meals are balanced to ensure you get essential nutrients while managing calorie intake.</b>;
    } else {
      category = 'maintenance';
      statement = <b>Your BMI is {bmi.toFixed(1)}, which is considered normal. The meal plan provided is designed to help you maintain your current weight and stay healthy. The meals provide a balanced intake of calories, proteins, vitamins, and minerals to support overall health.</b>;
    }

    const mealOptions = {
      weightGain: {
        vegetarian: {
          breakfast: [
            { name: "Paneer Paratha with Yogurt", calories: 700, protein: 25, fats: 30, vitamins: 'A, C, K' },
            { name: "Aloo Paratha with Curd", calories: 750, protein: 20, fats: 35, vitamins: 'A, B12, D' },
            { name: "Oats Upma with Nuts", calories: 600, protein: 15, fats: 20, vitamins: 'B, E' },
          ],
          lunch: [
            { name: "Paneer Butter Masala with Naan", calories: 850, protein: 30, fats: 40, vitamins: 'A, C' },
            { name: "Dal Makhani with Jeera Rice", calories: 800, protein: 25, fats: 25, vitamins: 'B, C' },
            { name: "Chole Bhature", calories: 900, protein: 20, fats: 30, vitamins: 'B, C' },
          ],
          dinner: [
            { name: "Vegetable Korma with Chapati", calories: 700, protein: 20, fats: 25, vitamins: 'A, C' },
            { name: "Palak Paneer with Rice", calories: 750, protein: 30, fats: 30, vitamins: 'A, C' },
            { name: "Mixed Vegetable Curry with Roti", calories: 650, protein: 15, fats: 20, vitamins: 'A, C' },
          ],
          snacks: [
            { name: "Mixed Nuts", fats: "30", protein: "10", vitamins: "E, B6"},
            { name: "Fruit Smoothie", calories: 250, fats: "12", protein: "8", vitamins: "B1, B2"},
          ],
          drinks: [
            { name: "Milkshake", calories: 400, fats: "15", protein: "8", vitamins: "E, B6" },
            { name: "Protein Shake", calories: 350 , fats: "8", protein: "20", vitamins: "A, D" },
          ],
        },
        nonVegetarian: {
          breakfast: [
            { name: "Chicken Sausage with Scrambled Eggs", calories: 700, protein: 30, fats: 35, vitamins: 'B12, D' },
            { name: "Egg Bhurji with Roti", calories: 750, protein: 25, fats: 30, vitamins: 'B12, D' },
            { name: "Chicken Keema Paratha", calories: 650, protein: 25, fats: 20, vitamins: 'B12, D' },
          ],
          lunch: [
            { name: "Chicken Biryani with Raita", calories: 900, protein: 35, fats: 40, vitamins: 'B12, D' },
            { name: "Grilled Chicken with Brown Rice", calories: 850, protein: 30, fats: 25, vitamins: 'B12, D' },
            { name: "Mutton Rogan Josh with Naan", calories: 900, protein: 35, fats: 40, vitamins: 'B12, D' },
          ],
          dinner: [
            { name: "Fish Curry with Rice", calories: 700, protein: 30, fats: 25, vitamins: 'B12, D' },
            { name: "Chicken Kebab with Salad", calories: 750, protein: 35, fats: 30, vitamins: 'B12, D' },
            { name: "Egg Curry with Chapati", calories: 650, protein: 25, fats: 20, vitamins: 'B12, D' },
          ],
          snacks: [
            { name: "Chicken Tenders", calories: 350, fats: "22", protein: "25", vitamins: "B6, B12" },
            { name: "Cheese Sticks", calories: 300, fats: "24", protein: "10", vitamins: "K, E" },
          ],
          drinks: [
            { name: "Buttermilk", calories: 150, fats: "8", protein: "6", vitamins: "A, C", },
            { name: "Sports Drink", calories: 200 , fats: "10", protein: "25", vitamins: "B12, D"},
          ],
        },
      },
      weightLoss: {
        vegetarian: {
          breakfast: [
            { name: "Vegetable Poha", calories: 400, protein: 10, fats: 10, vitamins: 'B, C' },
            { name: "Fruit Salad with Yogurt", calories: 350, protein: 8, fats: 5, vitamins: 'A, C' },
            { name: "Moong Dal Chilla", calories: 350, protein: 15, fats: 5, vitamins: 'B, C' },
          ],
          lunch: [
            { name: "Mixed Vegetable Soup", calories: 400, protein: 12, fats: 8, vitamins: 'A, C' },
            { name: "Quinoa Salad with Veggies", calories: 450, protein: 15, fats: 10, vitamins: 'A, C' },
            { name: "Spinach and Chickpea Salad", calories: 350, protein: 12, fats: 8, vitamins: 'A, C' },
          ],
          dinner: [
            { name: "Palak Soup", calories: 300, protein: 10, fats: 5, vitamins: 'A, C' },
            { name: "Grilled Tofu with Steamed Vegetables", calories: 400, protein: 15, fats: 8, vitamins: 'B, C' },
            { name: "Vegetable Stir-Fry with Cauliflower Rice", calories: 450, protein: 12, fats: 10, vitamins: 'A, C' },
          ],
          snacks: [
            { name: "Carrot Sticks with Hummus", calories: 150 , fats: "7", protein: "3", vitamins: "A, E"},
            { name: "Apple Slices with Peanut Butter", calories: 200, fats: "16", protein: "7", vitamins: "E, B3" },
          ],
          drinks: [
            { name: "Green Tea", calories: 0, fats: "0", protein: "0", vitamins: "C, B2" },
            { name: "Coconut Water", calories: 45, fats: "0", protein: "1", vitamins: "C, B6" },
          ],
        },
        nonVegetarian: {
          breakfast: [
            { name: "Egg White Omelette with Spinach", calories: 300, protein: 20, fats: 5, vitamins: 'B12, D' },
            { name: "Chicken and Vegetable Wrap", calories: 350, protein: 25, fats: 10, vitamins: 'B12, D' },
            { name: "Greek Yogurt with Nuts", calories: 250, protein: 15, fats: 8, vitamins: 'B12, D' },
          ],
          lunch: [
            { name: "Grilled Chicken Salad", calories: 500, protein: 30, fats: 15, vitamins: 'B12, D' },
            { name: "Chicken and Veggie Stir-Fry", calories: 450, protein: 25, fats: 12, vitamins: 'B12, D' },
            { name: "Fish Tikka with Salad", calories: 400, protein: 25, fats: 10, vitamins: 'B12, D' },
          ],
          dinner: [
            { name: "Chicken Soup", calories: 350, protein: 20, fats: 8, vitamins: 'B12, D' },
            { name: "Grilled Fish with Steamed Vegetables", calories: 400, protein: 25, fats: 10, vitamins: 'B12, D' },
            { name: "Egg Curry with Cauliflower Rice", calories: 450, protein: 20, fats: 12, vitamins: 'B12, D' },
          ],
          snacks: [
            { name: "Boiled Eggs", calories: 140, fats: "10", protein: "12", vitamins: "A, B12" },
            { name: "Greek Yogurt with Berries", calories: 180, fats: "2", protein: "15", vitamins: "B12, C" },
          ],
          drinks: [
            { name: "Herbal Tea", calories: 0, fats: "0", protein: "0" },
            { name: "Low-Fat Milk", calories: 100, fats: "0", protein: "0", vitamins: "C" },
          ],
        },
      },
      maintenance: {
        vegetarian: {
          breakfast: [
            { name: "Masala Oats", calories: 500, protein: 15, fats: 10, vitamins: 'B, E' },
            { name: "Vegetable Upma", calories: 450, protein: 12, fats: 8, vitamins: 'B, C' },
            { name: "Greek Yogurt with Honey and Nuts", calories: 400, protein: 15, fats: 10, vitamins: 'B, E' },
          ],
          lunch: [
            { name: "Vegetable Biryani with Raita", calories: 600, protein: 15, fats: 15, vitamins: 'B, C' },
            { name: "Paneer Tikka with Salad", calories: 650, protein: 25, fats: 20, vitamins: 'A, C' },
            { name: "Rajma with Rice", calories: 600, protein: 20, fats: 10, vitamins: 'B, C' },
          ],
          dinner: [
            { name: "Chickpea Salad with Veggies", calories: 550, protein: 18, fats: 12, vitamins: 'A, C' },
            { name: "Vegetable Khichdi with Pickle", calories: 600, protein: 20, fats: 15, vitamins: 'B, C' },
            { name: "Palak Paneer with Chapati", calories: 600, protein: 25, fats: 20, vitamins: 'A, C' },
          ],
          snacks: [
            { name: "Yogurt with Granola", calories: 250, fats: 10, protein: 15, vitamins: 'C' },
            { name: "Mixed Fruit Bowl", calories: 200, fats: 8, protein: 8, vitamins: 'A, B'},
          ],
          drinks: [
            { name: "Smoothie", calories: 300, fats: 15, protein:10, vitamins: 'A,C' },
            { name: "Infused Water", calories: 0, fats:0, protein:0 },
          ],
        },
        nonVegetarian: {
          breakfast: [
            { name: "Masala Egg Muffins", calories: 500, protein: 20, fats: 25, vitamins: 'B12, D' },
            { name: "Chicken Sausage with Scrambled Eggs", calories: 600, protein: 30, fats: 30, vitamins: 'B12, D' },
            { name: "Oats Porridge with Milk", calories: 400, protein: 15, fats: 10, vitamins: 'B, D' },
          ],
          lunch: [
            { name: "Chicken Curry with Brown Rice", calories: 700, protein: 35, fats: 25, vitamins: 'B12, D' },
            { name: "Tandoori Chicken with Quinoa", calories: 650, protein: 30, fats: 20, vitamins: 'B12, D' },
            { name: "Fish Curry with Rice", calories: 700, protein: 30, fats: 25, vitamins: 'B12, D' },
          ],
          dinner: [
            { name: "Chicken Stir-Fry with Vegetables", calories: 500, protein: 25, fats: 15, vitamins: 'B12, D' },
            { name: "Grilled Fish with Cauliflower Rice", calories: 450, protein: 25, fats: 10, vitamins: 'B12, D' },
            { name: "Egg Curry with Chapati", calories: 550, protein: 30, fats: 15, vitamins: 'B12, D' },
          ],
          snacks: [
            { name: "Boiled Chicken Breast", calories: 180, fats: 20, protein:15, vitamins:'B12, C' },
            { name: "Cheese Cubes", calories: 150,fats: 15, protein:10, vitamins:'A' },
          ],
          drinks: [
            { name: "Protein Shake", calories: 250,fats: 10, protein: 10, vitamins: 'D, A' },
            { name: "Green Juice", calories: 120, fats:4, protein: 8, vitamins:'C, B' },
          ],
        },
      },
    };

    const selectedMealOptions = mealOptions[category][userData.dietType];
    setMealPlan(selectedMealOptions);
    setBmiStatement(statement);
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <>
      <Navbar/>
      <div className="meal-planner-container">
      <h1 className="meal-planner-title">Diet Planner</h1>
      <div className="meal-planner-form-group">
        <label htmlFor="weight" className="meal-planner-label">Weight (kg):</label>
        <input type="number" id="weight" name="weight" className="meal-planner-input" value={userData.weight} onChange={handleChange} />
      </div>
      <div className="meal-planner-form-group">
        <label htmlFor="height" className="meal-planner-label">Height (cm):</label>
        <input type="number" id="height" name="height" className="meal-planner-input" value={userData.height} onChange={handleChange} />
      </div>
      <div className="meal-planner-form-group">
        <label htmlFor="age" className="meal-planner-label">Age:</label>
        <input type="number" id="age" name="age" className="meal-planner-input" value={userData.age} onChange={handleChange} />
      </div>
      <div className="meal-planner-form-group">
        <label htmlFor="gender" className="meal-planner-label">Gender:</label>
        <select id="gender" name="gender" className="meal-planner-select" value={userData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="meal-planner-form-group">
        <label htmlFor="dietType" className="meal-planner-label">Diet Type:</label>
        <select id="dietType" name="dietType" className="meal-planner-select" value={userData.dietType} onChange={handleChange}>
          <option value="">Select Diet Type</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="nonVegetarian">Non-Vegetarian</option>
        </select>
      </div>
      <button className="meal-planner-button" onClick={generateMealPlan}>Generate Diet Plan</button>

      {showPopup && (
        <div className="meal-planner-popup">
          <div className="meal-planner-popup-content">
            <span className="meal-planner-close-btn" onClick={closePopup}>&times;</span>
            <p className="meal-planner-bmi-statement">{bmiStatement}</p>
            <h2 className="meal-planner-section-title">Breakfast</h2>
            <ul className="meal-planner-list">
              {mealPlan?.breakfast?.map((meal, index) => (
                <li key={index} className="meal-planner-list-item">
                  <p className="meal-planner-item-text">
                    {meal.name} - {meal.calories} Calories, Protein: {meal.protein}g, Fats: {meal.fats}g, Vitamins: {meal.vitamins}
                  </p>
                </li>
              ))}
            </ul>
            <h2 className="meal-planner-section-title">Lunch</h2>
            <ul className="meal-planner-list">
              {mealPlan?.lunch?.map((meal, index) => (
                <li key={index} className="meal-planner-list-item">
                  <p className="meal-planner-item-text">
                    {meal.name} - {meal.calories} Calories, Protein: {meal.protein}g, Fats: {meal.fats}g, Vitamins: {meal.vitamins}
                  </p>
                </li>
              ))}
            </ul>
            <h2 className="meal-planner-section-title">Dinner</h2>
            <ul className="meal-planner-list">
              {mealPlan?.dinner?.map((meal, index) => (
                <li key={index} className="meal-planner-list-item">
                  <p className="meal-planner-item-text">
                    {meal.name} - {meal.calories} Calories, Protein: {meal.protein}g, Fats: {meal.fats}g, Vitamins: {meal.vitamins}
                  </p>
                </li>
              ))}
            </ul>
            <h2 className="meal-planner-section-title">Snacks</h2>
            <ul className="meal-planner-list">
              {mealPlan?.snacks?.map((meal, index) => (
                <li key={index} className="meal-planner-list-item">
                  <p className="meal-planner-item-text">
                    {meal.name} - {meal.calories} Calories, Protein: {meal.protein}g, Fats: {meal.fats}g, Vitamins: {meal.vitamins}
                  </p>
                </li>
              ))}
            </ul>
            <h2 className="meal-planner-section-title">Drinks</h2>
            <ul className="meal-planner-list">
              {mealPlan?.drinks?.map((drink, index) => (
                <li key={index} className="meal-planner-list-item">
                  <p className="meal-planner-item-text">
                    {drink.name} - {drink.calories} Calories, Protein: {drink.protein}g, Fats: {drink.fats}g, Vitamins: {drink.vitamins}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default MealPlanner;
