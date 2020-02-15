import Config

# In this file, we keep production configuration that
# you'll likely want to automate and keep away from
# your version control system.
#
# You should document the content of this
# file or create a script for recreating it, since it's
# kept out of version control and might be hard to recover
# or recreate for your teammates (or yourself later on).
secret_key_base = System.get_env("SECRET_KEY_BASE")

database_username = System.get_env("DATABASE_USERNAME")
database_password = System.get_env("DATABASE_PASSWORD")
database_name = System.get_env("DATABASE_NAME")
app_hostname = System.get_env("APP_HOSTNAME")
app_port = System.get_env("APP_PORT")
db_hostname = System.get_env("DB_HOSTNAME")

config :touch_me, TouchMeWeb.Endpoint, server: true,
  secret_key_base: secret_key_base

config :touch_me,
  app_hostname: app_hostname

config :touch_me,
  app_port: app_port

# Configure your database
config :touch_me, TouchMe.Repo,
  username: database_username,
  password: database_password,
  database: database_name,
  hostname: db_hostname,
  pool_size: 15,
  show_sensitive_data_on_connection_error: true
