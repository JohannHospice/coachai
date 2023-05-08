import { Card } from "~/components/commons/Card";
import type { Profile } from "~/models/types";
import { timeFromNowInFrench } from "~/tools/timeFromNowInFrench";

export function CardProfileResponsive({ profile }: { profile: Profile }) {
  return (
    <Card className="bg-gray-900 flex gap-8 flex-col sm:flex-row">
      <div className="flex flex-col justify-between gap-12">
        <div className="flex gap-4 items-center">
          {profile.gender === "H" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="48"
              className="bg-blue-400 w-12 h-12 fill-white rounded-full overflow-hidden p-2"
            >
              <path d="M800 256v220h-60V359L556 542q21 29 32.5 63.5T600 676q0 92-64 156t-156 64q-92 0-156-64t-64-156q0-92 64-156t156-64q36 0 70 11.5t63 32.5l184-184H580v-60h220ZM380.202 516Q314 516 267 562.798t-47 113Q220 742 266.798 789t113 47Q446 836 493 789.202t47-113Q540 610 493.202 563t-113-47Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="48"
              className="bg-red-400 w-12 h-12 fill-white rounded-full overflow-hidden p-2"
            >
              <path d="M450 936v-80h-80v-60h80V694q-82-11-136-73.706T260 475q0-91.417 64.5-155.209Q389 256 480 256t155.5 63.791Q700 383.583 700 475q0 82.588-54 145.294Q592 683 510 694v102h80v60h-80v80h-60Zm29.798-300Q546 636 593 589.202t47-113Q640 410 593.202 363t-113-47Q414 316 367 362.798t-47 113Q320 542 366.798 589t113 47Z" />
            </svg>
          )}
          <div>
            <div className="text-xs">Objectif</div>
            <div className="text-2xl font-semibold">
              {(() => {
                const res = profile.objectiveWeight - profile.weight;

                return (res > 0 ? "+" + res : res) + "kg";
              })()}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs">Age</div>
            <div className="text-md font-semibold">{profile.age + " ans"}</div>
          </div>
          <div>
            <div className="text-xs">Taille</div>
            <div className="text-md font-semibold">
              {profile.height + " cm"}
            </div>
          </div>
          <div>
            <div className="text-xs">Poids actuel</div>
            <div className="text-md font-semibold">
              {profile.weight + " kg"}
            </div>
          </div>
          <div>
            <div className="text-xs">Poids souhaité</div>
            <div className="text-md font-semibold">
              {profile.objectiveWeight + " kg"}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between gap-8">
        <div className="text-3xl font-semibold">
          {profile.commentary || (
            <span className="italic text-white/75">
              Aucun commentaire pour ce profil
            </span>
          )}
        </div>
        {profile.createdOn && (
          <div className="text-right text-xs text-white/60">
            {timeFromNowInFrench(new Date(profile.createdOn))}
          </div>
        )}
      </div>
    </Card>
    // <Card className="bg-gray-900">
    //   <h4 className="text-2xl mb-6">Profil du sportif</h4>
    //   <div className="grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-6">
    //     <ValueSection
    //       title="Genre"
    //       value={profile.gender === "H" ? "Homme" : "Femme"}
    //     />
    //     <ValueSection title="Âge" unit="ans" value={profile.age} />
    //     <ValueSection title="Taille" unit="cm" value={profile.height} />
    //     <ValueSection title="Poids" unit="kg" value={profile.weight} />
    //     <ValueSection
    //       title="Objectif de poids"
    //       unit="kg"
    //       value={profile.objectiveWeight}
    //     />
    //     {profile.commentary && (
    //       <div className="md:col-start-1 md:col-span-5 md:row-start-2 max-w-md">
    //         <TextSection title="Informations supplémentaires">
    //           {profile.commentary}
    //         </TextSection>
    //       </div>
    //     )}
    //   </div>
    // </Card>
  );
}
