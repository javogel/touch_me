use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :touch_me, TouchMeWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :touch_me, TouchMe.Repo,
  username: "postgres",
  password: "postgres",
  database: "touch_me_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
