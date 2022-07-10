import React, { FC, HTMLAttributes, useEffect } from 'react';
import { useIpfsMimeType } from './';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  hash: string;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A hook that returns the MIME type of file stored on ipfs by it's hash
 */
export const ShowCase: FC<Props> = ({ hash }) => {
  const { error, type } = useIpfsMimeType(hash);

  useEffect(() => {
    console.log({ error, type });
  }, [error, type]);

  return (
    <div>
      <h3> Type hash in controls below</h3>

      <hr />
      <div>
        Hash: {hash}
        <br />
        Type: {type}
        <br />
        Error: {error && error.toString()}
      </div>
    </div>
  );
};
