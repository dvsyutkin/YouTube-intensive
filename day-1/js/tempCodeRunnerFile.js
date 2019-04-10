function sliceTitle() {
  document.querySelectorAll('.videos__item-descr').forEach(item => {
    console.log(item.textContent.trim());

    if (item.textContent.length < 10){
      return;
    } else {
      const str = item.textContent.slice(0, 10);
      item.textContent = str;
    }
  });
}