export async function fetchGet(url: string) {
  const response = await fetch(url).then((res) => res.json());
  return response;
}

export async function fetchPost(url: string, body: any) {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      authorization: `Bearer token_here`,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(url, options).then((res) => res.json());
  return response;
}

export async function fetchPostPromise(url: string, body: any) {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(body),
  };
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}
