module.exports = {
  "development": {
    use_env_variable: "DATABASE_URL",
    ssl: true
  },
  "test": {
    use_env_variable: "DATABASE_URL",
    ssl: true
  },
  "production": {
    use_env_variable: "DATABASE_URL",
    ssl: true
  }
};
