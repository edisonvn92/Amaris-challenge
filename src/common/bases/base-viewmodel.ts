import { useState } from 'react';

export function useBaseViewModel() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  async function catchAction(action: () => Promise<void>) {
    try {
      setLoading(true);
      await action();
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }

  return {
    catchAction,
    loading,
    setLoading,
    error,
    setError,
  };
}
