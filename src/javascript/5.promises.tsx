// Rejects if one fails
export async function promiseAll() {
  const promises = [];
  for (let i = 0; i < 10; i++) {
    promises.push(createPromise(i));
  }

  const response = await Promise.all<any[]>(promises);
  return response;
}

function createPromise(id: number) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}
