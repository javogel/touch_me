defmodule TouchMeWeb.PageController do
  use TouchMeWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
