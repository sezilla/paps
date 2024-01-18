let yearsection = [
    { name: "1-1", code: "1-1" },
    { name: "1-2", code: "1-2" },
    { name: "1-3", code: "1-3" },
    { name: "1-4", code: "1-4" },
    { name: "2-1", code: "2-1" },
    { name: "2-2", code: "2-2" },
    { name: "2-3", code: "2-3" },
    { name: "2-4", code: "2-4" },
    { name: "3-1", code: "3-1" },
    { name: "3-2", code: "3-2" },
    { name: "3-3", code: "3-3" },
    { name: "3-4", code: "3-4" },
    { name: "4-1", code: "4-1" },
    { name: "4-2", code: "4-2" },
    { name: "4-3", code: "4-3" },
    { name: "4-4", code: "4-4" },
  ];
  function handleKeyUp(e) {
    let keyword = e.target.value;
    let dropdownEm = document.querySelector("#dropdown_yr_sec");
    dropdownEm.classList.remove("hidden");
    let filteredyearsection = yearsection.filter((c) =>
      c.name.toLowerCase().includes(keyword.toLowerCase())
    );
  
    renderOptions(filteredyearsection);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderOptions(yearsection);
  });
  
  function renderOptions(options) {
    let dropdownEm = document.querySelector("#dropdown_yr_sec");
  
    let newHtml = ``;
  
    options.forEach((yr_sec) => {
      newHtml += `<div
        onclick="selectOption('${yr_sec.name}')"
        class="px-5 py-3 border-b border-gray-200 text-stone-600 cursor-pointer hover:bg-slate-100 transition-colors"
      >
        ${yr_sec.name}
      </div>`;
    });
  
    dropdownEm.innerHTML = newHtml;
  }
  
  function selectOption(selectedOption) {
    hideDropdown();
    let input = document.querySelector("#yr_sec");
    input.value = selectedOption;
  }
  
  document.addEventListener("click", () => {
    hideDropdown();
  });
  
  function hideDropdown() {
    let dropdownEm = document.querySelector("#dropdown_yr_sec");
    dropdownEm.classList.add("hidden");
  }