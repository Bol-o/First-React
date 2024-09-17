import { people } from './data.jsx';
import { getImageUrl } from './utils.jsx';
import Hooks from './hooks.jsx';

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

// function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/1bX5QH6.jpg"
//       alt="Lin Lanying"
//       width={200}
//       height={200}
//     />
//   );
// }
// function getImageUrl(person, lulu = "s") {
//   return (
//     'https://i.imgur.com/' +
//     person.imageId +
//     lulu +
    
//     '.jpg'
//   );
// }
function Avatar({ person, size }) {
  return (
    <img
      className="avatar2"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export function List() {

  // return (
  //       <img
  //         className="avatar"
  //         src="https://i.imgur.com/1bX5QH6.jpg"
  //         alt="Lin Lanying"
  //         width={200}
  //         height={200}
  //       />
  //     );
  
 
  return (
    <div className='avatar' style={{ backgroundColor: COLORS[1] }}>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      
      <Avatar
        size={100}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      
      <Avatar
        size={100}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
      </div>
    
  );
  }
  
//     const chemists = people.map(person => {
//       if (person.profession == 'chemist'){
//         return (
//       <li key={person.id}>
//         <img
//           src={getImageUrl(person)}
//           alt={person.name}
//         />
//         <p>
//           <b>{person.name}:</b>
//           {' ' + person.profession + ' '}
//           known for {person.accomplishment}
//         </p>
//       </li>
//     )} else {
//       return null
//     }
//   })
//   const others = people.map(person => {
//     if (person.profession !== 'chemist'){
//       return (
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   )}
//   else {
//     return null
//   }
// }
//   );
//     return (
//       <article>
//         <h1>Scientists</h1>
//         <h1>Chemists</h1>
//         <ul>{chemists}</ul>
//         <h1>Other scientists</h1>
//         <ul>{others}</ul>
//       </article>
// );
  // }

