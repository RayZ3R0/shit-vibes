const simplydjs = require("simply-djs");
const client = require('../index')

client.on("messageCreate", async (message) => {
  simplydjs.bumpSystem(client, message, {
  channelId: ["990584443087519748"],
  auto: false
})
});