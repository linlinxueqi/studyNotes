class EvemtEmitter{
    constructor(){
        this._events = Object.create(null);
    }
    on(eventType, fn){
       if(!this._events[eventType]){
           this._events[eventType] = [];
       }
       this._events[eventType].push(fn);
       return this;
    }
    off(eventType, fn){
        if(!this._events[eventType]){
            return this;
        }
        if(!fn){
            this._events[eventType] = null;
            return this;
        }

        const index = this._events[eventType].findIndex(item => item === fn);
        this._events[eventType].splice(index, 1);
        return this;
    }
    once(eventType, fn){
        const only = () => {
            fn.apply(this, arguments);
            this.off(eventType, only);
        }
        this.on(eventType, only);
        return this;
    }
    trigger(eventType, ...args){
       if(!this._events[eventType]){
           return this;
       }
       const fns = this._events[eventType];
       fns.forEach(fn => {
           fn.call(this, ...args)
       });
       return this;
    }
}