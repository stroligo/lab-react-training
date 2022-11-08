import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

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
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
