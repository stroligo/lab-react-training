import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <section>
          <h5>Iteração 1</h5>
          <div className="areaflex">
            <IdCard
              lastName="Doe"
              firstName="John"
              gender="male"
              height="178"
              birth="1992-07-14"
              picture="https://randomuser.me/api/portraits/men/44.jpg"
            />
            <IdCard
              className="IdCard"
              lastName="Delores "
              firstName="Obrien"
              gender="female"
              height="172"
              birth="1988-05-11"
              picture="https://randomuser.me/api/portraits/women/44.jpg"
            />
          </div>
        </section>
        <section>
          <h5>Iteração 2</h5>
          <div className="areaflex">
            <Greetings lang="de">Ludwig</Greetings>
            <Greetings lang="fr">François</Greetings>
          </div>
        </section>
        <section>
          <h5>Iteração 3</h5>
          <div className="areaflex">
            <Random min={1} max={6} />
            <Random min={1} max={100} />
          </div>
        </section>
        <section>
          <h5>Iteração 4</h5>
          <div className="areaflex">
            <BoxColor r={0} g={64} b={75} />
            <BoxColor r={255} g={153} b={0} />
            <BoxColor r={50} g={50} b={50} />
          </div>
        </section>
        <section>
          <h5>Iteração 5</h5>
          <div className="areaflex">
            <CreditCard
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white"
            />

            <CreditCard
              type="Master Card"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bank="N26"
              owner="Maxence Bouret"
              bgColor="#eeeeee"
              color="#222222"
            />

            <CreditCard
              type="Visa"
              number="0123456789016984"
              expirationMonth={12}
              expirationYear={2019}
              bank="Name of the Bank"
              owner="Firstname Lastname"
              bgColor="#ddbb55"
              color="white"
            />
          </div>
        </section>
        <section>
          <h5>Iteração 6</h5>
          <div className="areaflex">
            <Rating>0</Rating>
            <Rating>1</Rating>
            <Rating>2</Rating>
            <Rating>3</Rating>
            <Rating>4</Rating>
            <Rating>5</Rating>
          </div>
        </section>
        <section>
          <h5>Iteração 7</h5>
          <div className="areaflex">
            <DriverCard
              name="Travis Kalanick"
              rating={4.2}
              img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
              car={{
                model: 'Toyota Corolla Altis',
                licensePlate: 'CO42DE',
              }}
            />
            <DriverCard
              name="Dara Khosrowshahi"
              rating={1.4}
              img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
              car={{
                model: 'Audi A3',
                licensePlate: 'BE33ER',
              }}
            />
          </div>
        </section>
        <section>
          <h5>Iteração 8</h5>
          <div className="areaflex">
            <LikeButton /> <LikeButton />
          </div>
        </section>
        <section>
          <h5>Iteração 9</h5>
          <div className="areaflex">
            <ClickablePicture
              img="maxence.png"
              imgClicked="maxence-glasses.png"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
