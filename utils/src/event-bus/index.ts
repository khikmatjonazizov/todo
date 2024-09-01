import type { EventBusCallback, EventBusEvents, EventBusPayloads } from './types'

class EventBus {
  private events: Partial<{[K in EventBusEvents]: EventBusCallback<EventBusPayloads[K]>[]}> = {};

  on<T extends EventBusEvents>(event: T, callback: EventBusCallback<EventBusPayloads[T]>) {
    if(!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(callback as EventBusCallback<any>);
  }

  emit<T extends EventBusEvents>(event: T, props: EventBusPayloads[T]) {
    this.events[event]?.forEach(callback => {
      callback(props)
    })
  }
}

export const eventBus = new EventBus();