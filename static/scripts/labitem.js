const main = document.querySelector('main');

function createLabItem(name, room, time) {
    const labItemBg = document.createElement('div');
    const aboutLab = document.createElement('div');
    const labName = document.createElement('h3');
    const labTime = document.createElement('p');
    const labRoom = document.createElement('p');
    const confBtn = document.createElement('button');
    const confBtnTxt = document.createElement('p');

    labItemBg.classList.add(
        'bg-base-medium-darkTheme',
        'w-full',
        'h-10',
        'rounded-2',
        'flex',
        'items-center',
        'mb-2',
        'justify-between'
    );

    aboutLab.classList.add(
        'flex',
        'flex-col',
        'items-start',
        'w-14',
        'ml-[15px]'
    );

    labName.classList.add('font-medium', 'text-white', 'text-[12px]');
    labRoom.classList.add('font-light', 'text-white', 'text-[8px]', 'mt-[4px]');
    labTime.classList.add('font-light', 'text-white', 'text-[8px]', 'mt-[2px]');
    confBtn.classList.add('w-13', 'h-3', 'bg-primary-darkTheme', 'rounded-1', 'mr-[13px]', 'cursor-pointer', 'hover:bg-secondary-darkTheme', 'active:bg-[#00D390]', 'transition-color', 'duration-200');
    confBtnTxt.classList.add('text-white', 'text-[12px]');

    labName.textContent = name;
    labRoom.textContent = room;
    labTime.textContent = time;
    confBtnTxt.textContent = 'Встать в очередь';

    confBtn.appendChild(confBtnTxt)
    aboutLab.append(labName, labRoom, labTime);
    labItemBg.appendChild(aboutLab);
    labItemBg.appendChild(confBtn);

    return labItemBg;
}


main.append(
    createLabItem(
    'Основы серверной веб-разработки п/г-1',
    'Пр2802',
    'Четверг - 14:30'
    ),
    createLabItem('Test', 'А201', 'Пятница - 10:00'),
    createLabItem('Test', 'Б105', 'Среда - 12:00'),
    createLabItem('Test', 'В301', 'Понедельник - 08:30')
);