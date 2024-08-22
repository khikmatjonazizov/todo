import { EventBusAction, EventBusEvents, EventBusPayloads } from 'contract/event-bus'
class EventBus {
  private events: Partial<{ [K in EventBusEvents]: EventBusAction<EventBusPayloads[K]>[] }> = {}

  on<K extends EventBusEvents>(event: K, callback: EventBusAction<EventBusPayloads[K]>) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(callback as EventBusAction<any>)
  }

  emit<K extends EventBusEvents>(event: K, props: EventBusPayloads[K]) {
    if (this.events[event]) {
      this.events[event]!.forEach(callback => callback(props))
    }
  }
}

const eventBus = new EventBus();

export default eventBus;