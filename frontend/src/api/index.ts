const socket = new WebSocket('ws://localhost:8080/ws');

let connection = (cb : Function) => {
    console.log('conectando');

    socket.onopen = () => {
        console.log('conectado');
    };

    socket.onmessage = (msg) => {
        console.log('Message websocket: '+ msg);
    };
    
    socket.onclose = (event) => {
        console.log('Fechando socket: '+ event);
    };

    socket.onerror = (event) => {
        console.log('socket error: '+ event);
    };
};

let sendMessage = (msg : string) => {
    console.log('mandando mensagem'+msg);
    socket.send(msg);
};

export {connection,sendMessage}