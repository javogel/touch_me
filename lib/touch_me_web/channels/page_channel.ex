defmodule TouchMeWeb.PageChannel do
  use  TouchMeWeb, :channel

  def join("page:canvas",_payload, socket) do
    {:ok, socket}
  end

  def handle_in("other_position", payload, socket) do
    IO.inspect(payload)
    broadcast_from!(socket, "other_position", payload)
    {:noreply, socket}
  end
end
