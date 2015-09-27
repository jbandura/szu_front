`import Defaults from "./stub-defaults"`

APIStub = Ember.Object.extend
  init: ->
    endpoints = @get("endpoints") || {}
    requestDefinitions = Em.merge(Ember.copy(Defaults), endpoints)
    @set "pretender", new Pretender ->
      for own key, val of requestDefinitions
        usePretenderFn.call(this, key, requestDefinitions)
    @get("pretender").prepareBody = (body) ->
      if body then JSON.stringify(body) else '{"error": "not found"}'

  shutdown: ->
    @get("pretender").shutdown()

usePretenderFn = (functionName, config) ->
  name = functionName.toString().split("!")
  callbackFn = constructPretenderCallback(config, functionName)
  switch name[0]
    when "get" then @get(name[1], callbackFn)
    when "post" then @post(name[1], callbackFn)
    when "put" then @put(name[1], callbackFn)
    when "delete" then @delete(name[1], callbackFn)

constructPretenderCallback = (config, keyName) ->
  (request) ->
    [ config[keyName]["status"] || 200,
      { "Content-Type": "application/json" },
      config[keyName]["payload"] ]

`export default APIStub`
