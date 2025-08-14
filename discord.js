const embed = new EmbedBuilder()
  .setTitle("FantzySMP")
  .setURL("https://www.fantzysmp.xyz")
  .setDescription("FantzySMP is a growing Minecraft server offering Survival, Creative, and more exciting modes coming soon.")
  .setImage("https://www.fantzysmp.xyz/server_banner.png")
  .setColor("#ffffff");

await message.reply({ embeds: [embed] });
