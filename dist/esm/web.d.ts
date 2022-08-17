import { WebPlugin } from '@capacitor/core';
import type { FileSharerPlugin, ShareFileOptions } from "./definitions";
export declare class FileSharerPluginWeb extends WebPlugin implements FileSharerPlugin {
    share(options: ShareFileOptions): Promise<void>;
}
