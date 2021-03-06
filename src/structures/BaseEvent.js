const CustomClient = require('./CustomClient')
class BaseEvent {
  /**
   * @description - Base Event for CustomClient
   * @param {CustomClient} client - Your Custom Client
   * @param {String} name - Event name
   */
  constructor (client, name) {
    if (!(client instanceof CustomClient)) throw new Error('supplied constructor `client` is must be instance of BaseClient')
    this.client = client
    if (typeof name !== 'string') throw new Error('supplied constructor `name` is must be String')
    this.name = name
    if (typeof listener !== 'function') throw new Error('supplied constructor `name` is must be Function')
  }

  /**
   * @description - Function on this event emitted
   * @returns {Promise<*>} - Returns Any Values (includes void)
   */
  async run () {

  }
}

module.exports = BaseEvent
