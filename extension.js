const vscode = require('vscode');
const path = require('path');
const { exec } = require('child_process');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Antigravity Brand Kit Creator extension is now active!');

    let disposable = vscode.commands.registerCommand('brandKit.create', async function () {
        const brandName = await vscode.window.showInputBox({
            prompt: 'Enter Brand Name (e.g. PropTreel, AABHA)',
            placeHolder: 'PropTreel'
        });

        if (!brandName) return;

        const primaryColor = await vscode.window.showInputBox({
            prompt: 'Enter Primary Brand HEX Color',
            placeHolder: '#16A34A'
        }) || '#16A34A';

        const tagline = await vscode.window.showInputBox({
            prompt: 'Enter Brand Tagline',
            placeHolder: 'Realty. Through Real Reels. By Real People.'
        }) || 'Realty. Through Real Reels. By Real People.';

        const scriptPath = path.join(__dirname, 'skills', 'brand-kit-creator', 'scripts', 'build_brand_package.py');
        const workspaceFolders = vscode.workspace.workspaceFolders;
        const targetDir = workspaceFolders ? workspaceFolders[0].uri.fsPath : __dirname;

        vscode.window.showInformationMessage(`Generating Brand Kit for ${brandName}...`);

        const cmd = `python "${scriptPath}" --name "${brandName}" --primary "${primaryColor}" --tagline "${tagline}" --output "${path.join(targetDir, 'brand_package')}"`;

        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Brand Kit Generation Failed: ${error.message}`);
                return;
            }
            vscode.window.showInformationMessage(`🎉 Brand Package for ${brandName} successfully generated in ${targetDir}/brand_package!`);
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
