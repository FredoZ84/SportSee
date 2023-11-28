import Biological from '../../components/Biological'
import Chart from '../../components/Chart'
import Performances from '../../components/Performances'
import AverageSessionDuration from '../../components/AverageSessionDuration'
import Score from '../../components/Score'

import iconCalories from '../../assets/icons/icon_calories.png'
import iconProteines from '../../assets/icons/icon_proteines.png'
import iconGlucides from '../../assets/icons/icon_glucides.svg'
import iconFat from '../../assets/icons/icon_fat.svg'

function template(user, activity, sessions, performance) {

  return (
    <main id="informations">
      <h1 className="title">
        Bonjour <span className="firstname">{user.userInfos.firstName}</span>
      </h1>
      <p className="message">
        Félicitation ! Vous avez explosé vos objectifs hier
        <span role="img" aria-label="type">
          👏
        </span>
      </p>

      <div id="data_area">
        <div className="left_part">
          <div className="daily_activities">
            <Chart activityDatas={activity.sessions} />
          </div>
          <div id="infos_squares">
            <AverageSessionDuration averageSessionDatas={sessions.sessions} />

            <Performances performanceDatas={performance} />

            <Score userDatas={user} />
          </div>
        </div>
        <div className="right_part">
          <ul id="biological_infos">
            <Biological
              name="calories"
              icon={iconCalories}
              definitionIcon="Icone de feu rouge représentant les Calories"
              quantity={user.keyData.calorieCount}
              type="kCal"
            />

            <Biological
              name="Proteines"
              icon={iconProteines}
              definitionIcon="Icone bleu représentant les Proteines"
              quantity={user.keyData.proteinCount}
              type="g"
            />

            <Biological
              name="Glucides"
              icon={iconGlucides}
              definitionIcon="Icone de pomme jaune représentant les Glucides"
              quantity={user.keyData.carbohydrateCount}
              type="g"
            />
            <Biological
              name="Lipides"
              icon={iconFat}
              definitionIcon="Icone d'hamburger gris représentant les Lipides"
              quantity={user.keyData.lipidCount}
              type="g"
            />
          </ul>
        </div>
      </div>
    </main>
  )
}

export default template
