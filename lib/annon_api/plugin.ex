defmodule Annon.Plugin do
  @moduledoc """
  This helper provides abstract interface to define plugin.

  Example:

      use Annon.Plugin,
        plugin_name: "my_plugin"

  It will add
    * `init/1` settings required by Plug behavior, that will pass opts to `init/2` methods.
    * `find_plugin_settings/1` method that allows to find plugin settings and make sure that it's enabled.
  """
  alias Annon.Configuration.Schemas.Plugin, as: PluginSchema

  defmacro __using__(compile_time_opts) do
    quote bind_quoted: [compile_time_opts: compile_time_opts], location: :keep do
      require Logger
      import Annon.Plugin
      alias Annon.Configuration.Schemas.Plugin

      unless compile_time_opts[:plugin_name] do
        throw "You need to pass `:plugin_name` when using Annon.Plugin"
      end

      @plugin_name compile_time_opts[:plugin_name]

      # This is general function that we don't use since configs are resolved in run-time
      def init(opts), do: opts

      def find_plugin_settings(plugins) when is_list(plugins) do
        plugins
        |> Enum.find(&filter_plugin/1)
      end

      defp filter_plugin(%PluginSchema{name: plugin_name, is_enabled: true}) when plugin_name == @plugin_name, do: true
      defp filter_plugin(_), do: false
    end
  end

  @doc """
  Find plugin settings in `plugins` list. Returns `nil` if plugin is not found.
  """
  @callback find_plugin_settings([PluginSchema.t]) :: nil | PluginSchema.t

  def __plugins__ do
    %{
      "jwt" => Annon.Plugins.JWT,
      "validator" => Annon.Plugins.Validator,
      "acl" => Annon.Plugins.ACL,
      "proxy" => Annon.Plugins.Proxy,
      "idempotency" => Annon.Plugins.Idempotency,
      "ip_restriction" => Annon.Plugins.IPRestriction,
      "ua_restriction" => Annon.Plugins.UARestriction,
      "scopes" => Annon.Plugins.Scopes,
      "cors" => Annon.Plugins.CORS,
    }
  end

  def __plugin_names__ do
    Map.keys(__plugins__())
  end
end