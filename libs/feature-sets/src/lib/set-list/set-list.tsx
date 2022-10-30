import './set-list.css';
import { useSetListQuery } from '@nx-apollo-react-example/data-access';

/* eslint-disable-next-line */
export interface SetListProps {}

export const SetList = () => {
  const res = useSetListQuery();

  // console.log(data);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // if (data) {
  //   return (
  //     <ul>
  //       {data?.allSets!.map((set) => (
  //         <li key={set?.id}>
  //           {set?.year} - <strong>{set?.name}</strong> ({set?.numParts} parts)
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  return <div></div>;
};

export default SetList;
