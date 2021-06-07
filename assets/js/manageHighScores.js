/*jshint esversion: 6 */

function setAllHighScores(newHighScore) {
  // Check if there is any localStorage and if not return array with 0s
  let storedScore = localStorage.getItem('highScore') ? JSON.parse(localStorage.getItem('highScore')) : [0, 0, 0];

  // Check if the new high score already there if so don't need to do anything
  // otherwise include the new score
  if (storedScore.includes(newHighScore)) {
    return;
  } else {
    storedScore.push(newHighScore);
  }

  // Sort the array of high scores in ascending order
  let sortedArr = storedScore.sort();
  // Remove the 1st element of array as it's the lowest value
  sortedArr.shift();
  // Set the new high scores in localStorage.
  localStorage.setItem('highScore', JSON.stringify(sortedArr));
}