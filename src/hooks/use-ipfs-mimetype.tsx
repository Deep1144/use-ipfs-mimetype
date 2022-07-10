import { useState, useEffect } from 'react';
import { getIpfsMimeType } from '../helper';

/**
 * @param hash - ipfs CID or ipfs link like ipfs://cid
 * @returns
 */
export function useIpfsMimeType(
  hash: string
): {
  type: string;
  error: Error | string | null;
} {
  const [state, setState] = useState<{
    type: string;
    error: Error | string | null;
  }>({
    type: '',
    error: null,
  });

  useEffect(() => {
    if (hash) {
      const getType = async () => {
        try {
          const res = await getIpfsMimeType(hash);
          setState({ type: res, error: '' });
        } catch (error) {
          setState({ type: '', error: error as Error });
        }
      };

      getType();
    }
  }, [hash]);

  const { type, error } = state;
  return { type, error };
}
