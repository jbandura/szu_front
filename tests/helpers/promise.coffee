`import Ember from 'ember'`

resolve = (deferred, value, callback)->
  stop()
  deferred.resolve(value)
  deferred.promise.then ->
    Ember.run.next ->
      callback?()
      start()

reject = (deferred, reason, callback)->
  stop()
  deferred.reject(reason)
  deferred.promise.catch ->
    Ember.run.next ->
      callback?()
      start()

`export { resolve, reject }`
