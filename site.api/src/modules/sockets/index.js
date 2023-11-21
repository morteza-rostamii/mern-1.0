import WebSocket, {WebSocketServer} from 'ws'

function main() {

  const PORT = 9876;
  const wss = new WebSocketServer({
    port: PORT,
  },
  () => {
    console.log(`sockets runs on ${9876}`);
  })

  // listen for a connection from client
  // runs only on connection 
  // gets ws : which is a socket for this connection
  wss.on('connection', (ws) => {
    console.log(`client has been connected: `);
    ws.send(`hello from server!!222`);

    // on message from client
    ws.on('message', (data) => {
      console.log(data.toString());
      ws.send(`i recived your message!! :)`);
    })
  })
  

}

main();

export default main