import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time

print("Launching")


Client = discord.Client() #Initialise Client 
client = commands.Bot(command_prefix = "?") #Initialise client bot

prefix = "!"

@client.event 
async def on_ready():
    print("Bot is online and connected to Discord") #This will be called when the bot connects to the server

@client.event
async def on_message(message):
    split = str(message.content).split(" ", 1)
    if split[0] == prefix + "poll":
        if split[1] is not None:
            botmessage = await client.send_message(message.channel, str(message.author) + " has started a new poll! 📰" + "```\n" + split[1] + "\nPut your vote below```")
            await client.delete_message(message)
            print(str(message.author) + " used the command " + str(message.content))
            await client.add_reaction(botmessage, '✅')
            await client.add_reaction(botmessage, '❌')
        else:
            await client.send_message("Add a message to your poll")


client.run("NDU1MDY2MTI2NjkxNDY3Mjg1.Df2lSw.teDL39cuz0tQkEPECi3r1dk-XPk") #Replace token with your bots token
