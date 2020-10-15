// * PROMISES
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
console.log(p);

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});

// * EXEMPLE
const userLeft = false;
const userWatchingDogMeme = false;

function watchTutorialPromise() {
  return new Promise((response, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingDogMeme) {
      reject({
        name: "User Watching Dog Meme",
        message: "WebDevSimplified < Dog",
      });
    } else {
      response("Thumbs up and Subscribe");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log("Success: " + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

// * EXEMPLE again
const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 recorded");
});
const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 recorded");
});
const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 recorded");
});

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then((messages) => {
//     console.log(messages)
// });

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);
