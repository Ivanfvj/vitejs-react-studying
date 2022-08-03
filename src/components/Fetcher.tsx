import { useEffect, useState } from 'react';
import { promiseAll } from '../javascript/5.promises';

export const Fetcher = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any[]>([]);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await promiseAll();
      setLoading(false);
      setResponse(response);
    }

    fetch();
  }, []);

  return (
    <div className="p-5 border rounded bg-slate-50">
      {loading && (
        <div className="p-3 bg-green-50 border-l-2 border-green-500 mb-2">
          <p>Loading...</p>
        </div>
      )}
      <div className="space-y-4">
        {response &&
          response.length &&
          response.map((e) => (
            <div className="text-left max-w-2xl mx-auto rounded bg-white p-5 border space-y-4">
              <h1 className="text-lg font-bold">Post {e.id}</h1>
              <p>{e.body}</p>
              <hr />
              <div className="text-right">
                <small>UserId: {e.userId}</small>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
