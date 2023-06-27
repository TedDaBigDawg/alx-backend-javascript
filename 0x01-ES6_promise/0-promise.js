export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (1 + 1 == 2) resolve({
      status: 200,
      body: 'Success',
    });
  });
}
