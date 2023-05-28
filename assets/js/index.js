const file = document.querySelector('#passport-file');
document.querySelector('.passport-file-name').textContent = 'No Selected'
file.addEventListener('change', (e) => {
  // Get the selected file
  const [file] = e.target.files;
  // Get the file name and size
  const { name: fileName, size } = file;
  // Convert size in bytes to kilo bytes
  const fileSize = (size / 1000).toFixed(2);
  // Set the text content
  //   const fileNameAndSize = `${fileName} - ${fileSize}KB`;
  const fileNameAndSize = `${fileName} - ${fileSize}KB`;
  document.querySelector('.passport-file-name').textContent = fileNameAndSize;
});

const file1 = document.querySelector('#visa-file');
document.querySelector('#visa-file-name').textContent = 'No Selected'
file1.addEventListener('change', (e) => {
  // Get the selected file
  const [file] = e.target.files;
  // Get the file name and size
  const { name: fileName, size } = file;
  // Convert size in bytes to kilo bytes
  const fileSize = (size / 1000).toFixed(2);
  // Set the text content
  //   const fileNameAndSize = `${fileName} - ${fileSize}KB`;
  const fileNameAndSize = `${fileName} - ${fileSize}KB`;
  document.querySelector('#visa-file-name').textContent = fileNameAndSize;
});

/***************************************************/