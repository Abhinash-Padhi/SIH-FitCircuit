import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkoutRoutine.css'
import IntroImg from "./images/IntroImg.jpg"
import Bridge_Workout from "./images/Bridge_Workout.mp4"
import ChairSquat_Workout from "./images/ChairSquat_Workout.mp4"
import KneePushup_Workout from "./images/KneePushup_Workout.mp4"
import StationaryLunge_Workout from "./images/StationaryLunge_Workout.mp4"
import PlankDog_Workout from "./images/PlankDog_Workout.mp4"
import StraightLeg_Workout from "./images/StraightLeg_Workout.mp4"
import BirdDog_Workout from "./images/BirdDog_Workout.mp4"
import ForeArm_Workout from "./images/ForeArm_Workout.mp4"
import hipAbduction from "./images/hipAbduction.mp4"
import Bicycle from "./images/Bicycle.mp4"
import SingleLeg from "./images/SingleLeg.mp4"
import Squat from "./images/Squat.mp4"
import PushUp from "./images/PushUp.mp4"
import LungeForward from "./images/LungeForward.mp4"
import Pike from "./images/Pike.mp4"
import Superman from "./images/Superman.mp4"
import legPlank from "./images/legPlank.mp4"
import kneelingSide from "./images/kneelingSide.mp4"
import DeadBug from "./images/DeadBug.mp4"
import SingleLegBridge from "./images/SingleLegBridge.mp4"
import OverHeadSquart from "./images/OverHeadSquart.mp4"
import OneLeggedPushup from "./images/OneLeggedPushup.mp4"
import jumpingLunges from "./images/jumpingLunges.mp4"
import Advanced from "./images/Advanced.mp4"
import Kneeling from "./images/Kneeling.mp4"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
const WorkoutRoutine = () => {
    const navigate=useNavigate()
    const goToFC=()=>{
        navigate("/fitnesscalculator");
        window.scrollTo(0, 0);
    }
  React.useEffect(() => {
    // Select all video elements
    const videos = document.querySelectorAll('video');

    // Loop through each video
    videos.forEach(video => {
      // Play video when hovered
      video.addEventListener('mouseover', () => {
        video.play();
      });
      
      // Pause video when hover ends
      video.addEventListener('mouseout', () => {
        video.pause();
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      videos.forEach(video => {
        video.removeEventListener('mouseover', () => {
          video.play();
        });
        
        video.removeEventListener('mouseout', () => {
          video.pause();
        });
      });
    };
  }, []);

  return (
    <>
    <Navbar/>
    <div id="new_conta">
      <h1 id="Main">Moves to Make the Most of Your At-Home Workout</h1>
      <img src={IntroImg}alt="" />
      <h3 id="Second">
        You can exercise at home without any equipment by practicing yoga poses and strength training exercises that use your body weight for resistance.
      </h3>
      <p>If the idea of a home workout makes you yawn, think again!</p>
      <p>When executed correctly, using just your body weight can give you a run for your money.</p>
      <p>So, whether the gym isn’t your thing or you’re short on time, clear out a space in any room and prepare to sweat.</p>
      <p>The 30 bodyweight moves we’ve detailed below can be scaled for beginner, intermediate, and advanced exercisers, so start where you feel ready and progress from there.</p>
      
      <h1>Beginner routine</h1>
      <p>Our 10 picks for beginner bodyweight exercises will provide a full-body workout.</p>
      <p>Complete 2 sets of 10 to 15 reps of each exercise, with 30 seconds to 1 minute of rest between each move.</p>
      <p>This circuit should take about 15 to 20 minutes — a great beginner routine.</p>
      
      <h2>Bridge</h2>
      <video loop src={Bridge_Workout}></video>
      <p>Activate your core and posterior chain (a fancy term for the backside of your body) with a bridge. This is a great exercise to use as a warmup.</p>
      <h3>Directions:</h3>
      <p>Lie on your back with your knees bent, feet flat on the floor, and your arms extended by your sides.</p>
      <p>Pushing through your feet and bracing your core, raise your bottom off the ground until your hips are fully extended, squeezing your glutes at the top.</p>
      <p>Slowly return to the starting position and repeat.</p>
      
      <h2>Chair squat</h2>
      <video loop src={ChairSquat_Workout}></video>
      <p>Squats can help strengthen your legs and core, which could make everyday movements easier. Starting with a chair underneath will help you master proper form.</p>
      <h3>Directions:</h3>
      <p>Stand in front of the chair with your feet shoulder-width apart, toes pointed slightly out.</p>
      <p>Hinging at your hips and bending your knees, lower back and down until your bottom touches the chair, allowing your arms to extend out in front of you.</p>
      <p>Push up through your heels and return to the starting position.</p>
      
      <h2>Knee pushup</h2>
      <video loop src={KneePushup_Workout}></video>
      <p>A beginner-style pushup, this move will help you build strength before attempting a standard pushup.</p>
      <h3>Directions:</h3>
      <p>Get into a high plank position from your knees.</p>
      <p>Maintaining a straight line from your head to your knees, bend your elbows to lower yourself down to the ground. Keep your elbows at a 45-degree angle.</p>
      <p>Push back up to start.</p>
      
      <h2>Stationary lunge</h2>
      <video loop src={StationaryLunge_Workout}></video>
      <p>Hit your quads, hamstrings, and glutes with a stationary lunge.</p>
      <h3>Directions:</h3>
      <p>Split your stance with your right leg in front. Your right foot should be flat on the ground, and your left foot should be up on its toes.</p>
      <p>Bend your knees and lunge, stopping when your right thigh is parallel to the ground.</p>
      <p>Push up through your right foot to return to the starting position. Repeat for the desired number of reps, then switch legs.</p>
      
      <h2>Plank to Downward Dog</h2>
      <video loop src={PlankDog_Workout}></video>
      <p>This move will test your upper body, especially your shoulders.</p>
      <h3>Directions:</h3>
      <p>Get into a high plank position, with your hands stacked underneath your shoulders and your feet close together.</p>
      <p>Keeping your core engaged and your hands and feet stationary, pike your hips up and back into the Downward Dog pose. Your body should form a triangle with the ground. Keep your neck neutral. Your gaze should be directed toward your feet.</p>
      <p>Hold here for a second, then return to the plank. Repeat.</p>
      
      <h2>Straight-leg donkey kick</h2>
      <video src={StraightLeg_Workout} loop></video>
      <p>Build those glutes with donkey kicks.</p>
      <h3>Directions:</h3>
      <p>Get on all fours, with your hands aligned with your shoulders and your knees aligned with your hips.</p>
      <p>Keeping your back straight, push your right foot out to the imaginary wall behind you while keeping your leg straight.</p>
      <p>Your foot should remain flexed (toes pointing down to the floor) throughout. Take care to keep your hips square to the ground. Squeeze your buttocks at the top.</p>
      <p>Return to the starting position. Repeat for the desired number of reps. Repeat on the other leg.</p>
      
      <h2>Bird Dog</h2>
      <video src={BirdDog_Workout} loop></video>
      <p>A full-body move that requires balance and stability, the Bird Dog pose is easily scalable to your ability level. Start with this version if you're a beginner.</p>
      <h3>Directions:</h3>
      <p>Get on all fours, ensuring your hands are directly underneath your shoulders and your knees are underneath your hips.</p>
      <p>Keeping your neck neutral, simultaneously extend your left arm and right leg, keeping your hips square to the ground. Pause here for 2 seconds.</p>
      <p>Return to the start position. Repeat with your right arm and left leg.</p>
      
      <h2>Forearm plank</h2>
      <video src={ForeArm_Workout} loop></video>
      <p>A full-body exercise that requires strength and balance, planks put the core into overdrive.</p>
      <h3>Directions:</h3>
      <p>Assume a plank position on your forearms. Your body should form a straight line from head to feet.</p>
      <p>Ensure your lower back and hips don't sag.</p>
      <p>Hold the position for 30 seconds to 1 minute. This counts as one set. Perform 2 sets.</p>
      
      <h2>Side-lying hip abduction</h2>
      <video loop src={hipAbduction}></video>
      <p>You may not think about strengthening your hip muscles until they start to bother you, but reconsider, especially if you sit all day.</p>
      <h3>Directions:</h3>
      <p>Lie on your left side, supporting your head with the left hand and placing the right hand in front of your body.</p>
      <p>Keeping your legs straight, stack the right leg over the left leg, keeping your hips pointed forward.</p>
      <p>Lift your right leg up, maintaining your body's position. Make sure your hips don't open up.</p>
      <p>Return to the start position. Repeat for the desired number of reps, then perform on the other side.</p>
      
      <h2>Bicycle crunch</h2>
      <video loop src={Bicycle}></video>
      <p>Although you'll work your core with almost all of these strength exercises, a targeted ab move doesn't hurt.</p>
      <h3>Directions:</h3>
      <p>Lie on your back and bring your legs to a tabletop position. Bend your elbows, and put your hands behind your head.</p>
      <p>Crunch up and bring your right elbow to your left knee, straightening your right leg.</p>
      <p>Release the crunch slightly. Bend your right leg and straighten your left leg, then bring your left elbow to your right knee.</p>
      <p>Repeat for the desired number of reps.</p>
      
      <h1>Intermediate Routine</h1>
      <p>Our intermediate bodyweight workout is a bit more challenging.</p>
      <p>Complete 3 sets of 10 to 15 reps of each exercise, with 30 seconds to 1 minute of rest between each move.</p>
      <p>This circuit should take about 20 to 30 minutes.</p>
      
      <video  loop src={SingleLeg}></video>
        <p>
            Any time you take an exercise to a single leg, you'll automatically make it harder.
        </p>
        <h3>
            Directions:
        </h3>
        <p>
            Assume a bridge position.
        </p>
        <p>
            Lift one foot off the ground while keeping your leg bent, then bring the foot down.
        </p>
        <p>
            Repeat this movement with the other leg.
        </p>
        <p>
            Complete the same number of reps on each side.
        </p>
        <h2>
            Squat
        </h2>
        <video  loop src={Squat}></video>
        <p>
            Taking out the chair allows you to master the form of a regular bodyweight squat.
        </p>
        <p>
            The same motion is still applicable here, though. Imagine you're sitting down in a chair by hinging at the
            hips and pushing your bottom back.
        </p>
        <h2>
            Pushup
        </h2>
        <video  loop src={PushUp}></video>
        <p>
            A standard pushup is the more challenging version of a knee pushup. Assume a high plank position and
            complete the pushup in the same way, allowing your elbows to flare out at a 45-degree angle.
        </p>
        <h2>
            Forward and backward lunge
        </h2>
        <video  loop src={LungeForward}></video>
        <p>
            By traveling instead of staying stationary in a lunge, you'll improve stability, mobility, and balance.
        </p>
        <h3>
            Directions:
        </h3>
        <p>
            Start with your feet together and step forward, lunging with your right leg.
        </p>
        <p>
            Push off the forward leg to come back through the starting position, and step back into a backward lunge.
        </p>
        <p>
            Push off the backward leg to return to the center. This is 1 rep.
        </p>
        <p>
            This counts as one rep. Perform this 10 to 15 times on your right leg, then repeat on your left leg.
        </p>
        <h2>
            Pike pushups
        </h2>
        <video  loop src={Pike}></video>
        <p>
            Adding a pushup to your pike will target those shoulders even more. The movement here is all in the arms, so keep the rest of your body stable
        </p>
        <p>
            To perform, assume a pike position and bend at the elbows — allowing them to flare out to the sides — directing the top of your head toward the ground.
        </p>
        <h2>
            Kneeling squat
        </h2>
        <video  loop src={Kneeling}></video>
        <p>
            Kneeling squats are great for time under tension, or keeping your legs and glutes under continuous work, which adds to the burn.
        </p>
        <h3>
            Directions:
        </h3>
        <p>
            Drop down into a squat position. You won't stand at all during this move.
        </p>
        <p>
            Drop your knees down to the ground one at a time so you're kneeling.
        </p>
        <p>
            Step your feet back to the ground one at a time, maintaining that squat position.
        </p>
        <p>
            Repeat as quickly as you can while maintaining good form.
        </p>
        <h2>
            Superman
        </h2>
        <video  loop src={Superman}></video>
        <p>
            Work your lower back — and the whole backside of your body — with a superman. Go as slowly as you can to reap the benefits of this move.
        </p>
        <h3>
            Directions:
        </h3>
        <p>
            Lie on your stomach, arms and legs extended.
        </p>
        <p>
            Keeping your neck neutral, recruit your core and the back of your body to simultaneously raise your arms and legs up and off the ground as high as they'll go
        </p>
        <p>
            Pause for 1 second at the top, and slowly lower back to the start position.
        </p>
        <h2>
            Plank with alternating leg lift
        </h2>
        <video  loop src={legPlank}></video>
        <h3>
            Directions:
        </h3>
        <p>
            Adding a leg lift to a regular plank makes you unstable, requiring your core to work in overdrive and your three limbs to support more weight.
        </p>
        <p>
            Lift one leg up, hold it for 5 seconds, and return it to the ground. Repeat with the other leg.
        </p>
        <h2>
            Kneeling side plank with hip abduction
        </h2>
        <video  loop src={kneelingSide}></video>
        <p>
            Holding your body up with your knee and your extended arm during a hip abduction makes this move an upper-body exercise, too. Plus, it recruits the core even more.
        </p>
        <h3>
            Directions:
        </h3>
        <p>
            Kneel on your left side, supporting your body with your elbow. Bend knees at 90 degrees with hips facing front, in line with knees.
        </p>
        <p>
            Lift the right (top) leg up, pause, and lower it back down.
        </p>
        <p>
            Perform for 10 to 15 reps, then repeat on the other side.
        </p>
        <h2>
            Dead bug
        </h2>
        <video  loop src={DeadBug}></video>
        <p>
            Activate those deep core muscles with a dead bug.
        </p>
        <h3>
            Directions:
        </h3>
        <p>Start lying on your back, legs at tabletop, and arms extended in front of you.</p>
        <p>
            In a coordinated motion, drop the heel of your left leg toward the ground and drop your right arm above your head, taking care your lower back stays flat on the ground.
        </p>
        <p>
            Bring your leg back to tabletop and your arm in front of you, then repeat with the opposite arm and leg.
        </p>
        <h1>
            Advanced routine
        </h1>
        <p>
            When the intermediate routine becomes a breeze, try these advanced moves.
        </p>
        <p>
            Perform 2 sets of 10 to 15 reps for each exercise, resting for 30 seconds to 1 minute between exercises.
        </p>
        <p>
            Alternatively, perform 1 set of each exercise, rest for 1 to 2 minutes, and repeat.
        </p>
        <h2>
            Single leg bridge with leg extended
        </h2>
        <video  loop src={SingleLegBridge}></video>
        <p>
            Lifting the foot and then extending the leg straight out will make a single-leg bridge even more difficult.
        </p>
        <p>
            Keep your foot flexed throughout the movement. Complete the same number of reps on both legs.
        </p>
        <h2>
            Overhead squat
        </h2>
        <video  loop src={OverHeadSquart}></video>
        <p>
            Extending your arms overhead will challenge your mobility and range of motion in your upper body, as well as give your lower body the benefits of a squat. It'll also force you to engage and work your core.
        </p>
        <p>
            To perform, complete a squat with your arms extended overhead throughout.
        </p>
        <h2>
            One-legged pushup
        </h2>
        <video  loop src={OneLeggedPushup}></video>
        <p>
            Lifting one leg will put more weight on your other three limbs, increasing the challenge.
        </p>
        <p>
            To get it done, assume a pushup position and lift one leg off the ground, then complete the pushup.
        </p>
        <h2>
            Jumping lunges
        </h2>
        <video  loop src={jumpingLunges}></video>
        <p>
            Jumping exercises, often known as plyometrics, require giving max effort for a short interval of time.
        </p>
        <p>
            Because of the power and strength they require, you'll feel the burn quickly.
        </p>
        <p>
            Add a jump to your lunge, really exploding up in each rep, to challenge yourself.
        </p>
        <h2>
            Advanced Bird Dog
        </h2>
        <video  loop src={Advanced}></video>
        <p>
            Get into a high plank position, then complete a Bird Dog, lifting one arm and the opposite leg simultaneously.
        </p>
        <p id="last">
            As with all advanced exercises, maintaining a straight spine is key here.
        </p>
        <h2>Conclusion</h2>
        <p>Bodyweight workouts are a fantastic way to build strength, endurance, and flexibility without needing equipment. Whether you're a beginner, intermediate, or advanced, there's a workout here for you.</p>
        <p>Remember to stay consistent and challenge yourself, and you'll see great results in no time!</p>
        <h4>Know Your Fitness Status!</h4>
        <button id='fitcalc' onClick={goToFC}>Calculate</button>
  </div>
  <Footer/>
  </>
  );
}
export default WorkoutRoutine;
