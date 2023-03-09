// 导出文件
export const exportFile = function (
  value,
  filename = '',
  blobType = 'application/vnd.ms-excel',
) {
  const blob = new Blob(value, {
    type: blobType,
  });
  const downloadUrl = (window.URL || window.webkitURL).createObjectURL(blob);
  const a = document.createElement('a');
  // msSaveOrOpenBlob method will only work for the IE browser.
  // The method that works for other browsers like Mozilla and Chrome will not work in the IE browser.
  if (window.navigator?.msSaveOrOpenBlob) {
    window.navigator?.msSaveOrOpenBlob(blob, filename);
    return;
  }
  a.download = filename;
  a.href = downloadUrl;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    // 需要revoke 之前浏览器缓存的url，避免内存泄漏
    window.URL.revokeObjectURL(downloadUrl);
  }, 500);
};