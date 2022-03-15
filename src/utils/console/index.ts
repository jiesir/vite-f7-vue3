import Vconsole from 'vconsole';

export function setupConsole() {
    if ((window as any).App.device.env !== 'prod') {
        new Vconsole()
    }
}