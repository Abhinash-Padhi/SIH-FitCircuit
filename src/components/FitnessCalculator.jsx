import React, { useState } from 'react';
import './FitnessCalculator.css';

const FitnessCalculator = () => {
  const [steps, setSteps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [goalSteps, setGoalSteps] = useState(0);
  const [goalCalories, setGoalCalories] = useState(0);
  const [activityType, setActivityType] = useState('walking');
  const [waterIntake, setWaterIntake] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [distanceWalked, setDistanceWalked] = useState(0);
  const [bmi, setBmi] = useState('N/A');
  const [stepsProgress, setStepsProgress] = useState(0);
  const [caloriesProgress, setCaloriesProgress] = useState(0);
  const [workouts, setWorkouts] = useState([]);
  const [history, setHistory] = useState([]);

  const getUserId = () => {
    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId = 'user-' + Date.now();
      localStorage.setItem('userId', userId);
    }
    return userId;
  };

  const calculate = () => {
    if (steps >= 0 && weight > 0 && height > 0 && goalSteps > 0 && goalCalories > 0) {
      let calorieFactor = activityType === 'running' ? 0.1 : 0.05;
      const calculatedCaloriesBurned = (steps / 20) * (weight / 60) * calorieFactor;
      const calculatedDistanceWalked = steps * 0.0008;

      const heightInMeters = height / 100;
      const calculatedBmi = weight / (heightInMeters * heightInMeters);

      const calculatedStepsProgress = (steps / goalSteps) * 100;
      const calculatedCaloriesProgress = (calculatedCaloriesBurned / goalCalories) * 100;

      setCaloriesBurned(calculatedCaloriesBurned);
      setDistanceWalked(calculatedDistanceWalked);
      setBmi(calculatedBmi.toFixed(2));
      setStepsProgress(calculatedStepsProgress.toFixed(2));
      setCaloriesProgress(calculatedCaloriesProgress.toFixed(2));

      const today = new Date().toISOString().split('T')[0];
      const userId = getUserId();
      const storedHistory = JSON.parse(localStorage.getItem('fitnessHistory-' + userId)) || [];
      storedHistory.push({
        date: today,
        steps,
        caloriesBurned: calculatedCaloriesBurned,
        distanceWalked: calculatedDistanceWalked,
        bmi: calculatedBmi,
      });
      localStorage.setItem('fitnessHistory-' + userId, JSON.stringify(storedHistory));

      suggestWorkouts(calculatedCaloriesBurned, calculatedBmi);
    } else {
      alert('Please fill out all fields with valid values.');
    }
  };

  const showHistory = () => {
    alert("historty")
    const userId = getUserId();
    const storedHistory = JSON.parse(localStorage.getItem('fitnessHistory-' + userId)) || [];
    setHistory(storedHistory);
  };

  const clearHistory = () => {
    const userId = getUserId();
    localStorage.removeItem('fitnessHistory-' + userId);
    setHistory([]); // Clear the state as well
    alert('History cleared.');
  };

  const suggestWorkouts = (caloriesBurned, bmi) => {
    let workoutSuggestions = [];
    if (bmi < 18.5) {
      workoutSuggestions.push('Focus on strength training to build muscle.');
    } else if (bmi >= 25) {
      workoutSuggestions.push('Include cardio exercises to help with weight loss.');
    }

    if (caloriesBurned < goalCalories) {
      workoutSuggestions.push('Add a 30-minute run to reach your calorie goal.');
    } else {
      workoutSuggestions.push('You’ve met your calorie goal! Great job!');
    }

    setWorkouts(workoutSuggestions);
  };

  return (
    <div className="sihCalc-body">
      <div className="sihCalc-container">
        <h1 className="sihCalc-heading">Fitness Calculator</h1>
        <div className="sihCalc-calculator">
          <i className="fas fa-dumbbell sihCalc-icon"></i>

          <label className="sihCalc-label">Enter Steps Walked:</label>
          <input
            type="number"
            className="sihCalc-input"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Number of Steps"
            min="0"
            max="10000000"
          />

          <label className="sihCalc-label">Enter Your Weight (kg):</label>
          <input
            type="number"
            className="sihCalc-input"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Your Weight in kg"
            min="0"
            max="500"
          />

          <label className="sihCalc-label">Enter Your Height (cm):</label>
          <input
            type="number"
            className="sihCalc-input"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Your Height in cm"
            min="0"
            max="300"
          />

          <label className="sihCalc-label">Set Daily Steps Goal:</label>
          <input
            type="number"
            className="sihCalc-input"
            value={goalSteps}
            onChange={(e) => setGoalSteps(e.target.value)}
            placeholder="Daily Steps Goal"
            min="0"
            max="10000000"
          />

          <label className="sihCalc-label">Set Daily Calories Goal:</label>
          <input
            type="number"
            className="sihCalc-input"
            value={goalCalories}
            onChange={(e) => setGoalCalories(e.target.value)}
            placeholder="Daily Calories Goal"
            min="0"
            max="10000"
          />

          <label className="sihCalc-label">Select Activity:</label>
          <select
            className="sihCalc-input"
            value={activityType}
            onChange={(e) => setActivityType(e.target.value)}
          >
            <option value="walking">Walking</option>
            <option value="running">Running</option>
            <option value="cycling">Cycling</option>
          </select>

          <label className="sihCalc-label">Enter Water Intake (liters):</label>
          <input
            type="number"
            className="sihCalc-input"
            value={waterIntake}
            onChange={(e) => setWaterIntake(e.target.value)}
            placeholder="Water Intake"
            min="0"
            max="10"
            step="0.1"
          />

          <button className="sihCalc-button" onClick={calculate}>
            Calculate
          </button>
          {/* <button className="sihCalc-button" onClick={showHistory}>
            Show History
          </button>
          <button className="sihCalc-button" onClick={clearHistory}>
            Clear History
          </button> */}

          <div className="sihCalc-result">
            <p>Calories Burned: {caloriesBurned.toFixed(2)} kcal</p>
            <p>Distance: {distanceWalked.toFixed(2)} km</p>
            <p>BMI: {bmi}</p>
            <p>Steps Goal Progress: {stepsProgress}%</p>
            <p>Calories Goal Progress: {caloriesProgress}%</p>
            <p>Daily Water Intake: {waterIntake} / 2.5 liters</p>
          </div>

          {workouts.length > 0 && (
            <div className="sihCalc-workouts">
              <h2>Suggested Workouts</h2>
              <ul>
                {workouts.map((workout, index) => (
                  <li key={index}>{workout}</li>
                ))}
              </ul>
            </div>
          )}

          {history.length > 0 && (
            <div className="sihCalc-history">
              <h2>Activity History</h2>
              <ul>
                {history.map((entry, index) => (
                  <li key={index}>
                    Date: {entry.date}, Steps: {entry.steps}, Calories Burned: {entry.caloriesBurned.toFixed(2)} kcal,
                    Distance: {entry.distanceWalked.toFixed(2)} km, BMI: {entry.bmi.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FitnessCalculator;
