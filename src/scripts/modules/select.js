export default function select() {
  const select = document.querySelector('.select');
  const input = document.getElementById('system');
  const list = select.querySelector('.select__list');
  const options = list.querySelectorAll('.select__option');
  const OptionsArray = [...options];

  let state = 'initial';

  select.addEventListener('click', function (e) {
    const current = document.activeElement;
    switch (state) {
      case 'initial':
        toggleList('Open');
        state = 'opened';
        break;
      case 'opened':
        if (current === input) {
          toggleList('Shut');
          state = 'initial';
        } else if (current.tagName === 'LI') {
          input.value = current.textContent;
          moveFocus(current, 'input');
          toggleList('Shut');
          state = 'closed';
        }
        break;
      case 'filtered':
        if (current.tagName === 'LI') {
          input.value = current.textContent;
          moveFocus(current, 'input');
          toggleList('Shut');
          state = 'closed';
        }
        break;
      case 'closed':
        toggleList('Open');
        state = 'filtered';
        break;
    }
  });

  select.addEventListener('keyup', function (e) {
    const current = document.activeElement;
    switch (e.key) {
      case 'Enter':
        if (state === 'initial') {
          input.style = 'background-color: #3D4050; border-color: #3D4050; color: #FFFFFF';
          toggleList('Open');
          state = 'opened';
        } else if (state === 'opened' && current.tagName === 'LI') {
          input.value = current.textContent;
          moveFocus(current, 'input');
          toggleList('Shut');
          state = 'closed';
        } else if (state === 'opened' && current === input) {
          toggleList('Shut');
          state = 'closed';
        } else if (state === 'filtered' && current.tagName === 'LI') {
          input.value = current.textContent;
          moveFocus(current, 'input');
          toggleList('Shut');
          state = 'closed';
        } else if (state === 'filtered' && current === input) {
          toggleList('Open');
          state = 'opened';
        } else {
          toggleList('Open');
          state = 'filtered';
        }
        break;

      case 'Escape':
        if (state === 'opened' || state === 'filtered') {
          toggleList('Shut');
          state = 'initial';
        }
        break;

      case 'ArrowDown':
        if (state === 'initial' || state === 'closed') {
          toggleList('Open');
          moveFocus(input, 'forward');
          state = 'opened';
        } else {
          input.style = 'background-color: #3D4050; border-color: #3D4050';
          toggleList('Open');
          moveFocus(current, 'forward');
        }
        break;

      case 'ArrowUp':
        input.style = 'background-color: #3D4050; border-color: #3D4050; color: #FFFFFF';
        if (state === 'initial' || state === 'closed') {
          toggleList('Open');
          moveFocus(input, 'back');
          state = 'opened';
        } else {
          moveFocus(current, 'back');
        }
        break;

      default:
        if (state === 'initial') {
          toggleList('Open');
          filterOptions();
          state = 'filtered';
        } else if (state === 'opened' || state === 'closed') {
          filterOptions();
          state = 'filtered';
        } else {
          filterOptions();
        }
        break;
    }
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.select')) {
      toggleList('Shut');
      state = 'initial';
    }
  });

  function toggleList(whichWay) {
    if (whichWay === 'Open') {
      list.classList.remove('select__list--hidden');
      select.setAttribute('aria-expanded', 'true');
    } else {
      list.classList.add('select__list--hidden');
      select.setAttribute('aria-expanded', 'false');
    }
  }

  function moveFocus(from, to) {
    const filteredOptions = OptionsArray.filter(function (option) {
      if (option.style.display === '') {
        return true;
      }
    });
    if (filteredOptions.length === 0) {
      return;
    }
    if (to === 'input') {
      input.focus();
    }
    switch (from) {
      case input:
        if (to === 'forward') {
          filteredOptions[0].focus();
        } else if (to === 'back') {
          filteredOptions[filteredOptions.length - 1].focus();
        }
        break;
      case options[0]:
        if (to === 'forward') {
          filteredOptions[1].focus();
        } else if (to === 'back') {
          input.focus();
        }
        break;
      case options[options.length - 1]:
        if (to === 'forward') {
          filteredOptions[0].focus();
        } else if (to === 'back') {
          filteredOptions[filteredOptions.length - 2].focus();
        }
        break;
      default:
        const currentEl = filteredOptions.indexOf(document.activeElement);
        if (to === 'forward') {
          filteredOptions[currentEl + 1].focus();
        } else if (to === 'back' && whichOne > 0) {
          filteredOptions[currentEl - 1].focus();
        } else {
          input.focus();
        }
        break;
    }
  }

  function filterOptions() {
    const filteredOptions = OptionsArray.filter(function (option) {
      if (option.textContent.toUpperCase().startsWith(input.value.toUpperCase())) {
        return true;
      }
    });
    options.forEach((option) => (option.style.display = 'none'));
    filteredOptions.forEach(function (option) {
      option.style.display = '';
    });
    state = 'filtered';
  }
}
