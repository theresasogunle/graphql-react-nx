import React from 'react';

import './set-list.css';
import { useSetListQuery } from '@nx-apollo-react-example/data-access';

/* eslint-disable-next-line */
export interface SetListProps {}

export const SetList = (props: SetListProps) => {
  const { loading, error, data } = useSetListQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data!.allSets!.map((set) => (
        <li key={set?.id}>
          {set?.year} - <strong>{set?.name}</strong> ({set?.numParts} parts)
        </li>
      ))}
    </ul>
  );
};

export default SetList;
