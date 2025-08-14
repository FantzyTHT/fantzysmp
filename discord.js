const embed = new EmbedBuilder();
embed.setTitle("FantzySMP");
embed.setURL("https://www.fantzysmp.xyz");
embed.setDescription("FantzySMP is a growing Minecraft server offering Survival, Creative, and more exciting modes coming soon.");
embed.setImage("https://www.fantzysmp.xyz/server_banner.png");
embed.setColor("#ffffff");

await message.reply({ embeds: [embed] });
