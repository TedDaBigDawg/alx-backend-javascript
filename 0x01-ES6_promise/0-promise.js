export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (!success) reject(new Error('Error'));
    resolve({
      status: 200,
      body: 'Success',
    });
  });
}
