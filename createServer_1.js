async function getUser() 
    try {
        const res = await axios.get('/user');
        const users = res.data;
        const list = document.getElementById('list');
        list.innerHTML = '';

        Object.keys(users).map(function (key) {
            const userDiv = document.createElement('div');
            const span = document.createElement('span');
            span.textContent = users[key];
            const edit = document.createElement('button');
            edit.textContent = '수정';
            edit.addEventListener('click', async () = > {
                const name = prompt('바꿀 이름을 입력하세요.');
                if (!name) {
                
            })
        })
    }