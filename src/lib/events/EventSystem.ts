export class EventSystem {
	private listeners:Array<Listener> = []

	/**
	 * subscribe a new event listener
	 * @param listener
	 */
	public subscribe(listener:Listener) : Listener {
		this.listeners.push(listener)
		return listener
	}

	/**
	 * unsub an event listener
	 * @param listener
	 */
	public unsubscribe(listener:Listener) : void {
		this.listeners = this.listeners.filter((l) => {
		    return l != listener
		})
	}

	/**
	 * notify all event listeners
	 */
	public notify():void {
		this.listeners.forEach((cb) => {
		    cb()
		})
	}
}

type Listener = () => void;