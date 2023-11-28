class AverageSessionDatas {
  constructor(averageSessionDatas) {
    this.averageSessionDatas = averageSessionDatas
  }

  format() {
    const { sessions } = this.averageSessionDatas
    return { sessions }
  }
}

export default AverageSessionDatas
