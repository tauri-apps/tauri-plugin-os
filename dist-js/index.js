import { invoke } from '@tauri-apps/api/core';

// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
/**
 * Provides operating system-related utility methods and properties.
 *
 * @module
 */
/**
 * Returns the operating system-specific end-of-line marker.
 * - `\n` on POSIX
 * - `\r\n` on Windows
 *
 * @example
 * ```typescript
 * import { eol } from '@tauri-apps/plugin-os';
 * const eolChar = eol();
 * ```
 *
 * @returns The end-of-line marker for the current platform.
 * @since 2.0.0
 * */
function eol() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.eol;
}
/**
 * Returns a string describing the specific operating system in use.
 * The value is set at compile time. Possible values are `'linux'`, `'macos'`, `'ios'`, `'freebsd'`, `'dragonfly'`, `'netbsd'`, `'openbsd'`, `'solaris'`, `'android'`, `'windows'`
 *
 * @example
 * ```typescript
 * import { platform } from '@tauri-apps/plugin-os';
 * const platformName = platform();
 * ```
 *
 * @returns The platform name.
 * @since 2.0.0
 *
 */
function platform() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.platform;
}
/**
 * Returns the current operating system version.
 * @example
 * ```typescript
 * import { version } from '@tauri-apps/plugin-os';
 * const osVersion = version();
 * ```
 *
 * @returns The operating system version.
 * @since 2.0.0
 */
function version() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.version;
}
/**
 * Returns the current operating system family. Possible values are `'unix'`, `'windows'`.
 * @example
 * ```typescript
 * import { family } from '@tauri-apps/plugin-os';
 * const family = family();
 * ```
 *
 * @returns The operating system family.
 * @since 2.0.0
 */
function family() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.family;
}
/**
 * Returns the current operating system type. Returns `'linux'` on Linux, `'macos'` on macOS, `'windows'` on Windows, `'ios'` on iOS and `'android'` on Android.
 * @example
 * ```typescript
 * import { type } from '@tauri-apps/plugin-os';
 * const osType = type();
 * ```
 *
 * @returns The operating system type.
 * @since 2.0.0
 */
function type() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.os_type;
}
/**
 * Returns the current operating system architecture.
 * Possible values are `'x86'`, `'x86_64'`, `'arm'`, `'aarch64'`, `'mips'`, `'mips64'`, `'powerpc'`, `'powerpc64'`, `'riscv64'`, `'s390x'`, `'sparc64'`.
 * @example
 * ```typescript
 * import { arch } from '@tauri-apps/plugin-os';
 * const archName = arch();
 * ```
 *
 * @returns The operating system architecture.
 * @since 2.0.0
 */
function arch() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.arch;
}
/**
 * Returns the file extension, if any, used for executable binaries on this platform. Possible values are `'exe'` and `''` (empty string).
 * @example
 * ```typescript
 * import { exeExtension } from '@tauri-apps/plugin-os';
 * const exeExt = exeExtension();
 * ```
 *
 * @returns The file extension used for executable binaries on this platform.
 * @since 2.0.0
 */
function exeExtension() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.exe_extension;
}
/**
 * Returns a String with a `BCP-47` language tag inside. If the locale couldn’t be obtained, `null` is returned instead.
 * @example
 * ```typescript
 * import { locale } from '@tauri-apps/plugin-os';
 * const locale = await locale();
 * if (locale) {
 *    // use the locale string here
 * }
 * ```
 *
 * @returns A promise resolving to the `BCP-47` language tag, or `null` if it could not be obtained.
 * @since 2.0.0
 */
async function locale() {
    return await invoke('plugin:os|locale');
}
/**
 * Returns the host name of the operating system.
 * @example
 * ```typescript
 * import { hostname } from '@tauri-apps/plugin-os';
 * const hostname = await hostname();
 * ```
 *
 * @returns A promise resolving to the host name of the operating system.
 * @since 2.0.0
 */
async function hostname() {
    return await invoke('plugin:os|hostname');
}

export { arch, eol, exeExtension, family, hostname, locale, platform, type, version };
