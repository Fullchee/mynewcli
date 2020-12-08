"use strict";
const command_1 = require("@oclif/command");
class Mynewcli extends command_1.Command {
    async run() {
        var _a;
        const { args, flags } = this.parse(Mynewcli);
        const name = (_a = flags.name) !== null && _a !== void 0 ? _a : 'world';
        this.log(`hello ${name} from ./src/index.ts`);
        if (args.file && flags.force) {
            this.log(`you input --force and --file: ${args.file}`);
        }
    }
}
Mynewcli.description = 'describe the command here';
Mynewcli.flags = {
    // add --version flag to show CLI version
    version: command_1.flags.version({ char: 'v' }),
    help: command_1.flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: command_1.flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: command_1.flags.boolean({ char: 'f' }),
};
Mynewcli.args = [{ name: 'file' }];
module.exports = Mynewcli;
