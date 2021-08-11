import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '김덕현',
  'birthday': '721222',
  'gender': '남자',
  'job': '대학생'
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '이예나',
  'birthday': '050512',
  'gender': '여자',
  'job': '주부'
  },
  {
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '홍길동',
  'birthday': '721122',
  'gender': '남자',
  'job': '디자이너'
  }
];

function App() {
  return (
    <div>
      {customers.map(c => { return (<Customer
            key = {c.id}
            id = {c.id}
            image = {c.image}
            name = {c.name}
            birthday = {c.birthda}
            gender = {c.gender}
            job = {c.job}
            />
          ) ;
        })
      }
    </div>
  );
}

export default App;
