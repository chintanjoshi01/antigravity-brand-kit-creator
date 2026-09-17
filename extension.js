const vscode = require('vscode');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Antigravity Brand Kit Creator extension v1.2.0 is active!');

    // 1. Register Webview Provider for Left Sidebar Activity Bar
    const provider = new BrandKitWebviewProvider(context.extensionUri, context);
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider('brandKitView', provider)
    );

    // 2. Command Palette Fallback Command
    let disposable = vscode.commands.registerCommand('brandKit.create', async function () {
        vscode.commands.executeCommand('workbench.view.extension.brandKitContainer');
    });

    context.subscriptions.push(disposable);
}

class BrandKitWebviewProvider {
    constructor(extensionUri, context) {
        this._extensionUri = extensionUri;
        this._context = context;
    }

    resolveWebviewView(webviewView, context, _token) {
        this._view = webviewView;

        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this._extensionUri]
        };

        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

        webviewView.webview.onDidReceiveMessage(async (message) => {
            const data = message.data;
            const workspaceFolders = vscode.workspace.workspaceFolders;
            const targetDir = workspaceFolders ? workspaceFolders[0].uri.fsPath : __dirname;
            const scriptsDir = path.join(this._extensionUri.fsPath, 'skills', 'brand-kit-creator', 'scripts');

            if (message.command === 'generateBrandKit') {
                const buildScript = path.join(scriptsDir, 'build_brand_package.py');
                const cmd = `python "${buildScript}" --name "${data.name}" --primary "${data.primary}" --gold "${data.accent}" --tagline "${data.tagline}" --output "${path.join(targetDir, 'brand_package')}"`;

                this._postStatus('Generating Brand Package & 4K Board...');
                exec(cmd, (error, stdout, stderr) => {
                    if (error) {
                        this._postStatus(`Error: ${error.message}`);
                        vscode.window.showErrorMessage(`Brand Kit Generation Failed: ${error.message}`);
                    } else {
                        this._postStatus(`🎉 Success! Brand Package generated in ${targetDir}/brand_package`);
                        vscode.window.showInformationMessage(`🎉 Brand Package for ${data.name} generated successfully!`);
                    }
                });
            } else if (message.command === 'exportTokens') {
                const tokenScript = path.join(scriptsDir, 'export_theme_tokens.py');
                const cmd = `python "${tokenScript}" --name "${data.name}" --primary "${data.primary}" --accent "${data.accent}" --output "${path.join(targetDir, 'theme_export')}"`;

                this._postStatus('Exporting Theme Code Tokens...');
                exec(cmd, (error, stdout, stderr) => {
                    if (error) {
                        this._postStatus(`Error: ${error.message}`);
                    } else {
                        this._postStatus(`🎉 Success! Theme Tokens exported to ${targetDir}/theme_export`);
                        vscode.window.showInformationMessage(`🎉 Theme Code Tokens exported successfully!`);
                    }
                });
            } else if (message.command === 'injectNativeAssets') {
                const nativeScript = path.join(scriptsDir, 'inject_native_assets.py');
                const masterIcon = path.join(targetDir, 'brand_package', '04_Icons', 'proptreel_app_icon.png');
                const cmd = `python "${nativeScript}" --icon "${masterIcon}" --primary "${data.primary}" --output "${path.join(targetDir, 'native_assets')}"`;

                this._postStatus('Injecting Native App Icons & Splash Screen...');
                exec(cmd, (error, stdout, stderr) => {
                    if (error) {
                        this._postStatus(`Error: ${error.message}`);
                    } else {
                        this._postStatus(`🎉 Success! Native assets injected into ${targetDir}/native_assets`);
                        vscode.window.showInformationMessage(`🎉 Native Android, iOS, & Web assets generated successfully!`);
                    }
                });
            }
        });
    }

    _postStatus(text) {
        if (this._view) {
            this._view.webview.postMessage({ type: 'status', text: text });
        }
    }

    _getHtmlForWebview(webview) {
        const htmlPath = path.join(this._extensionUri.fsPath, 'views', 'sidebar.html');
        return fs.readFileSync(htmlPath, 'utf8');
    }
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
