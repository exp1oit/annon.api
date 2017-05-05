sidebarNodes={"extras":[{"id":"api-reference","title":"API Reference","group":"","headers":[{"id":"Modules","anchor":"modules"}]},{"id":"readme","title":"Annon","group":"","headers":[{"id":"Goals of the Project","anchor":"goals-of-the-project"},{"id":"General Features","anchor":"general-features"},{"id":"Installation","anchor":"installation"},{"id":"Documentation","anchor":"documentation"},{"id":"License","anchor":"license"}]}],"exceptions":[],"modules":[{"id":"Annon","title":"Annon","functions":[{"id":"start/2","anchor":"start/2"}]},{"id":"Annon.AcceptanceCase","title":"Annon.AcceptanceCase","functions":[{"id":"assert_status/2","anchor":"assert_status/2"},{"id":"build_factory_params/2","anchor":"build_factory_params/2"},{"id":"build_invalid_plugin/1","anchor":"build_invalid_plugin/1"},{"id":"build_jwt_signature/1","anchor":"build_jwt_signature/1"},{"id":"build_jwt_token/2","anchor":"build_jwt_token/2"},{"id":"get_body/1","anchor":"get_body/1"}]},{"id":"Annon.AutoClustering","title":"Annon.AutoClustering","functions":[{"id":"do_reload_config/0","anchor":"do_reload_config/0"},{"id":"reload_config/0","anchor":"reload_config/0"},{"id":"start_link/0","anchor":"start_link/0"}]},{"id":"Annon.Configuration.API","title":"Annon.Configuration.API","functions":[{"id":"create_api/2","anchor":"create_api/2"},{"id":"delete_api/1","anchor":"delete_api/1"},{"id":"dump_apis/0","anchor":"dump_apis/0"},{"id":"find_api/5","anchor":"find_api/5"},{"id":"get_api/1","anchor":"get_api/1"},{"id":"list_apis/2","anchor":"list_apis/2"},{"id":"request_changeset/2","anchor":"request_changeset/2"},{"id":"update_api/2","anchor":"update_api/2"}]},{"id":"Annon.Configuration.CacheAdapter","title":"Annon.Configuration.CacheAdapter","callbacks":[{"id":"config_change/1","anchor":"c:config_change/1"},{"id":"init/1","anchor":"c:init/1"},{"id":"match_request/6","anchor":"c:match_request/6"}]},{"id":"Annon.Configuration.CacheAdapters.Database","title":"Annon.Configuration.CacheAdapters.Database","functions":[{"id":"config_change/1","anchor":"config_change/1"},{"id":"init/1","anchor":"init/1"},{"id":"match_request/6","anchor":"match_request/6"}]},{"id":"Annon.Configuration.CacheAdapters.ETS","title":"Annon.Configuration.CacheAdapters.ETS","functions":[{"id":"config_change/1","anchor":"config_change/1"},{"id":"init/1","anchor":"init/1"},{"id":"match_request/6","anchor":"match_request/6"}]},{"id":"Annon.Configuration.Matcher","title":"Annon.Configuration.Matcher","functions":[{"id":"config_change/1","anchor":"config_change/1"},{"id":"init/1","anchor":"init/1"},{"id":"match_request/6","anchor":"match_request/6"},{"id":"start_link/2","anchor":"start_link/2"}]},{"id":"Annon.Configuration.Plugin","title":"Annon.Configuration.Plugin","functions":[{"id":"create_plugin/2","anchor":"create_plugin/2"},{"id":"delete_plugin/1","anchor":"delete_plugin/1"},{"id":"get_plugin/2","anchor":"get_plugin/2"},{"id":"list_plugins/1","anchor":"list_plugins/1"},{"id":"update_plugin/2","anchor":"update_plugin/2"}]},{"id":"Annon.Configuration.Repo","title":"Annon.Configuration.Repo","functions":[{"id":"aggregate/4","anchor":"aggregate/4"},{"id":"all/2","anchor":"all/2"},{"id":"config/0","anchor":"config/0"},{"id":"delete/2","anchor":"delete/2"},{"id":"delete!/2","anchor":"delete!/2"},{"id":"delete_all/2","anchor":"delete_all/2"},{"id":"get/3","anchor":"get/3"},{"id":"get!/3","anchor":"get!/3"},{"id":"get_by/3","anchor":"get_by/3"},{"id":"get_by!/3","anchor":"get_by!/3"},{"id":"in_transaction?/0","anchor":"in_transaction?/0"},{"id":"init/2","anchor":"init/2"},{"id":"insert/2","anchor":"insert/2"},{"id":"insert!/2","anchor":"insert!/2"},{"id":"insert_all/3","anchor":"insert_all/3"},{"id":"insert_or_update/2","anchor":"insert_or_update/2"},{"id":"insert_or_update!/2","anchor":"insert_or_update!/2"},{"id":"load/2","anchor":"load/2"},{"id":"one/2","anchor":"one/2"},{"id":"one!/2","anchor":"one!/2"},{"id":"page/3","anchor":"page/3"},{"id":"paginate/2","anchor":"paginate/2"},{"id":"preload/3","anchor":"preload/3"},{"id":"query/3","anchor":"query/3"},{"id":"query!/3","anchor":"query!/3"},{"id":"rollback/1","anchor":"rollback/1"},{"id":"start_link/1","anchor":"start_link/1"},{"id":"stop/2","anchor":"stop/2"},{"id":"stream/2","anchor":"stream/2"},{"id":"transaction/2","anchor":"transaction/2"},{"id":"update/2","anchor":"update/2"},{"id":"update!/2","anchor":"update!/2"},{"id":"update_all/3","anchor":"update_all/3"}]},{"id":"Annon.Configuration.Schemas.API","title":"Annon.Configuration.Schemas.API"},{"id":"Annon.Configuration.Schemas.API.Request","title":"Annon.Configuration.Schemas.API.Request"},{"id":"Annon.Configuration.Schemas.Plugin","title":"Annon.Configuration.Schemas.Plugin"},{"id":"Annon.ConfigurationFactory","title":"Annon.ConfigurationFactory","functions":[{"id":"acl_plugin_factory/0","anchor":"acl_plugin_factory/0"},{"id":"api_factory/0","anchor":"api_factory/0"},{"id":"api_request_factory/0","anchor":"api_request_factory/0"},{"id":"build/2","anchor":"build/2"},{"id":"build_list/3","anchor":"build_list/3"},{"id":"build_pair/2","anchor":"build_pair/2"},{"id":"cors_plugin_factory/0","anchor":"cors_plugin_factory/0"},{"id":"create/1","anchor":"create/1"},{"id":"create/2","anchor":"create/2"},{"id":"create_list/3","anchor":"create_list/3"},{"id":"create_pair/2","anchor":"create_pair/2"},{"id":"factory/1","anchor":"factory/1"},{"id":"fields_for/2","anchor":"fields_for/2"},{"id":"idempotency_plugin_factory/0","anchor":"idempotency_plugin_factory/0"},{"id":"insert/1","anchor":"insert/1"},{"id":"insert/2","anchor":"insert/2"},{"id":"insert_list/3","anchor":"insert_list/3"},{"id":"insert_pair/2","anchor":"insert_pair/2"},{"id":"ip_restriction_plugin_factory/0","anchor":"ip_restriction_plugin_factory/0"},{"id":"jwt_plugin_factory/0","anchor":"jwt_plugin_factory/0"},{"id":"params_for/2","anchor":"params_for/2"},{"id":"params_with_assocs/2","anchor":"params_with_assocs/2"},{"id":"proxy_plugin_factory/0","anchor":"proxy_plugin_factory/0"},{"id":"scopes_plugin_factory/0","anchor":"scopes_plugin_factory/0"},{"id":"string_params_for/2","anchor":"string_params_for/2"},{"id":"string_params_with_assocs/2","anchor":"string_params_with_assocs/2"},{"id":"ua_restriction_plugin_factory/0","anchor":"ua_restriction_plugin_factory/0"},{"id":"validator_plugin_factory/0","anchor":"validator_plugin_factory/0"}]},{"id":"Annon.ConnCase","title":"Annon.ConnCase","functions":[{"id":"assert_error_sent/2","anchor":"assert_error_sent/2"},{"id":"build_conn/0","anchor":"build_conn/0"},{"id":"build_conn/3","anchor":"build_conn/3"},{"id":"conn/0","anchor":"conn/0"},{"id":"conn/3","anchor":"conn/3"},{"id":"connect/3","anchor":"connect/3"},{"id":"delete/3","anchor":"delete/3"},{"id":"delete_req_cookie/2","anchor":"delete_req_cookie/2"},{"id":"dispatch/5","anchor":"dispatch/5"},{"id":"get/3","anchor":"get/3"},{"id":"head/3","anchor":"head/3"},{"id":"html_response/2","anchor":"html_response/2"},{"id":"json_response/3","anchor":"json_response/3"},{"id":"options/3","anchor":"options/3"},{"id":"patch/3","anchor":"patch/3"},{"id":"patch_json/3","anchor":"patch_json/3"},{"id":"post/3","anchor":"post/3"},{"id":"post_json/3","anchor":"post_json/3"},{"id":"put/3","anchor":"put/3"},{"id":"put_json/3","anchor":"put_json/3"},{"id":"put_req_cookie/3","anchor":"put_req_cookie/3"},{"id":"recycle/1","anchor":"recycle/1"},{"id":"redirected_to/2","anchor":"redirected_to/2"},{"id":"response/2","anchor":"response/2"},{"id":"response_content_type/2","anchor":"response_content_type/2"},{"id":"text_response/2","anchor":"text_response/2"},{"id":"trace/3","anchor":"trace/3"}]},{"id":"Annon.DataCase","title":"Annon.DataCase","functions":[{"id":"changeset_errors/1","anchor":"changeset_errors/1"}]},{"id":"Annon.Helpers.IP","title":"Annon.Helpers.IP","functions":[{"id":"ip_to_string/1","anchor":"ip_to_string/1"}]},{"id":"Annon.Helpers.JsonSchemaValidator","title":"Annon.Helpers.JsonSchemaValidator","functions":[{"id":"validate_with_json_schema/3","anchor":"validate_with_json_schema/3"}]},{"id":"Annon.Helpers.Latency","title":"Annon.Helpers.Latency","functions":[{"id":"get_time/0","anchor":"get_time/0"},{"id":"write_latency/3","anchor":"write_latency/3"}]},{"id":"Annon.Helpers.Pagination","title":"Annon.Helpers.Pagination","functions":[{"id":"extract_integer/3","anchor":"extract_integer/3"},{"id":"page_info/1","anchor":"page_info/1"},{"id":"page_info_from/1","anchor":"page_info_from/1"}]},{"id":"Annon.Helpers.Response","title":"Annon.Helpers.Response","functions":[{"id":"build_upstream_error/1","anchor":"build_upstream_error/1"},{"id":"halt/1","anchor":"halt/1"},{"id":"send/2","anchor":"send/2"},{"id":"send/3","anchor":"send/3"},{"id":"send_error/2","anchor":"send_error/2"},{"id":"send_error/3","anchor":"send_error/3"},{"id":"send_validation_error/2","anchor":"send_validation_error/2"}]},{"id":"Annon.ManagementAPI.ConfigReloaderPlug","title":"Annon.ManagementAPI.ConfigReloaderPlug","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Annon.ManagementAPI.Controllers.API","title":"Annon.ManagementAPI.Controllers.API","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Annon.ManagementAPI.Controllers.APIPlugin","title":"Annon.ManagementAPI.Controllers.APIPlugin","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Annon.ManagementAPI.Controllers.Request","title":"Annon.ManagementAPI.Controllers.Request","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Annon.ManagementAPI.ControllersRouter","title":"Annon.ManagementAPI.ControllersRouter"},{"id":"Annon.ManagementAPI.Render","title":"Annon.ManagementAPI.Render","functions":[{"id":"render_change/3","anchor":"render_change/3"},{"id":"render_collection/2","anchor":"render_collection/2"},{"id":"render_delete/1","anchor":"render_delete/1"},{"id":"render_delete/2","anchor":"render_delete/2"},{"id":"render_schema/2","anchor":"render_schema/2"}]},{"id":"Annon.ManagementAPI.Router","title":"Annon.ManagementAPI.Router","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Annon.PCMMockServer","title":"Annon.PCMMockServer","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Annon.PathHelpers","title":"Annon.PathHelpers","functions":[{"id":"api_path/1","anchor":"api_path/1"},{"id":"apis_path/0","anchor":"apis_path/0"},{"id":"plugin_path/2","anchor":"plugin_path/2"},{"id":"plugins_path/1","anchor":"plugins_path/1"},{"id":"request_path/1","anchor":"request_path/1"},{"id":"requests_path/0","anchor":"requests_path/0"}]},{"id":"Annon.Plugin","title":"Annon.Plugin","callbacks":[{"id":"find_plugin_settings/1","anchor":"c:find_plugin_settings/1"}]},{"id":"Annon.Plugins.ACL","title":"Annon.Plugins.ACL","functions":[{"id":"find_plugin_settings/1","anchor":"find_plugin_settings/1"},{"id":"init/1","anchor":"init/1"},{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.Plugins.ACL.SettingsValidator","title":"Annon.Plugins.ACL.SettingsValidator","functions":[{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.Plugins.APILoader","title":"Annon.Plugins.APILoader","functions":[{"id":"find_api/1","anchor":"find_api/1"},{"id":"find_plugin_settings/1","anchor":"find_plugin_settings/1"},{"id":"init/1","anchor":"init/1"}]},{"id":"Annon.Plugins.CORS","title":"Annon.Plugins.CORS","functions":[{"id":"call/2","anchor":"call/2"},{"id":"find_plugin_settings/1","anchor":"find_plugin_settings/1"},{"id":"init/1","anchor":"init/1"},{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.Plugins.ClientLatency","title":"Annon.Plugins.ClientLatency","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Annon.Plugins.IPRestriction","title":"Annon.Plugins.IPRestriction","functions":[{"id":"find_plugin_settings/1","anchor":"find_plugin_settings/1"},{"id":"init/1","anchor":"init/1"},{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.Plugins.IPRestriction.SettingsValidator","title":"Annon.Plugins.IPRestriction.SettingsValidator","functions":[{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.Plugins.Idempotency","title":"Annon.Plugins.Idempotency","functions":[{"id":"find_plugin_settings/1","anchor":"find_plugin_settings/1"},{"id":"init/1","anchor":"init/1"},{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.Plugins.JWT","title":"Annon.Plugins.JWT","functions":[{"id":"find_plugin_settings/1","anchor":"find_plugin_settings/1"},{"id":"init/1","anchor":"init/1"},{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.Plugins.JWT.SettingsValidator","title":"Annon.Plugins.JWT.SettingsValidator","functions":[{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.Plugins.Logger","title":"Annon.Plugins.Logger","functions":[{"id":"find_plugin_settings/1","anchor":"find_plugin_settings/1"},{"id":"init/1","anchor":"init/1"}]},{"id":"Annon.Plugins.Monitoring","title":"Annon.Plugins.Monitoring","functions":[{"id":"find_plugin_settings/1","anchor":"find_plugin_settings/1"},{"id":"init/1","anchor":"init/1"}]},{"id":"Annon.Plugins.Proxy","title":"Annon.Plugins.Proxy","functions":[{"id":"do_request/3","anchor":"do_request/3"},{"id":"find_plugin_settings/1","anchor":"find_plugin_settings/1"},{"id":"init/1","anchor":"init/1"},{"id":"log/2","anchor":"log/2"},{"id":"make_link/3","anchor":"make_link/3"},{"id":"put_additional_headers/2","anchor":"put_additional_headers/2"},{"id":"skip_filtered_headers/2","anchor":"skip_filtered_headers/2"},{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.Plugins.Proxy.MultipartForm","title":"Annon.Plugins.Proxy.MultipartForm","functions":[{"id":"reconstruct_using/1","anchor":"reconstruct_using/1"}]},{"id":"Annon.Plugins.Proxy.SettingsValidator","title":"Annon.Plugins.Proxy.SettingsValidator","functions":[{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.Plugins.Scopes","title":"Annon.Plugins.Scopes","functions":[{"id":"call/2","anchor":"call/2"},{"id":"find_plugin_settings/1","anchor":"find_plugin_settings/1"},{"id":"init/1","anchor":"init/1"},{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.Plugins.Scopes.JWTStrategy","title":"Annon.Plugins.Scopes.JWTStrategy","functions":[{"id":"get_scopes/1","anchor":"get_scopes/1"}]},{"id":"Annon.Plugins.Scopes.PCMStrategy","title":"Annon.Plugins.Scopes.PCMStrategy","functions":[{"id":"get_scopes/2","anchor":"get_scopes/2"}]},{"id":"Annon.Plugins.Scopes.SettingsValidator","title":"Annon.Plugins.Scopes.SettingsValidator","functions":[{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.Plugins.UARestriction","title":"Annon.Plugins.UARestriction","functions":[{"id":"find_plugin_settings/1","anchor":"find_plugin_settings/1"},{"id":"init/1","anchor":"init/1"},{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.Plugins.UARestriction.SettingsValidator","title":"Annon.Plugins.UARestriction.SettingsValidator","functions":[{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.Plugins.Validator","title":"Annon.Plugins.Validator","functions":[{"id":"find_plugin_settings/1","anchor":"find_plugin_settings/1"},{"id":"init/1","anchor":"init/1"},{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.Plugins.Validator.SettingsValidator","title":"Annon.Plugins.Validator.SettingsValidator","functions":[{"id":"validate_settings/1","anchor":"validate_settings/1"}]},{"id":"Annon.PrivateRouter","title":"Annon.PrivateRouter","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Annon.PublicRouter","title":"Annon.PublicRouter","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Annon.ReleaseTasks","title":"Annon.ReleaseTasks","functions":[{"id":"migrate!/0","anchor":"migrate!/0"},{"id":"priv_dir/1","anchor":"priv_dir/1"}]},{"id":"Annon.Requests.Log","title":"Annon.Requests.Log","functions":[{"id":"create_request/1","anchor":"create_request/1"},{"id":"delete_request/1","anchor":"delete_request/1"},{"id":"get_request/1","anchor":"get_request/1"},{"id":"get_request_by/1","anchor":"get_request_by/1"},{"id":"list_requests/2","anchor":"list_requests/2"}]},{"id":"Annon.Requests.Repo","title":"Annon.Requests.Repo","functions":[{"id":"aggregate/4","anchor":"aggregate/4"},{"id":"all/2","anchor":"all/2"},{"id":"config/0","anchor":"config/0"},{"id":"delete/2","anchor":"delete/2"},{"id":"delete!/2","anchor":"delete!/2"},{"id":"delete_all/2","anchor":"delete_all/2"},{"id":"get/3","anchor":"get/3"},{"id":"get!/3","anchor":"get!/3"},{"id":"get_by/3","anchor":"get_by/3"},{"id":"get_by!/3","anchor":"get_by!/3"},{"id":"in_transaction?/0","anchor":"in_transaction?/0"},{"id":"init/2","anchor":"init/2"},{"id":"insert/2","anchor":"insert/2"},{"id":"insert!/2","anchor":"insert!/2"},{"id":"insert_all/3","anchor":"insert_all/3"},{"id":"insert_or_update/2","anchor":"insert_or_update/2"},{"id":"insert_or_update!/2","anchor":"insert_or_update!/2"},{"id":"load/2","anchor":"load/2"},{"id":"one/2","anchor":"one/2"},{"id":"one!/2","anchor":"one!/2"},{"id":"page/3","anchor":"page/3"},{"id":"paginate/2","anchor":"paginate/2"},{"id":"preload/3","anchor":"preload/3"},{"id":"query/3","anchor":"query/3"},{"id":"query!/3","anchor":"query!/3"},{"id":"rollback/1","anchor":"rollback/1"},{"id":"start_link/1","anchor":"start_link/1"},{"id":"stop/2","anchor":"stop/2"},{"id":"stream/2","anchor":"stream/2"},{"id":"transaction/2","anchor":"transaction/2"},{"id":"update/2","anchor":"update/2"},{"id":"update!/2","anchor":"update!/2"},{"id":"update_all/3","anchor":"update_all/3"}]},{"id":"Annon.Requests.Request","title":"Annon.Requests.Request"},{"id":"Annon.Requests.Request.API","title":"Annon.Requests.Request.API"},{"id":"Annon.Requests.Request.API.Request","title":"Annon.Requests.Request.API.Request"},{"id":"Annon.Requests.Request.HTTPRequest","title":"Annon.Requests.Request.HTTPRequest"},{"id":"Annon.Requests.Request.HTTPResponse","title":"Annon.Requests.Request.HTTPResponse"},{"id":"Annon.Requests.Request.Latencies","title":"Annon.Requests.Request.Latencies"},{"id":"Annon.RequestsFactory","title":"Annon.RequestsFactory","functions":[{"id":"api_factory/0","anchor":"api_factory/0"},{"id":"api_request_factory/0","anchor":"api_request_factory/0"},{"id":"build/2","anchor":"build/2"},{"id":"build_list/3","anchor":"build_list/3"},{"id":"build_pair/2","anchor":"build_pair/2"},{"id":"create/1","anchor":"create/1"},{"id":"create/2","anchor":"create/2"},{"id":"create_list/3","anchor":"create_list/3"},{"id":"create_pair/2","anchor":"create_pair/2"},{"id":"factory/1","anchor":"factory/1"},{"id":"fields_for/2","anchor":"fields_for/2"},{"id":"http_request_factory/0","anchor":"http_request_factory/0"},{"id":"http_response_factory/0","anchor":"http_response_factory/0"},{"id":"insert/1","anchor":"insert/1"},{"id":"insert/2","anchor":"insert/2"},{"id":"insert_list/3","anchor":"insert_list/3"},{"id":"insert_pair/2","anchor":"insert_pair/2"},{"id":"latencies_factory/0","anchor":"latencies_factory/0"},{"id":"params_for/2","anchor":"params_for/2"},{"id":"params_with_assocs/2","anchor":"params_with_assocs/2"},{"id":"request_factory/0","anchor":"request_factory/0"},{"id":"string_params_for/2","anchor":"string_params_for/2"},{"id":"string_params_with_assocs/2","anchor":"string_params_with_assocs/2"}]},{"id":"Annon.UnitCase","title":"Annon.UnitCase","functions":[{"id":"assert_conn_status/2","anchor":"assert_conn_status/2"},{"id":"assert_halt/1","anchor":"assert_halt/1"},{"id":"assert_not_halt/1","anchor":"assert_not_halt/1"},{"id":"assert_response_body/2","anchor":"assert_response_body/2"},{"id":"assert_response_body/3","anchor":"assert_response_body/3"},{"id":"build_jwt_signature/1","anchor":"build_jwt_signature/1"},{"id":"call_delete/1","anchor":"call_delete/1"},{"id":"call_get/1","anchor":"call_get/1"},{"id":"call_post/2","anchor":"call_post/2"},{"id":"call_public_router/1","anchor":"call_public_router/1"},{"id":"call_put/2","anchor":"call_put/2"}]}],"protocols":[]}