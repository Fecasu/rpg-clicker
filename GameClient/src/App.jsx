import { useState } from "react"
import "./App.css"
import hero from "./assets/hero.png"

function App(){

  const [monsterHP, setMonsterHP] = useState(100)
  const [gold, setGold] = useState(0)
  const [damage, setDamage] = useState(10)
  const [monsterLevel, setMonsterLevel] = useState(1)
  const [swordCost, setSwordCost] = useState(50)
  const [monsterMaxHP, setMonsterMaxHP] = useState(100)
  const [monsterCounter, setMonsterCounter] = useState(0)
  const [isBoss, setIsBoss] = useState(false)
  

  function attackMonster(){
    if (monsterHP > 0){
      setMonsterHP (monsterHP - damage)
      if (monsterHP - damage <= 0){
        if (isBoss){
          setGold(gold + 50 * monsterLevel)
        }
        else {
          setGold(gold + 10 * monsterLevel)
        }
        setMonsterLevel (monsterLevel + 1)
        setMonsterCounter (monsterCounter + 1)
        let newMonsterHP = 100 + monsterLevel * 20

        if ((monsterCounter + 1) % 5 === 0){
          newMonsterHP = newMonsterHP * 3
          setIsBoss(true)
        }
        else{
          setIsBoss(false)
        }

        
        setMonsterHP(newMonsterHP)
        setMonsterMaxHP(newMonsterHP)
      }
    }
  }

  function buySword(){
    if (gold >= swordCost){
      setGold (gold - swordCost)
      setDamage (damage + 10)
      setSwordCost(swordCost + 25)
    }
  }

  return (
    <div>
      <h1>Click RPG</h1>

      <p>Monster HP: {monsterHP}</p>
      <div className="hpBar">
        <div
         className="hpFill"
         style={{width: (monsterHP / monsterMaxHP) * 100 + "%"}}
         ></div>
      </div>
      <img src={hero}
       alt="Monster"
       onClick={attackMonster}
       className="monster" 
       />
      <p>Gold: {gold}</p>
      <p>Damage: {damage}</p>
      <p>Monster Level: {monsterLevel}</p>
      {isBoss && <p>🔥 BOSS 🔥</p>}
      
      <button onClick={buySword}>Buy Sword ({swordCost} Gold)</button>
      <p>Monster Counter: {monsterCounter} </p>
      
    </div>
  )
}

export default App