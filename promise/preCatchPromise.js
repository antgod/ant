const nextTick = fn => setTimeout(fn, 0)

module.exports = class PreCatchPromise {
  constructor(callback) {
    this.STATUS = {
      PENDING: 0,
      RESOLVED: 1,
      REJECTED: 2,
    }
    this.status = this.STATUS.PENDING
    this.value = null
    this.defferd = []
    this.exception = () => {}
    nextTick(callback.bind(this, this.resolve.bind(this), this.reject.bind(this)))
  }

  resolve(result) {
    this.status = this.STATUS.RESOLVED
    this.value = result
    this.done()
  }

  reject(error) {
    this.status = this.STATUS.REJECTED
    this.value = error
  }

  then(success, fail) {
    const handler = {
      onresolved: success,
      onrejected: fail,
    }
    handler.promise = new PreCatchPromise(() => {})

    if (this.status === this.STATUS.PENDING) {
      this.defferd.push(handler)
    } else if (this.status === this.STATUS.RESOLVED || this.status === this.STATUS.REJECTED) {
      this.handle(handler)
    }
    return handler.promise
  }

  catch(exception) {
    this.exception = exception
    return this
  }

  done() {
    if (this.status === this.STATUS.PENDING) return
    this.defferd.reduce((last, next) => this.handle(next), {})
  }

  handle(fn) {
    if (fn === undefined) return

    const value = this.value
    const status = this.status
    let last
    if (status === this.STATUS.PENDING) {
      this.defferd.push(fn)
    } else {
      try {
        if (this.status === this.STATUS.RESOLVED && typeof fn.onresolved === 'function') {
          last = fn.onresolved(value)
          if (last !== undefined && typeof last.then !== 'function') {
            last = new PreCatchPromise(res => res(fn.onresolved(value)))
          }
        }
        if (this.status === this.STATUS.REJECTED && typeof fn.onrejected === 'function') {
          last = fn.onrejected(value)
        }
      } catch (e) {
        this.exception(e)
        throw new Error(e)
      }
      const promise = fn.promise
      if (promise) {
        if (last !== undefined && last.constructor === PreCatchPromise) {
          last.defferd = promise.defferd
        } else {
          last = this
          last.defferd = promise.defferd
          this.done()
        }
      }
    }
  }
}