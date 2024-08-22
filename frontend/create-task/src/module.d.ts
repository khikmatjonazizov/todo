import { EventBus } from 'contract/event-bus'

declare module 'host/event-bus' {
  const eventBus: EventBus;
  export default eventBus;
}