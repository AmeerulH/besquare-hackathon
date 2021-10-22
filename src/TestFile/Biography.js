import React from "react";
import {Container} from '@material-ui/core'
function App(){
  return (
    <div>
    <Container maxwidth="xs" style={{backgroundColor: "skyblue"}}>
      <h1>React Material UI| Layout | Container</h1>
    
    </Container>
    
    </div>
  )
}

const Biography = () => {
  return (
    <div className="Biography">
      <div className="charactersInfo">
        <div classname="heroInfo">
          <p className="heroName" id="heroName">
            Iron Man
          </p>
          <p className="FirstBio" id="FirstBio">
            COOL EXEC, HEART OF STEEL
          </p>
          <h1 className="FirstBioInfo" id="FirstBioInfo">
            Tony Stark is the wealthy son of industrialist and weapons
            manufacturer Howard Stark and his wife, Maria. Tony grew up a genius
            with a brilliant mind for technology and inventions and, naturally,
            followed in his father’s footsteps, inheriting Stark Industries upon
            his parents’ untimely death. Tony designed many weapons of war for
            Stark Industries, far beyond what any other company was creating,
            while living the lifestyle of a bon vivant. Fate would take a dark
            turn for Tony Stark once he decided to consult on a weapons contract
            overseas in enemy terrain. An improvised explosive device exploded
            underneath Tony’s transport, and he was brought to the brink of
            death. Awakening as a prisoner of the warlord Wong-Chu, Tony made a
            gruesome discovery: the explosion had sent a piece of shrapnel mere
            inches from his heart. It was only the timely intervention of fellow
            captive and engineer Yinsen that kept the shrapnel at bay.While held
            captive, and forced to work on weapons, Tony turned his near-death
            experience into inspiration. What if he could power an iron suit
            that would not only keep theshrapnel from killing Tony, but also
            help him to escape?
          </h1>

          <p className="SecBio" id="SecBio">
            IRON MAN
          </p>
          <h1 className="SecBioInfo" id="SecBioInfo">
            Since that first suit built in a cave, Tony has created dozens of
            new suits and upgrades over the years. However, throughout the
            50-plus Iron Man models, there are common offensive and defense
            capabilities found in most iterations. The primary weapon contained
            within every suit, the repulsor rays use energy pulses to repel and
            disrupt enemies and are generated through the suit’s gauntlets. The
            suit’s booster jets enable Stark to fly fast enough to break the
            sound barrier, and maneuver more quickly than any fighter jet. Iron
            Man’s helmet provides Tony with a heads-up display that gives him
            360-degree vision, access to information about his surroundings and
            enemies, and the ability to transmit and block transmissions along
            any frequency. The helmet also gives Tony a degree of resistance to
            EMP and psychic-based attacks. A weapon centered in Iron Man’s
            chest, the unibeam is capable of projecting dazzling light, and can
            also be used as a powerful force beam that is even more powerful
            than the repulsor ray. Each of Tony’s suits provides a full range of
            telecommunications, including the ability to jam and transmit on any
            frequency, and sophisticated artificial intelligence capable of
            piloting Tony to safety should he be rendered unconscious. Beyond
            his all-purpose suits, Tony has created specialized armor for
            specific scenarios. Some notable examples include the Hulkbuster
            armor (so-named as its size and strength allow Tony to stand
            toe-to-toe with the Hulk, when needed), along with deep-space,
            underwater and stealth suits. One thing common to most of Iron Man’s
            recent suits is the integration of Extremis, an attempt to re-create
            the super-soldier serum with many modifications. When using
            Extremis, Tony can interface with his brain’s repair center, which
            allows him to rebuild his body from scratch. Essentially, Tony is
            able to merge his mind, body, and armor in unprecedented ways. He
            can “armor up” in mere seconds—with armor stored within
            himself—gains split-second reaction times, and can even generate new
            internal organs to replace the old. Unfortunately, Extremis is also
            vulnerable to being hacked, and the Skrulls and other organizations
            have done just that.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Biography;
