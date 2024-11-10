import $ from "jquery";

/**
 * Binds a hotkey to an event.
 * @param {string} event Event name, such as `keydown`.
 * @param {string} bind HotKey to bind, such as `ctrl+shift+s`.
 * @param {() => boolean} callback Callback to execute when the hotkey is pressed.
 */
export async function bindHotKey(event, bind, callback) {
    await import("./hotkey.js");
    $(document).off(event).on(event, null, bind, callback);
}

/**
 * Unbinds a hotkey from an event.
 * @param {string} event Event name, such as `keydown`.
 */
export function unbindHotKey(event) {
    $(document).off(event);
}