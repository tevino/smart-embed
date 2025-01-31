window.addEventListener('message', init); // listen for init message
async function init(event) {
  if (event.data.type === 'init') {
    window.removeEventListener('message', init); // remove this event listener
    const model_config_key = event.data.model_config_key;
    const { SmartEmbedTransformersWebConnector } = await import('./SmartEmbedTransformersWebConnector.js');
    const model = await SmartEmbedTransformersWebConnector.create(model_config_key, window);
    window.model = model;
  }
}