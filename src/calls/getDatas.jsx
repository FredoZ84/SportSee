import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../mock/data'
import fetchData from './fetchDatas'
import ActivityDatas from '../models/ActivityData'
import AverageSessionDatas from '../models/AverageSessionDatas'
import PerformanceDatas from '../models/PerformanceDatas'
import UserDatas from '../models/UserDatas'

async function getDatas(userId, mockedData) {
  let userDatas = {}
  let activityDatas = {}
  let averageSessionDatas = {}
  let performanceDatas = {}

  if (mockedData === null) {
    console.log('loading')
  } else if (mockedData) {
    //Recherche de l'utilisateur des données Mockées

    userId = Number(userId)

    const userSearch = USER_MAIN_DATA.filter((user) => user.id === userId)[0]
    const activitySearch = USER_ACTIVITY.filter(
      (activity) => activity.userId === userId,
    )[0]
    const averageSessionSearch = USER_AVERAGE_SESSIONS.filter(
      (averageSession) => averageSession.userId === userId,
    )[0]
    const performanceSearch = USER_PERFORMANCE.filter(
      (performance) => performance.userId === userId,
    )[0]

    userDatas = new UserDatas(userSearch).format()
    activityDatas = new ActivityDatas(activitySearch).format()
    averageSessionDatas = new AverageSessionDatas(averageSessionSearch).format()
    performanceDatas = new PerformanceDatas(performanceSearch).format()

    console.log('Mocked')
    console.log(userDatas, activityDatas, averageSessionDatas, performanceDatas)
  } else {
    const userFetch = await fetchData(`/user/${userId}`)
    const activityFetch = await fetchData(`/user/${userId}/activity`)
    const averageSessionFetch = await fetchData(
      `/user/${userId}/average-sessions`,
    )
    const performanceFetch = await fetchData(`/user/${userId}/performance`)

    userDatas = new UserDatas(userFetch.data).format()
    activityDatas = new ActivityDatas(activityFetch.data).format()
    averageSessionDatas = new AverageSessionDatas(averageSessionFetch.data).format()
    performanceDatas = new PerformanceDatas(performanceFetch.data).format()

    console.log('API')
  }

  return [userDatas, activityDatas, averageSessionDatas, performanceDatas]
}

export default getDatas
