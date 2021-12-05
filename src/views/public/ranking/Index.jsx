import goldCup from "../../../assets/img/cup.png";
import silverCup from "../../../assets/img/silver-cup.png";

const Index = () => {
  return (
    <div className="container mx-auto my-10 grid place-items-center gap-10">
      <h1 className="text-4xl">Ranking użytkowników</h1>
      <div className="rounded-lg bg-white p-8 flex items-center justify-between max-w-lg gap-8 relative">
        <div className="absolute top-8 left-0 opacity-20 text-9xl">1.</div>
        <div className="flex gap-8 items-center">
          <img
            alt="profil"
            src="https://i.pravatar.cc/100?u=Kamil00"
            className="object-cover rounded-lg h-16 w-16 relative z-10"
          />
          <div className="flex flex-col">
            <strong className="text-xl">Kamil00</strong>
            <span>
              Ilość zgłoszeń: <strong>59</strong>
            </span>
            <span>
              Ilość punktów: <strong>381</strong>
            </span>
          </div>
        </div>
        <img className="h-24" src={goldCup} alt="Złoty puchar" />
      </div>
      <div className="rounded-lg bg-white p-8 flex items-center justify-between max-w-lg gap-8 relative">
        <div className="absolute top-8 left-0 opacity-20 text-9xl">2.</div>
        <div className="flex gap-8 items-center">
          <img
            alt="profil"
            src="https://i.pravatar.cc/100?u=Pawelx"
            className="object-cover rounded-lg h-16 w-16 relative z-10"
          />
          <div className="flex flex-col">
            <strong className="text-xl">Pawelx</strong>
            <span>
              Ilość zgłoszeń: <strong>49</strong>
            </span>
            <span>
              Ilość punktów: <strong>364</strong>
            </span>
          </div>
        </div>
        <img className="h-24" src={silverCup} alt="Srebrny puchar" />
      </div>
      <div className="rounded-lg bg-white p-8 flex items-center justify-between max-w-lg gap-8 relative">
        <div className="flex gap-8 items-center" relative z-10>
          <img
            alt="profil"
            src="https://i.pravatar.cc/100?u=JulyJul"
            className="object-cover rounded-lg h-16 w-16 relative z-10"
          />
          <div className="flex flex-col">
            <strong className="text-xl">JulyJul</strong>
            <span>
              Ilość zgłoszeń: <strong>35</strong>
            </span>
            <span>
              Ilość punktów: <strong>287</strong>
            </span>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white p-8 flex items-center justify-between max-w-lg gap-8 relative">
        <div className="flex gap-8 items-center">
          <img
            alt="profil"
            src="https://i.pravatar.cc/100?u=Mariusz9"
            className="object-cover rounded-lg h-16 w-16 relative z-10"
          />
          <div className="flex flex-col">
            <strong className="text-xl">Mariusz94</strong>
            <span>
              Ilość zgłoszeń: <strong>30</strong>
            </span>
            <span>
              Ilość punktów: <strong>281</strong>
            </span>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white p-8 flex items-center justify-between max-w-lg gap-8 relative">
        <div className="flex gap-8 items-center">
          <img
            alt="profil"
            src="https://i.pravatar.cc/100?u=Maciejj"
            className="object-cover rounded-lg h-16 w-16 relative z-10"
          />
          <div className="flex flex-col">
            <strong className="text-xl">Maciejj123</strong>
            <span>
              Ilość zgłoszeń: <strong>23</strong>
            </span>
            <span>
              Ilość punktów: <strong>210</strong>
            </span>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white p-8 flex items-center justify-between max-w-lg gap-8 relative">
        <div className="flex gap-8 items-center">
          <img
            alt="profil"
            src="https://i.pravatar.cc/100?u=JanuszKowalski"
            className="object-cover rounded-lg h-16 w-16 relative z-10"
          />
          <div className="flex flex-col">
            <strong className="text-xl">JanuszKowal</strong>
            <span>
              Ilość zgłoszeń: <strong>18</strong>
            </span>
            <span>
              Ilość punktów: <strong>179</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
