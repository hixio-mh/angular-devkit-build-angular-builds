/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ExtraEntryPoint, ExtraEntryPointClass } from '../../../browser/schema';
import { SourceMapDevToolPlugin } from 'webpack';
import { ScriptTarget } from 'typescript';
export declare const ngAppResolve: (resolvePath: string) => string;
export interface HashFormat {
    chunk: string;
    extract: string;
    file: string;
    script: string;
}
export declare function getOutputHashFormat(option: string, length?: number): HashFormat;
export declare type NormalizedEntryPoint = ExtraEntryPointClass & {
    bundleName: string;
};
export declare function normalizeExtraEntryPoints(extraEntryPoints: ExtraEntryPoint[], defaultBundleName: string): NormalizedEntryPoint[];
export declare function getSourceMapDevTool(scriptsSourceMap: boolean, stylesSourceMap: boolean, hiddenSourceMap?: boolean, inlineSourceMap?: boolean): SourceMapDevToolPlugin;
/**
 * Returns an ES version file suffix to differentiate between various builds.
 */
export declare function getEsVersionForFileName(scriptTargetOverride: ScriptTarget | undefined, esVersionInFileName?: boolean): string;
export declare function isPolyfillsEntry(name: string): boolean;
