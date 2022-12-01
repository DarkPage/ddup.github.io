window.addEventListener('beforeinstallprompt', (event) => {
  // 防止迷你信息栏出现在移动设备上。
  event.preventDefault();
  console.log('👍', 'beforeinstallprompt', event);
  // 隐藏事件，以便以后再触发。
  window.deferredPrompt = event;
  // 从安装按钮容器中删除 'hidden' 类。
  divInstall.classList.toggle('hidden', false);
});

setTimeout(() => {
  /* Only register a service worker if it's supported */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => console.log('Worker registered'))
      .catch((ex) => console.error('Worker registration error', ex));
  }

  const butInstall = document.getElementById('butInstall');
  butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    console.log('👍', 'butInstall-clicked', promptEvent);
    if (!promptEvent) {
      // 延迟提示不存在。
      return;
    }
    // 显示安装提示。
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    // 重置延迟提示变量，因为
    // prompt() 只能调用一次。
    window.deferredPrompt = null;
    // 隐藏安装按钮。
    divInstall.classList.toggle('hidden', true);
  });
}, 1000);