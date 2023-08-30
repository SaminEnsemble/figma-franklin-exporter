figma.showUI(__html__);

figma.ui.onmessage = (msg: MessageEvent) => {
  if (msg.type === 'export-default') {
  }

  if (msg.type === 'export-block') {
  }

  figma.closePlugin();
};
