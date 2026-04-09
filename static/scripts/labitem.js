const main = document.querySelector('main');

function createLabItem(name, room, time) {
    const labItemBg = document.createElement('div');
    const aboutLab = document.createElement('div');
    const labName = document.createElement('h3');
    const labTime = document.createElement('p');
    const labRoom = document.createElement('p');
    const confBtn = document.createElement('button');
    const confBtnTxt = document.createElement('p');

    labItemBg.className = 'lab-item';
    aboutLab.className = 'about-lab';
    labName.className = 'lab-name';
    labRoom.className = 'lab-room';
    labTime.className = 'lab-time';
    confBtn.className = 'conf-btn';
    confBtnTxt.className = 'conf-btn-text';

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