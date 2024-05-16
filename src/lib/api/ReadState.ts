
type ReadStateCallback = (read:boolean) => void

/**
 * stateholder for whether an articles read status
 */
export class ReadState {
	private subscribers:Array<ReadStateCallback> = []
	private read:boolean
	constructor(read:boolean) {
		this.read = read ?? false
	}

	/**
	 * subscribe to any changes to the state of read
	 * @param callback function that is called when the read state changes
	 */
	public subscribe(callback:ReadStateCallback){
		this.subscribers.push(callback)
	}

	/**
	 * set the state of read to a value
	 * @param read
	 */
	public set(read:boolean):void {
		this.read = read;
		this.onChange()
	}

	/**
	 * get the value of read
	 */
	public get():boolean {
		return this.read
	}

	private onChange() {
		this.subscribers.forEach((cb) => {
		    cb(this.read)
		})
	}
}