// To make sure that the tests are working, it's important that we are using
// this implementation of ResizeObserver and DOMMatrixReadOnly
class ResizeObserver {
  callback: globalThis.ResizeObserverCallback;

  constructor(callback: globalThis.ResizeObserverCallback) {
    this.callback = callback;
  }

  observe(target: Element) {
    this.callback([{ target } as globalThis.ResizeObserverEntry], this);
  }

  unobserve() {
    // do nothing.
  }

  disconnect() {
    // do nothing.
  }
}

class DOMMatrixReadOnly {
  m22: number;
  constructor(transform: string) {
    const scale = /scale\(([1-9.])\)/.exec(transform)?.[1];
    this.m22 = scale !== undefined ? +scale : 1;
  }
}

// Only run the shim once when requested
let init = false;

export const mockReactFlow = () => {
  if (init) return;
  init = true;

  global.ResizeObserver = ResizeObserver;

  global.DOMMatrixReadOnly = DOMMatrixReadOnly as typeof global.DOMMatrixReadOnly;

  Object.defineProperties(global.HTMLElement.prototype, {
    offsetHeight: {
      get() {
        return parseFloat((this as { style: { height: string } }).style.height) || 1;
      },
    },
    offsetWidth: {
      get() {
        return parseFloat((this as { style: { width: string } }).style.width) || 1;
      },
    },
  });

  (global.SVGElement.prototype as SVGElement & { getBBox: () => void }).getBBox = () => ({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
};
