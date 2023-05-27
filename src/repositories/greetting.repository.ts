export default {
  GrettingsRepository,
  GrettingsByNamesRepository
}

function GrettingsRepository(): String {
  return 'It works!, from repository'
}

function GrettingsByNamesRepository(name: String): String {
  return `It works!, from repository, ${name}`
}
