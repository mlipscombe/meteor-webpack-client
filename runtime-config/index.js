(function() {
  // in non strict mode, 'this' has global scope
  this.__meteor_runtime_config__ = this.__meteor_runtime_config__ || 
    {
      meteorEnv: {},
      DDP_DEFAULT_CONNECTION_URL: 'http://localhost:3000',
      PUBLIC_SETTINGS: { __global_scope__: true }
    }

  // in non strict mode, 'this' has global scope
  if (window !== undefined && window.globals === undefined) {
    window.globals = this;
  }
})();
