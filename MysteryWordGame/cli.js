//help menu
const
	yargs = require('yargs'),
	app = require('./app')

const flags = yargs.usage('$0: Usage node cli.js')
	.options('h', {
		alias: 'help',
		describe: 'displays help'
	})
	.options('d', {
		alias: 'difficulty',
		describe: 'run game',
		array:true
	})
	.argv

if(flags.help)
	yargs.showHelp()
if(flags.difficulty)
	app.run(flags)
