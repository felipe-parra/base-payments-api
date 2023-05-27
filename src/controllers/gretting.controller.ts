import R from '../repositories/greetting.repository'

export default {
  Grettings,
  GrettingsByNames
}

function Grettings() {
  return R.GrettingsRepository()
}

function GrettingsByNames(name: String) {
  return R.GrettingsByNamesRepository(name)
}
