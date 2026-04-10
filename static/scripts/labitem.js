const main = document.querySelector('main');

function createLabItem(name, room, time, buttonId) {
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
    confBtn.setAttribute('id', buttonId);
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
    'Четверг - 14:30', 'labBtn1'
    ),
    createLabItem('Test2', 'А201', 'Пятница - 10:00', 'labBtn2'),
    createLabItem('Test3', 'Б105', 'Среда - 12:00', 'labBtn3'),
    createLabItem('Test4', 'В301', 'Понедельник - 08:30', 'labBtn4')
);