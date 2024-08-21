class EventBus {
  events: Record<string, ((...props: any) => void)[]> = {}

  on(event: string, callback: (...props: any) => void) {
    if(!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(callback)
  }

  emit(event: string, props: any) {
    if(this.events[event]) {
      this.events[event].forEach(callback => callback(props))
    }
  }
}

const eventBus = new EventBus();

export default eventBus;