/* eslint-disable object-curly-spacing */
import { Command, flags } from '@oclif/command'

class Mycli extends Command {
  static description = 'describe the command here'

  // Default to using flags over args whenever possible

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({
      char: 'n',
      description: 'name to print',
      default: 'mdnext-app',
    }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(Mycli)

    const name = flags.name ?? 'world'
    this.log(`building up ${name} from ./src/index.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}

export = Mycli
