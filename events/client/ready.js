client.on('ready', () => {
    console.log(`${client.user.username} is online!`)
    // Creates a Erela client with the Discord.js client and nodes.
    client.music = new ErelaClient(client, nodes);
    // Listens to events.
    client.music.on("nodeConnect", node => console.log("New node connected"));
    client.music.on("nodeError", (node, error) => console.log(`Node error: ${error.message}`));
    client.music.on("trackStart", (player, track) => player.textChannel.send(`Now playing: ${track.title}`));
    client.music.on("queueEnd", player => {
        player.textChannel.send("Queue has ended.")
        client.music.players.destroy(player.guild.id);
    });
});