// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
function isWindows() {
    return navigator.appVersion.includes("Win");
}
/**
 * The operating system-specific end-of-line marker.
 * - `\n` on POSIX
 * - `\r\n` on Windows
 *
 * @since 1.0.0
 * */
const EOL = isWindows() ? "\r\n" : "\n";
/**
 * Returns a string identifying the operating system platform.
 * The value is set at compile time. Possible values are `'linux'`, `'darwin'`, `'ios'`, `'freebsd'`, `'dragonfly'`, `'netbsd'`, `'openbsd'`, `'solaris'`, `'android'`, `'win32'`
 * @example
 * ```typescript
 * import { platform } from '@tauri-apps/plugin-os';
 * const platformName = await platform();
 * ```
 *
 * @since 1.0.0
 *
 */
async function platform() {
    return window.__TAURI_INVOKE__("plugin:os|platform");
}
/**
 * Returns a string identifying the kernel version.
 * @example
 * ```typescript
 * import { version } from '@tauri-apps/plugin-os';
 * const osVersion = await version();
 * ```
 *
 * @since 1.0.0
 */
async function version() {
    return window.__TAURI_INVOKE__("plugin:os|version");
}
/**
 * Returns `'Linux'` on Linux, `'Darwin'` on macOS, and `'Windows_NT'` on Windows.
 * @example
 * ```typescript
 * import { type } from '@tauri-apps/plugin-os';
 * const osType = await type();
 * ```
 *
 * @since 1.0.0
 */
async function type() {
    return window.__TAURI_INVOKE__("plugin:os|kind");
}
/**
 * Returns the operating system CPU architecture for which the tauri app was compiled.
 * Possible values are `'x86'`, `'x86_64'`, `'arm'`, `'aarch64'`, `'mips'`, `'mips64'`, `'powerpc'`, `'powerpc64'`, `'riscv64'`, `'s390x'`, `'sparc64'`.
 * @example
 * ```typescript
 * import { arch } from '@tauri-apps/plugin-os';
 * const archName = await arch();
 * ```
 *
 * @since 1.0.0
 */
async function arch() {
    return window.__TAURI_INVOKE__("plugin:os|arch");
}
/**
 * Returns the operating system's default directory for temporary files as a string.
 * @example
 * ```typescript
 * import { tempdir } from '@tauri-apps/plugin-os';
 * const tempdirPath = await tempdir();
 * ```
 *
 * @since 1.0.0
 */
async function tempdir() {
    return window.__TAURI_INVOKE__("plugin:os|tempdir");
}

export { EOL, arch, platform, tempdir, type, version };
//# sourceMappingURL=index.mjs.map
