// Minimal browser shim for node:async_hooks.AsyncLocalStorage
// Provides a no-op implementation that stores context in a WeakMap keyed by execution objects.
// This is intentionally minimal and only implements the API surface used by client packages.

class AsyncLocalStorageShim {
  constructor() {
    // Use a Map keyed by a symbol representing the current "execution context".
    this._store = new Map();
    this._currentKey = null;
  }

  run(store, callback, ...args) {
    const key = Symbol();
    this._store.set(key, store);
    const prev = this._currentKey;
    this._currentKey = key;
    try {
      return callback(...args);
    } finally {
      this._currentKey = prev;
      this._store.delete(key);
    }
  }

  getStore() {
    if (this._currentKey && this._store.has(this._currentKey)) return this._store.get(this._currentKey);
    return undefined;
  }

  enterWith(store) {
    const key = Symbol();
    this._store.set(key, store);
    this._currentKey = key;
  }
}

export { AsyncLocalStorageShim as AsyncLocalStorage };
export default { AsyncLocalStorage: AsyncLocalStorageShim };
