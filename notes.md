

## installing dev. version of the extension

- build a vsix file using `vsce`

- right-click on vsix file -> install

- also, [turn off extension auto-update](https://code.visualstudio.com/api/advanced-topics/remote-extensions#installing-a-development-version-of-your-extension) to prevent vscode from updating it to the latest published version (wait, can't vscode figure that out by itself?)

    If this is a published extension, you may want to add "extensions.autoUpdate": false to settings.json to prevent it from auto-updating to the latest Marketplace version.

## building vsix

- `compile` command

- 'package` command

    see also: vsce needs yarn 1

    - https://github.com/microsoft/vscode-vsce/issues/750

    - https://github.com/microsoft/vscode-vsce/issues/517

    - https://github.com/microsoft/vscode-vsce/pull/757

    there's a [plugin for yarn 2](https://github.com/arendjr/yarn-plugin-list) but it's buggy (can't handle dependency tree of vscode-coverage-gutters extension):

    - not capable of running in a workspace of a monorepo (always looks for package.json and yarn.lock in the same (current) directory) - easily fixable

    - produces output with package name/version strings containing ^ and ~, making vsce bundler to ["prune" those dependencies](https://github.com/microsoft/vscode-vsce/blob/main/src/npm.ts#L85)

    - produces incorrect output for 3-level dependencies (3-rd level dependencies are not listed as children of 2-nd level dependency)



