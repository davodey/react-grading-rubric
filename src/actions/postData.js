import axios from 'axios';

export function saveScore(data) {
    console.log('saved', data);
    axios({
        method: 'post',
        dataType: 'json',
        url: 'http://localhost:3000/0',
        data: data,
    });
}

