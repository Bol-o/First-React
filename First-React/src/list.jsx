import { people } from './data.jsx';
import { getImageUrl } from './utils.jsx';



export function List() {
    const chemists = people.map(person => {
      if (person.profession == 'chemist'){
        return (
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
    )} else {
      return null
    }
  })
  const others = people.map(person => {
    if (person.profession !== 'chemist'){
      return (
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  )}
  else {
    return null
  }
}
  );
    return (
      <article>
        <h1>Scientists</h1>
        <h1>Chemists</h1>
        <ul>{chemists}</ul>
        <h1>Other scientists</h1>
        <ul>{others}</ul>
      </article>
);
  }

