export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (1 + 1 == 2) reject(new Error('Error'));
    resolve(console.log("Success"););
  });
}


