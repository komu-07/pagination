const displayButtons = (container, pages, activeIndex) => {
  let pageBtns = pages.map((_, index) => {
    return `<button class="page-btn ${
      activeIndex === index ? 'active-btn' : ''
    }" data-index= "${index}">${index + 1}</button>`;
  });
  pageBtns.push(`<button class="next-btn">next</button>`);
  pageBtns.unshift(`<button class="prev-btn">prev</button>`);

  container.innerHTML = pageBtns.join('');
};

export default displayButtons;
