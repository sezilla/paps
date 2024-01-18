let programs = [
  { name: "BS Computer Science", code: "BSCS" },
  { name: "BS Information Technology", code: "BSIT" },
  { name: "BS Information Systems", code: "BSIS" },
  { name: "BS Computer Engineering", code: "BSCpE" },
  { name: "BS Electronics Engineering", code: "BSECE" },
  { name: "BS Electrical Engineering", code: "BSEE" },
  { name: "BS Mechanical Engineering", code: "BSME" },
  { name: "BS Civil Engineering", code: "BSCE" },
  { name: "BS Industrial Engineering", code: "BSIE" },
  { name: "BS Chemical Engineering", code: "BSChE" },
  { name: "BS Architecture", code: "BSA" },
  { name: "BS Interior Design", code: "BSID" },
  { name: "BS Business Administration", code: "BSBA" },
  { name: "BS Accountancy", code: "BSA" },
  { name: "BS Entrepreneurship", code: "BSE" },
  { name: "BS Marketing Management", code: "BSMM" },
  { name: "BS Financial Management", code: "BSFM" },
  { name: "BS Tourism Management", code: "BSTM" },
  { name: "BS Hotel and Restaurant Management", code: "BSHRM" },
  { name: "BS Psychology", code: "BSP" },
  { name: "BS Biology", code: "BSB" },
  { name: "BS Mathematics", code: "BSM" },
  { name: "BS Chemistry", code: "BSC" },
  { name: "BS Physics", code: "BSP" },
  { name: "BS Nursing", code: "BSN" },
  { name: "BS Medical Technology", code: "BSMT" },
  { name: "BS Pharmacy", code: "BSP" },
  { name: "BS Physical Therapy", code: "BSPT" },
  { name: "BS Radiologic Technology", code: "BSRT" },
  { name: "BS Nutrition and Dietetics", code: "BSND" },
  { name: "BS Respiratory Therapy", code: "BSRT" },
];
/*
let yearSections = [
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

function setupDropdown(inputFieldId, dropdownId, data) {
  const inputField = document.querySelector(`#${inputFieldId}`);
  const dropdownEl = document.querySelector(`#${dropdownId}`);

  function onKeyupHandler(e) {
    let keyword = e.target.value;
    dropdownEl.classList.remove("hidden");
    let filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );

    renderOptions(filteredData);
  }

  function renderOptions(options) {
    let newHtml = "";

    options.forEach((option) => {
      newHtml += `<div
          onclick="selectOption('${option.name}', '${inputFieldId}')"
          class="px-5 py-3 border-b border-gray-200 text-stone-600 cursor-pointer hover:bg-slate-100 transition-colors"
        >
          ${option.name}
        </div>`;
    });

    dropdownEl.innerHTML = newHtml;
  }

  function selectOption(selectedOption, inputId) {
    hideDropdown();
    const input = document.querySelector(`#${inputId}`);
    input.value = selectedOption;
  }

  function hideDropdown() {
    dropdownEl.classList.add("hidden");
  }

  inputField.addEventListener("keyup", onKeyupHandler);
  document.addEventListener("click", (e) => {
    if (!dropdownEl.contains(e.target) && e.target !== inputField) {
      hideDropdown();
    }
  });

  renderOptions(data);
}

// Initialize Program Dropdown
setupDropdown("program", "dropdown", programs);

// Initialize Year and Section Dropdown
setupDropdown("yr_sec", "dropdown_yr_sec", yearSections);
*/

function onkeyUp(e) {
  let keyword = e.target.value;
  let dropdownEl = document.querySelector("#dropdown");
  dropdownEl.classList.remove("hidden");
  let filteredprograms = programs.filter((c) =>
    c.name.toLowerCase().includes(keyword.toLowerCase())
  );

  renderOptions(filteredprograms);
}

document.addEventListener("DOMContentLoaded", () => {
  renderOptions(programs);
});

function renderOptions(options) {
  let dropdownEl = document.querySelector("#dropdown");

  let newHtml = ``;

  options.forEach((program) => {
    newHtml += `<div
        onclick="selectOption('${program.name}')"
        class="px-5 py-3 border-b border-gray-200 text-stone-600 cursor-pointer hover:bg-slate-100 transition-colors"
      >
        ${program.name}
      </div>`;
  });

  dropdownEl.innerHTML = newHtml;
}

function selectOption(selectedOption) {
  hideDropdown();
  let input = document.querySelector("#program");
  input.value = selectedOption;
}

document.addEventListener("click", () => {
  hideDropdown();
});

function hideDropdown() {
  let dropdownEl = document.querySelector("#dropdown");
  dropdownEl.classList.add("hidden");
}

//year and section



