defmodule TouchMe.Repo do
  use Ecto.Repo,
    otp_app: :touch_me,
    adapter: Ecto.Adapters.Postgres
end
