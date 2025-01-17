// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Anjuta-3.0
 */

import type * as Gjs from './Gjs';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';
import type Gdl from './Gdl-3';

export namespace Anjuta {

/**
 * Specifies if the entry corresponds to a frame or a button.
 * Buttons are added to the last frame that appears before the button entry
 */
enum CommandBarEntryType {
    /**
     * This entry should create a frame in the
     * 								action bar. The entry's action name and
     * 								callback are ignored.
     */
    FRAME,
    /**
     * This entry adds a button to the action bar,
     * 								 either to the last frame to appear in the
     * 								 entry list before this entry, or to the top
     * 								 of the bar if no frames were previously
     * 								 added.
     */
    BUTTON,
}
enum CommandQueueExecuteMode {
    AUTOMATIC,
    MANUAL,
}
/**
 * Possibly errors that can occur during charset conversion
 */
enum ConvertError {
    /**
     * The charset couldn't be autodetected
     */
    FAILED,
}
enum LauncherOutputType {
    STDOUT,
    STDERR,
    PTY,
}
/**
 * Possible errors when parsing a plugin file
 */
enum PluginDescriptionParseError {
    /**
     * Syntax of plugin file is invalid
     */
    SYNTAX,
    /**
     * Invalid escape sequence
     */
    ESCAPES,
    /**
     * Invalid characters
     */
    CHARS,
}
enum PluginManagerError {
    /**
     * The factory for the plugin couldn't be found
     */
    MISSING_FACTORY,
    /**
     * Unknown error
     */
    ERROR_UNKNOWN,
}
/**
 * Error codes returned by anjuta profile functions.
 */
enum ProfileError {
    /**
     * Fail to read xml plugins list file.
     */
    URI_READ_FAILED,
    /**
     * Fail to write xml plugins list file.
     */
    URI_WRITE_FAILED,
    PLUGIN_MISSING,
}
enum ProjectValueType {
    STRING,
    LIST,
    BOOLEAN,
    MAP,
}
enum SerializerMode {
    READ,
    WRITE,
}
enum SessionPhase {
    START,
    FIRST,
    NORMAL,
    LAST,
    END,
}
enum ShellError {
    EXIST,
}
enum ShellPlacement {
    NONE,
    TOP,
    BOTTOM,
    RIGHT,
    LEFT,
    CENTER,
    FLOATING,
}
enum ProjectNodeState {
    OK,
    MODIFIED,
    INCOMPLETE,
    LOADING,
    REMOVED,
    CAN_ADD_GROUP,
    CAN_ADD_TARGET,
    CAN_ADD_SOURCE,
    CAN_ADD_MODULE,
    CAN_ADD_PACKAGE,
    CAN_REMOVE,
    CAN_SAVE,
    REMOVE_FILE,
}
enum ProjectNodeType {
    UNKNOWN,
    SHAREDLIB,
    STATICLIB,
    PROGRAM,
    PYTHON,
    JAVA,
    LISP,
    HEADER,
    MAN,
    INFO,
    GENERIC,
    DATA,
    EXTRA,
    INTLTOOL,
    CONFIGURE,
    IDL,
    MKENUMS,
    GENMARSHAL,
    SCRIPT,
    ROOT_GROUP,
    LT_MODULE,
    PROXY,
    PROJECT,
    PRIMARY,
    EXECUTABLE,
    READ_ONLY,
    FRAME,
    ID_MASK,
    FLAG_MASK,
    TYPE_MASK,
    ROOT,
    GROUP,
    TARGET,
    SOURCE,
    MODULE,
    PACKAGE,
    VARIABLE,
    OBJECT,
}
enum ProjectPropertyFlags {
    READ_ONLY,
    READ_WRITE,
    HIDDEN,
    STATIC,
}
enum TokenType {
    NONE,
    EOL,
    COMMA,
    TYPE,
    FIRST,
    FILE,
    MACRO,
    CONTENT,
    ARGUMENT,
    VALUE,
    EOV,
    PARSED,
    KEYWORD,
    OPERATOR,
    NAME,
    VARIABLE,
    DEFINITION,
    STATEMENT,
    NUMBER,
    JUNK,
    COMMENT,
    OPEN_QUOTE,
    CLOSE_QUOTE,
    ESCAPE,
    FUNCTION,
    SPACE,
    START,
    NEXT,
    LAST,
    ITEM,
    STRING,
    ERROR,
    WORD,
    LIST,
    ANY,
    USER,
    FLAGS,
    PUBLIC_FLAGS,
    IRRELEVANT,
    OPEN,
    CLOSE,
    SIGNIFICANT,
    PRIVATE_FLAGS,
    CASE_INSENSITIVE,
    STATIC,
    REMOVED,
    ADDED,
}
enum VcsStatus {
    MODIFIED,
    ADDED,
    DELETED,
    CONFLICTED,
    UPTODATE,
    LOCKED,
    MISSING,
    UNVERSIONED,
    IGNORED,
    ALL,
}
const SYSTEM_PROFILE_NAME: string
const VCS_DEFAULT_STATUS_CODES: number
function cclosure_marshal_VOID__BOXED_ENUM(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object | null, marshal_data: object | null): void
function cclosure_marshal_VOID__INT_INT_ULONG(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object | null, marshal_data: object | null): void
function cclosure_marshal_VOID__INT_OBJECT(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object | null, marshal_data: object | null): void
function cclosure_marshal_VOID__INT_STRING(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object | null, marshal_data: object | null): void
function cclosure_marshal_VOID__POINTER_OBJECT(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object | null, marshal_data: object | null): void
function cclosure_marshal_VOID__STRING_BOXED(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object | null, marshal_data: object | null): void
function cclosure_marshal_VOID__STRING_INT(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object | null, marshal_data: object | null): void
function cclosure_marshal_VOID__STRING_INT_STRING(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object | null, marshal_data: object | null): void
function cclosure_marshal_VOID__STRING_POINTER(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object | null, marshal_data: object | null): void
/**
 * Check if autogen version 5 is installed.
 */
function check_autogen(): boolean
function convert_error_quark(): GLib.Quark
function convert_from_utf8(content: string, len: number, encoding: Encoding, new_len: number): string
function convert_to_utf8(content: string, len: number, encoding: Encoding, new_len: number): string
function encoding_get_current(): Encoding
function encoding_get_from_charset(charset: string): Encoding
function encoding_get_from_index(index: number): Encoding
function encoding_get_utf8(): Encoding
function pkg_config_get_version(package: string): string
function pkg_config_ignore_package(name: string): boolean
function plugin_description_parse_error_quark(): GLib.Quark
function plugin_manager_error_quark(): GLib.Quark
function profile_error_quark(): GLib.Quark
function res_get_data_dir(): string
function res_get_data_file(pixfile: string): string
function res_get_doc_dir(): string
function res_get_doc_file(docfile: string): string
function res_get_help_dir(): string
function res_get_help_dir_locale(locale: string): string
function res_get_help_file(helpfile: string): string
function res_get_help_file_locale(helpfile: string, locale: string): string
function res_get_pixmap_dir(): string
function res_get_pixmap_file(pixfile: string): string
function res_help_search(word: string): void
function res_url_show(url: string): void
function shell_error_quark(): GLib.Quark
function util_color_from_string(val: string, r: number, g: number, b: number): void
function util_convert_to_utf8(str: string): string
/**
 * Copies `src` to `dest` and shows a dialog error in case is needed.
 * @param src the file where copy
 * @param dest the path to copy the `src`
 * @param show_error %TRUE to show a dialog error
 */
function util_copy_file(src: string, dest: string, show_error: boolean): boolean
function util_create_dir(d: string): boolean
function util_dialog_input(parent: Gtk.Window, label: string, default_value: string, value: string): boolean
function util_diff(uri: string, text: string): boolean
function util_escape_quotes(str: string): string
function util_execute_shell(dir: string, command: string): GLib.Pid
function util_execute_terminal_shell(dir: string, command: string): GLib.Pid
/**
 * Create a new file corresponding to arg, unlike g_file_new_for_commandline_arg,
 * keeps symbolic links in path name.
 * @param arg URI or relative or absolute file path
 */
function util_file_new_for_commandline_arg(arg: string): Gio.File
function util_get_a_tmp_file(): string
/**
 * Get current working directory, unlike g_get_current_dir, keeps symbolic links
 * in path name.
 */
function util_get_current_dir(): string
function util_get_file_info_mime_type(info: Gio.FileInfo): string
function util_get_file_mime_type(file: Gio.File): string
function util_get_local_path_from_uri(uri: string): string
function util_get_real_path(path: string): string
function util_get_user_mail(): string
function util_help_display(parent: Gtk.Widget, doc_id: string, item: string): void
function util_install_files(names: string): boolean
/**
 * Return %TRUE if the file is an anjuta project file. It is implemented by
 * checking only the file extension. So it does not check the existence
 * of the file. But it is working on an URI if it does not containt a
 * fragment.
 * @param filename the file name
 */
function util_is_project_file(filename: string): boolean
/**
 * Return %TRUE if the file is an template project file. It is implemented by
 * checking only the file extension. So it does not check the existence
 * of the file. But it is working on an URI if it does not containt a
 * fragment.
 * @param filename the file name
 */
function util_is_template_file(filename: string): boolean
function util_package_is_installed(lib: string, show: boolean): boolean
/**
 * Parse arguments from a string to a GList.
 * @param string arguments
 */
function util_parse_args_from_string(string: string): string[]
function util_prog_is_installed(prog: string, show: boolean): boolean
function util_replace_home_dir_with_tilde(uri: string): string
function util_set_anjuta_prefix(name: string): void
function util_set_user_mail(id: string): void
/**
 * Expand environment variables $(var_name) and tilde (~) in the input string.
 * @param string input string
 */
function util_shell_expand(string: string): string
function util_str_middle_truncate(string: string, truncate_length: number): string
function util_string_from_color(r: number, g: number, b: number): string
function util_string_from_type(map: UtilStringMap, type: number): string
function util_type_from_string(map: UtilStringMap, str: string): number
function util_uri_get_dirname(uri: string): string
/**
 * Retrieves the user's preferred shell.
 */
function util_user_shell(): string
/**
 * Retrieves the user's preferred terminal.
 */
function util_user_terminal(): string[]
/**
 * This function is called when the autogen process is completed.
 * @callback 
 * @param autogen #AnjutaAutogen object.
 * @param data user data passed to the callback.
 */
interface AutogenFunc {
    (autogen: Autogen, data: object | null): void
}
/**
 * This function is called each time there is new data from autogen.
 * @callback 
 * @param output data generated by autogen.
 * @param data user data passed to the callback.
 */
interface AutogenOutputFunc {
    (output: string, data: object | null): void
}
interface CompletionFilterFunc {
    (item: object | null): boolean
}
interface CompletionNameFunc {
    (item: object | null): string
}
/**
 * This callback is called when new characters arrive from the launcher
 * execution.
 * @callback 
 * @param launcher a #AnjutaLauncher object
 * @param output_type Type of the output
 * @param chars Characters being outputed
 */
interface LauncherOutputCallback {
    (launcher: Launcher, output_type: LauncherOutputType, chars: string): void
}
interface PluginDescriptionLineFunc {
    (df: PluginDescription, key: string, locale: string, value: string, data: object | null): void
}
interface PluginDescriptionSectionFunc {
    (df: PluginDescription, name: string): void
}
/**
 * The callback to pass to anjuta_plugin_add_watch(). When a `name` value
 * is added to shell by another plugin, this callback will be called.
 * @callback 
 * @param plugin The #AnjutaPlugin based plugin
 * @param name name of value being added.
 * @param value value of value being added.
 */
interface PluginValueAdded {
    (plugin: Plugin, name: string, value: any): void
}
/**
 * The callback to pass to anjuta_plugin_add_watch(). When the `name` value
 * is removed from the shell (by the plugin exporting this value), this
 * callback will be called.
 * @callback 
 * @param plugin The #AnjutaPlugin based plugin
 * @param name name of value being added.
 */
interface PluginValueRemoved {
    (plugin: Plugin, name: string): void
}
interface PreferencesCallback {
    (pr: Preferences, key: string, data: object | null): boolean
}
interface ProjectNodeForeachFunc {
    (node: ProjectNode): void
}
interface ProjectNodeTraverseFunc {
    (node: ProjectNode, data: object | null): boolean
}
interface SavePromptSaveFunc {
    (save_prompt: SavePrompt, item: object | null): boolean
}
interface TokenForeachFunc {
    (token: Token, data: object | null): void
}
interface Shell_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `load-session`
 */
interface Shell_LoadSessionSignalCallback {
    ($obj: Shell, object: number, p0: GObject.Object): void
}

/**
 * Signal callback interface for `save-prompt`
 */
interface Shell_SavePromptSignalCallback {
    ($obj: Shell, object: GObject.Object): void
}

/**
 * Signal callback interface for `save-session`
 */
interface Shell_SaveSessionSignalCallback {
    ($obj: Shell, object: number, p0: GObject.Object): void
}

/**
 * Signal callback interface for `value-added`
 */
interface Shell_ValueAddedSignalCallback {
    ($obj: Shell, object: string, p0: any): void
}

/**
 * Signal callback interface for `value-removed`
 */
interface Shell_ValueRemovedSignalCallback {
    ($obj: Shell, object: string): void
}

interface Shell {

    // Owm methods of Anjuta-3.0.Anjuta.Shell

    /**
     * Sets a value in the shell with the given name. Any previous value will
     * be overridden. "value_added" signal will be emitted. Objects connecting
     * to this signal can then update their data according to the new value.
     * @param name Name of the value
     * @param value Value to add
     */
    add_value(name: string, value: any): void
    /**
     * Adds `widget` in the shell. The `placement` tells where the widget should
     * appear, but generally it will be overridden by the container
     * (dock, notebook, GtkContainer etc.) saved layout.
     * @param widget Then widget to add
     * @param name Name of the widget. None translated string used to identify it in the shell.
     * @param title Translated string which is displayed along side the widget when required (eg. as window title or notebook tab label).
     * @param stock_id Icon stock ID. Could be null.
     * @param placement Placement of the widget in shell.
     */
    add_widget(widget: Gtk.Widget, name: string, title: string, stock_id: string, placement: ShellPlacement): void
    /**
     * Adds `widget` in the shell. The `placement` tells where the widget should
     * appear, but generally it will be overridden by the container
     * (dock, notebook, GtkContainer etc.) saved layout.
     * 
     * Using this method you can pass a custom widget as label.
     * @param widget Then widget to add
     * @param name Name of the widget. None translated string used to identify it in the shell.
     * @param title title of the widget (translated)
     * @param stock_id Icon stock ID. Could be null.
     * @param label Label widget to use
     * @param placement Placement of the widget in shell.
     */
    add_widget_custom(widget: Gtk.Widget, name: string, title: string, stock_id: string, label: Gtk.Widget, placement: ShellPlacement): void
    /**
     * Adds `widget` in the shell. The `placement` tells where the widget should
     * appear, but generally it will be overridden by the container
     * (dock, notebook, GtkContainer etc.) saved layout.
     * 
     * Normally just use anjuta_shell_add_widget() because you do not
     * use locking.
     * @param widget Then widget to add
     * @param name Name of the widget. None translated string used to identify it in the shell.
     * @param title Translated string which is displayed along side the widget when required (eg. as window title or notebook tab label).
     * @param stock_id Icon stock ID. Could be null.
     * @param placement Placement of the widget in shell.
     * @param locked Whether to lock that widget (do not use this, it's only 			useful to some stock plugins
     */
    add_widget_full(widget: Gtk.Widget, name: string, title: string, stock_id: string, placement: ShellPlacement, locked: boolean): void
    /**
     * Freezes addition of any UI elements (widgets) in the shell. All widget
     * additions are queued for later additions when freeze count reaches 0.
     * Any number of this function can be called and each call will increase
     * the freeze count. anjuta_shell_thaw() will reduce the freeze count by
     * 1 and real thawing happens when the count reaches 0.
     */
    freeze(): void
    /**
     * Searches the currently available plugins to find the one which
     * implements the given interface as primary interface and returns it. If
     * the plugin is not yet loaded, it will be loaded and activated.
     * The returned object is garanteed to be an implementor of the
     * interface (as exported by the plugin metafile). It only searches
     * from the pool of plugin objects loaded in this shell and can only search
     * by primary interface. If there are more objects implementing this primary
     * interface, user might be prompted to select one from them (and might give
     * the option to use it as default for future queries). A typical usage of this
     * function is:
     * <programlisting>
     * GObject *docman =
     *     anjuta_plugins_get_object (shell, "IAnjutaDocumentManager", error);
     * </programlisting>
     * Notice that this function takes the interface name string as string, unlike
     * anjuta_plugins_get_interface() which takes the type directly.
     * @param iface_name The interface implemented by the object to be found
     */
    get_object(iface_name: string): GObject.Object
    /**
     * Retrieves the #AnjutaPluginManager object associated with the shell.
     */
    get_plugin_manager(): PluginManager
    /**
     * Retrieves the #AnjutaPreferences object associated with the shell.
     */
    get_preferences(): Preferences
    /**
     * Retrieves the #AnjutaProfileManager object associated with the shell.
     */
    get_profile_manager(): ProfileManager
    /**
     * Retrieves the #AnjutaStatus object associated with the shell.
     */
    get_status(): Status
    /**
     * Retrieves the #AnjutaUI object associated with the shell.
     */
    get_ui(): UI
    /**
     * Gets a value from the shell with the given name. The value will be set
     * in the passed value pointer.
     * @param name Name of the value to get
     * @param value Value to get
     */
    get_value(name: string, value: any): void
    /**
     * If the widget is dockable, it hides it.
     * @param widget a #GtkWidget to hide.
     */
    hide_dockable_widget(widget: Gtk.Widget): void
    /**
     * If the widget is dockable, it iconifies it.
     * @param widget a #GtkWidget to iconify.
     */
    iconify_dockable_widget(widget: Gtk.Widget): void
    /**
     * Maximizes a widget so it will occupy all the possible space.
     * @param widget_name Name of the widget to be maximized.
     */
    maximize_widget(widget_name: string): void
    /**
     * Make sure the widget is visible to user. If the widget is hidden, it will
     * be shown. If it is not visible to user, it will be made visible.
     * @param widget The widget to present
     */
    present_widget(widget: Gtk.Widget): void
    /**
     * Removes a value from the shell with the given name. "value_removed" signal
     * will be emitted. Objects connecting to this signal can then update their
     * data/internal-state accordingly.
     * @param name Name of the value to remove
     */
    remove_value(name: string): void
    /**
     * Removes the widget from shell. The widget should have been added before
     * with #anjuta_shell_add_widget.
     * @param widget The widget to remove
     */
    remove_widget(widget: Gtk.Widget): void
    save_prompt(prompt: SavePrompt): void
    /**
     * Decrease the count of files that need to be saved
     */
    saving_pop(): void
    /**
     * Increase the count of files that need to be saved
     */
    saving_push(): void
    session_load(session_directory: string): void
    session_save(session_directory: string): void
    /**
     * If the widget was hidden or iconified, it will make it visible.
     * @param widget a #GtkWidget to show.
     */
    show_dockable_widget(widget: Gtk.Widget): void
    /**
     * Reduces the freeze count by one and performs pending widget additions
     * when the count reaches 0.
     */
    thaw(): void
    /**
     * Unmaximizes the UI which was previously maximized by
     * #anjuta_shell_maximize_widget
     */
    unmaximize(): void

    // Own virtual methods of Anjuta-3.0.Anjuta.Shell

    /**
     * Sets a value in the shell with the given name. Any previous value will
     * be overridden. "value_added" signal will be emitted. Objects connecting
     * to this signal can then update their data according to the new value.
     * @virtual 
     * @param name Name of the value
     * @param value Value to add
     */
    vfunc_add_value(name: string, value: any): void
    /**
     * Adds `widget` in the shell. The `placement` tells where the widget should
     * appear, but generally it will be overridden by the container
     * (dock, notebook, GtkContainer etc.) saved layout.
     * 
     * Using this method you can pass a custom widget as label.
     * @virtual 
     * @param widget Then widget to add
     * @param name Name of the widget. None translated string used to identify it in the shell.
     * @param title title of the widget (translated)
     * @param stock_id Icon stock ID. Could be null.
     * @param label Label widget to use
     * @param placement Placement of the widget in shell.
     */
    vfunc_add_widget_custom(widget: Gtk.Widget, name: string, title: string, stock_id: string, label: Gtk.Widget, placement: ShellPlacement): void
    /**
     * Adds `widget` in the shell. The `placement` tells where the widget should
     * appear, but generally it will be overridden by the container
     * (dock, notebook, GtkContainer etc.) saved layout.
     * 
     * Normally just use anjuta_shell_add_widget() because you do not
     * use locking.
     * @virtual 
     * @param widget Then widget to add
     * @param name Name of the widget. None translated string used to identify it in the shell.
     * @param title Translated string which is displayed along side the widget when required (eg. as window title or notebook tab label).
     * @param stock_id Icon stock ID. Could be null.
     * @param placement Placement of the widget in shell.
     * @param locked Whether to lock that widget (do not use this, it's only 			useful to some stock plugins
     */
    vfunc_add_widget_full(widget: Gtk.Widget, name: string, title: string, stock_id: string, placement: ShellPlacement, locked: boolean): void
    /**
     * Searches the currently available plugins to find the one which
     * implements the given interface as primary interface and returns it. If
     * the plugin is not yet loaded, it will be loaded and activated.
     * The returned object is garanteed to be an implementor of the
     * interface (as exported by the plugin metafile). It only searches
     * from the pool of plugin objects loaded in this shell and can only search
     * by primary interface. If there are more objects implementing this primary
     * interface, user might be prompted to select one from them (and might give
     * the option to use it as default for future queries). A typical usage of this
     * function is:
     * <programlisting>
     * GObject *docman =
     *     anjuta_plugins_get_object (shell, "IAnjutaDocumentManager", error);
     * </programlisting>
     * Notice that this function takes the interface name string as string, unlike
     * anjuta_plugins_get_interface() which takes the type directly.
     * @virtual 
     * @param iface_name The interface implemented by the object to be found
     */
    vfunc_get_object(iface_name: string): GObject.Object
    /**
     * Retrieves the #AnjutaPluginManager object associated with the shell.
     * @virtual 
     */
    vfunc_get_plugin_manager(): PluginManager
    /**
     * Retrieves the #AnjutaPreferences object associated with the shell.
     * @virtual 
     */
    vfunc_get_preferences(): Preferences
    /**
     * Retrieves the #AnjutaProfileManager object associated with the shell.
     * @virtual 
     */
    vfunc_get_profile_manager(): ProfileManager
    /**
     * Retrieves the #AnjutaStatus object associated with the shell.
     * @virtual 
     */
    vfunc_get_status(): Status
    /**
     * Retrieves the #AnjutaUI object associated with the shell.
     * @virtual 
     */
    vfunc_get_ui(): UI
    /**
     * Gets a value from the shell with the given name. The value will be set
     * in the passed value pointer.
     * @virtual 
     * @param name Name of the value to get
     * @param value Value to get
     */
    vfunc_get_value(name: string, value: any): void
    /**
     * If the widget is dockable, it hides it.
     * @virtual 
     * @param widget a #GtkWidget to hide.
     */
    vfunc_hide_dockable_widget(widget: Gtk.Widget): void
    /**
     * If the widget is dockable, it iconifies it.
     * @virtual 
     * @param widget a #GtkWidget to iconify.
     */
    vfunc_iconify_dockable_widget(widget: Gtk.Widget): void
    vfunc_load_session(phase: SessionPhase, session: Session): void
    /**
     * Maximizes a widget so it will occupy all the possible space.
     * @virtual 
     * @param widget_name Name of the widget to be maximized.
     */
    vfunc_maximize_widget(widget_name: string): void
    /**
     * Make sure the widget is visible to user. If the widget is hidden, it will
     * be shown. If it is not visible to user, it will be made visible.
     * @virtual 
     * @param widget The widget to present
     */
    vfunc_present_widget(widget: Gtk.Widget): void
    /**
     * Removes a value from the shell with the given name. "value_removed" signal
     * will be emitted. Objects connecting to this signal can then update their
     * data/internal-state accordingly.
     * @virtual 
     * @param name Name of the value to remove
     */
    vfunc_remove_value(name: string): void
    /**
     * Removes the widget from shell. The widget should have been added before
     * with #anjuta_shell_add_widget.
     * @virtual 
     * @param widget The widget to remove
     */
    vfunc_remove_widget(widget: Gtk.Widget): void
    vfunc_save_prompt(save_prompt: SavePrompt): void
    vfunc_save_session(phase: SessionPhase, session: Session): void
    /**
     * Decrease the count of files that need to be saved
     * @virtual 
     */
    vfunc_saving_pop(): void
    /**
     * Increase the count of files that need to be saved
     * @virtual 
     */
    vfunc_saving_push(): void
    /**
     * If the widget was hidden or iconified, it will make it visible.
     * @virtual 
     * @param widget a #GtkWidget to show.
     */
    vfunc_show_dockable_widget(widget: Gtk.Widget): void
    /**
     * Unmaximizes the UI which was previously maximized by
     * #anjuta_shell_maximize_widget
     * @virtual 
     */
    vfunc_unmaximize(): void
    vfunc_value_added(name: string, value: any): void
    vfunc_value_removed(name: string): void

    // Own signals of Anjuta-3.0.Anjuta.Shell

    connect(sigName: "load-session", callback: Shell_LoadSessionSignalCallback): number
    connect_after(sigName: "load-session", callback: Shell_LoadSessionSignalCallback): number
    emit(sigName: "load-session", object: number, p0: GObject.Object, ...args: any[]): void
    connect(sigName: "save-prompt", callback: Shell_SavePromptSignalCallback): number
    connect_after(sigName: "save-prompt", callback: Shell_SavePromptSignalCallback): number
    emit(sigName: "save-prompt", object: GObject.Object, ...args: any[]): void
    connect(sigName: "save-session", callback: Shell_SaveSessionSignalCallback): number
    connect_after(sigName: "save-session", callback: Shell_SaveSessionSignalCallback): number
    emit(sigName: "save-session", object: number, p0: GObject.Object, ...args: any[]): void
    connect(sigName: "value-added", callback: Shell_ValueAddedSignalCallback): number
    connect_after(sigName: "value-added", callback: Shell_ValueAddedSignalCallback): number
    emit(sigName: "value-added", object: string, p0: any, ...args: any[]): void
    connect(sigName: "value-removed", callback: Shell_ValueRemovedSignalCallback): number
    connect_after(sigName: "value-removed", callback: Shell_ValueRemovedSignalCallback): number
    emit(sigName: "value-removed", object: string, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Shell

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Shell extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Shell

    static name: string
    static $gtype: GObject.GType<Shell>

    // Constructors of Anjuta-3.0.Anjuta.Shell

    constructor(config?: Shell_ConstructProps) 
    _init(config?: Shell_ConstructProps): void
}

interface AsyncCommand_ConstructProps extends Command_ConstructProps {
}

interface AsyncCommand {

    // Own fields of Anjuta-3.0.Anjuta.AsyncCommand

    parent_instance: Command
    priv: AsyncCommandPriv

    // Owm methods of Anjuta-3.0.Anjuta.AsyncCommand

    /**
     * Locks the command's built-in mutex.
     */
    lock(): void
    /**
     * Unlocks the command's built-in mutex.
     */
    unlock(): void

    // Class property signals of Anjuta-3.0.Anjuta.AsyncCommand

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AsyncCommand extends Command {

    // Own properties of Anjuta-3.0.Anjuta.AsyncCommand

    static name: string
    static $gtype: GObject.GType<AsyncCommand>

    // Constructors of Anjuta-3.0.Anjuta.AsyncCommand

    constructor(config?: AsyncCommand_ConstructProps) 
    _init(config?: AsyncCommand_ConstructProps): void
    static get_error_message(command: Command): string
    /**
     * Set the error message this async command resulted in
     * @param command AnjutaAsyncCommand object
     * @param error_message The error message that should be used
     */
    static set_error_message(command: Command, error_message: string): void
}

interface AsyncNotify_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `finished`
 */
interface AsyncNotify_FinishedSignalCallback {
    ($obj: AsyncNotify): void
}

interface AsyncNotify {

    // Own fields of Anjuta-3.0.Anjuta.AsyncNotify

    parent_instance: GObject.Object
    priv: AsyncNotifyPriv

    // Owm methods of Anjuta-3.0.Anjuta.AsyncNotify

    /**
     * Gets the error set on `self`.
     */
    get_error(): void
    /**
     * Emits the finished signal. This method should only be used by
     * interface methods themselves, not by clients.
     */
    notify_finished(): void
    /**
     * Sets the error for an interface call. This method should only be used by
     * interface implementations themselves, not by clients.
     * @param error Error to set
     */
    set_error(error: GLib.Error): void

    // Own virtual methods of Anjuta-3.0.Anjuta.AsyncNotify

    vfunc_finished(): void

    // Own signals of Anjuta-3.0.Anjuta.AsyncNotify

    connect(sigName: "finished", callback: AsyncNotify_FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: AsyncNotify_FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.AsyncNotify

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AsyncNotify extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.AsyncNotify

    static name: string
    static $gtype: GObject.GType<AsyncNotify>

    // Constructors of Anjuta-3.0.Anjuta.AsyncNotify

    constructor(config?: AsyncNotify_ConstructProps) 
    /**
     * Creates a new #AnjutaAsyncNotify object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AnjutaAsyncNotify object.
     * @constructor 
     */
    static new(): AsyncNotify
    _init(config?: AsyncNotify_ConstructProps): void
}

interface Autogen_ConstructProps extends GObject.Object_ConstructProps {
}

interface Autogen {

    // Owm methods of Anjuta-3.0.Anjuta.Autogen

    /**
     * Remove all library pathes.
     */
    clear_library_path(): void
    /**
     * Asynchronously execute autogen to generate the output, calling `func` when the
     * process is completed.
     * @param func A function called when autogen is terminated
     */
    execute(func: AutogenFunc | null): boolean
    /**
     * Get the list of all directories searched for files included in the autogen
     * templates.
     */
    get_library_paths(): string[]
    /**
     * Read an autogen template file, optionally adding autogen markers.
     * 
     * To be recognized as an autogen template, the first line has to contain:
     * - the start marker
     * - "autogen5 template"
     * - the end marker
     * 
     * These markers are a custom sequence of up to 7 characters delimiting
     * the start and the end of autogen variables and macros.
     * 
     * This function can add this line using the value of `start_marker` and
     * `end_marker`. If this line is already present in the file,
     * `start_marker` and `end_marker` must be %NULL.
     * @param filename name of the input template file
     * @param start_marker start marker string
     * @param end_marker end marker string
     */
    set_input_file(filename: string, start_marker: string | null, end_marker: string | null): boolean
    /**
     * Add a new directory in the list of autogen libraries path.
     * 
     * Autogen can include files. These included file will be searched by default
     * in the same directory than the template file. This functions allows you to
     * add other directories.
     * @param directory A path containing autogen library.
     */
    set_library_path(directory: string): void
    /**
     * Define that autogen output should be send to a function as soon as it arrives.
     * @param func Function call each time we get new data from autogen
     */
    set_output_callback(func: AutogenOutputFunc): boolean
    /**
     * Define the name of the generated file.
     * @param filename name of the generated file
     */
    set_output_file(filename: string): boolean
    /**
     * Write the autogen definition file. The definition file defined variables
     * those will be used, typically replaced, in the template files.
     * 
     * The hash table keys are the names of the variables. The name can include an
     * index in square bracket, by example "members[0]". All values are strings but
     * but they could include children using braces, by example
     * "{count=2; list="aa bb"}".
     * 
     * The file is created in a temporary directory and removed when the object
     * is destroyed.
     * @param values A hash table containing all definitions
     */
    write_definition_file(values: GLib.HashTable): boolean

    // Class property signals of Anjuta-3.0.Anjuta.Autogen

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A GObject wrapper for running GNU autogen.
 * @class 
 */
class Autogen extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Autogen

    static name: string
    static $gtype: GObject.GType<Autogen>

    // Constructors of Anjuta-3.0.Anjuta.Autogen

    constructor(config?: Autogen_ConstructProps) 
    /**
     * Create a new autogen object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new autogen object.
     * @constructor 
     */
    static new(): Autogen
    _init(config?: Autogen_ConstructProps): void
}

interface CModule_ConstructProps extends GObject.TypePlugin_ConstructProps, GObject.TypeModule_ConstructProps {
}

interface CModule extends GObject.TypePlugin {

    // Owm methods of Anjuta-3.0.Anjuta.CModule

    /**
     * Receives the error that occured when the module was loaded
     */
    get_last_error(): boolean

    // Conflicting methods

    use(...args: any[]): any

    // Class property signals of Anjuta-3.0.Anjuta.CModule

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CModule extends GObject.TypeModule {

    // Own properties of Anjuta-3.0.Anjuta.CModule

    static name: string
    static $gtype: GObject.GType<CModule>

    // Constructors of Anjuta-3.0.Anjuta.CModule

    constructor(config?: CModule_ConstructProps) 
    /**
     * Create a new #AnjutaCModule object.
     * @constructor 
     * @param path The full path of the module
     * @param name The name of the module
     */
    constructor(path: string, name: string) 
    /**
     * Create a new #AnjutaCModule object.
     * @constructor 
     * @param path The full path of the module
     * @param name The name of the module
     */
    static new(path: string, name: string): CModule
    _init(config?: CModule_ConstructProps): void
}

interface CPluginFactory_ConstructProps extends GObject.Object_ConstructProps {
}

interface CPluginFactory {

    // Owm methods of Anjuta-3.0.Anjuta.CPluginFactory

    /**
     * Delete a #AnjutaCPluginFactory object.
     */
    free(): void

    // Class property signals of Anjuta-3.0.Anjuta.CPluginFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CPluginFactory extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.CPluginFactory

    static name: string
    static $gtype: GObject.GType<CPluginFactory>

    // Constructors of Anjuta-3.0.Anjuta.CPluginFactory

    constructor(config?: CPluginFactory_ConstructProps) 
    /**
     * Create a new #AnjutaCPluginFactory object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #AnjutaCPluginFactory object.
     * @constructor 
     */
    static new(): CPluginFactory
    _init(config?: CPluginFactory_ConstructProps): void
}

interface CellRendererCaptionedImage_ConstructProps extends Gtk.CellRenderer_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    pixbuf?: GdkPixbuf.Pixbuf | null
    text?: string | null
}

interface CellRendererCaptionedImage {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    pixbuf: GdkPixbuf.Pixbuf
    text: string

    // Own fields of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    parent: Gtk.CellRenderer
    image: Gtk.CellRenderer
    caption: Gtk.CellRenderer

    // Class property signals of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    connect(sigName: "notify::pixbuf", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: CellRendererCaptionedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CellRendererCaptionedImage extends Gtk.CellRenderer {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    static name: string
    static $gtype: GObject.GType<CellRendererCaptionedImage>

    // Constructors of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    constructor(config?: CellRendererCaptionedImage_ConstructProps) 
    constructor() 
    static new(): CellRendererCaptionedImage
    _init(config?: CellRendererCaptionedImage_ConstructProps): void
}

interface CellRendererDiff_ConstructProps extends Gtk.CellRenderer_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.CellRendererDiff

    diff?: string | null
}

interface CellRendererDiff {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererDiff

    diff: string

    // Own fields of Anjuta-3.0.Anjuta.CellRendererDiff

    parent_instance: Gtk.CellRenderer
    priv: CellRendererDiffPrivate

    // Owm methods of Anjuta-3.0.Anjuta.CellRendererDiff

    set_diff(diff: string): void

    // Class property signals of Anjuta-3.0.Anjuta.CellRendererDiff

    connect(sigName: "notify::diff", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::diff", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::diff", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: CellRendererDiff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CellRendererDiff extends Gtk.CellRenderer {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererDiff

    static name: string
    static $gtype: GObject.GType<CellRendererDiff>

    // Constructors of Anjuta-3.0.Anjuta.CellRendererDiff

    constructor(config?: CellRendererDiff_ConstructProps) 
    constructor() 
    static new(): CellRendererDiff
    _init(config?: CellRendererDiff_ConstructProps): void
}

interface CloseButton_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Actionable_ConstructProps, Gtk.Activatable_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Button_ConstructProps {
}

interface CloseButton extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {

    // Own fields of Anjuta-3.0.Anjuta.CloseButton

    parent: Gtk.Button

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Anjuta-3.0.Anjuta.CloseButton

    connect(sigName: "notify::always-show-image", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: CloseButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CloseButton extends Gtk.Button {

    // Own properties of Anjuta-3.0.Anjuta.CloseButton

    static name: string
    static $gtype: GObject.GType<CloseButton>

    // Constructors of Anjuta-3.0.Anjuta.CloseButton

    constructor(config?: CloseButton_ConstructProps) 
    constructor() 
    static new(): CloseButton
    _init(config?: CloseButton_ConstructProps): void
}

interface ColumnTextView_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {
}

interface ColumnTextView extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Anjuta-3.0.Anjuta.ColumnTextView

    parent_instance: Gtk.Box
    priv: ColumnTextViewPriv

    // Owm methods of Anjuta-3.0.Anjuta.ColumnTextView

    get_text(): string

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Anjuta-3.0.Anjuta.ColumnTextView

    connect(sigName: "notify::baseline-position", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: ColumnTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ColumnTextView extends Gtk.Box {

    // Own properties of Anjuta-3.0.Anjuta.ColumnTextView

    static name: string
    static $gtype: GObject.GType<ColumnTextView>

    // Constructors of Anjuta-3.0.Anjuta.ColumnTextView

    constructor(config?: ColumnTextView_ConstructProps) 
    constructor() 
    static new(): ColumnTextView

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: ColumnTextView_ConstructProps): void
}

interface Command_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `command-finished`
 */
interface Command_CommandFinishedSignalCallback {
    ($obj: Command, return_code: number): void
}

/**
 * Signal callback interface for `command-started`
 */
interface Command_CommandStartedSignalCallback {
    ($obj: Command): void
}

/**
 * Signal callback interface for `data-arrived`
 */
interface Command_DataArrivedSignalCallback {
    ($obj: Command): void
}

/**
 * Signal callback interface for `progress`
 */
interface Command_ProgressSignalCallback {
    ($obj: Command, progress: number): void
}

interface Command {

    // Own fields of Anjuta-3.0.Anjuta.Command

    parent_instance: GObject.Object
    priv: CommandPriv

    // Owm methods of Anjuta-3.0.Anjuta.Command

    /**
     * Cancels a running command.
     */
    cancel(): void
    /**
     * Get the error message from the command, if there is one. This method is
     * normally used from a ::command-finished handler to report errors to the user
     * when a command finishes.
     */
    get_error_message(): string | null
    is_running(): boolean
    /**
     * Used by base classes derived from #AnjutaCommand to emit the
     * ::command-finished signal. This method should not be used by client code or
     * #AnjutaCommand objects that are not base classes.
     * @param return_code The returned code that is passed to the notify callback
     */
    notify_complete(return_code: number): void
    /**
     * Used by base classes derived from #AnjutaCommand to emit the ::data-arrived
     * signal. This method should be used by both base command classes and
     * non-base classes as appropriate.
     */
    notify_data_arrived(): void
    /**
     * Emits the ::progress signal. Can be used by both base classes and
     * commands as needed.
     * @param progress The of the command that is passed to the notify callback
     */
    notify_progress(progress: number): void
    /**
     * Command objects use this to set error messages when they encounter some kind
     * of failure.
     * @param error_message Error message.
     */
    set_error_message(error_message: string): void
    /**
     * Starts a command. Client code can handle data from the command by connecting
     * to the ::data-arrived signal.
     * 
     * #AnjutaCommand subclasses should override this method to determine how they
     * call ::run, which actually does the command's legwork.
     */
    start(): void
    /**
     * Sets up any monitoring needed for commands that should start themselves
     * automatically in response to some event.
     */
    start_automatic_monitor(): boolean
    /**
     * Stops automatic monitoring for self executing commands. For commands that
     * do not support self-starting, this function does nothing.
     */
    stop_automatic_monitor(): void

    // Own virtual methods of Anjuta-3.0.Anjuta.Command

    /**
     * Cancels a running command.
     * @virtual 
     */
    vfunc_cancel(): void
    vfunc_command_finished(return_code: number): void
    vfunc_command_started(): void
    vfunc_data_arrived(): void
    /**
     * Get the error message from the command, if there is one. This method is
     * normally used from a ::command-finished handler to report errors to the user
     * when a command finishes.
     * @virtual 
     */
    vfunc_get_error_message(): string | null
    /**
     * Used by base classes derived from #AnjutaCommand to emit the
     * ::command-finished signal. This method should not be used by client code or
     * #AnjutaCommand objects that are not base classes.
     * @virtual 
     * @param return_code The returned code that is passed to the notify callback
     */
    vfunc_notify_complete(return_code: number): void
    /**
     * Used by base classes derived from #AnjutaCommand to emit the ::data-arrived
     * signal. This method should be used by both base command classes and
     * non-base classes as appropriate.
     * @virtual 
     */
    vfunc_notify_data_arrived(): void
    /**
     * Emits the ::progress signal. Can be used by both base classes and
     * commands as needed.
     * @virtual 
     * @param progress The of the command that is passed to the notify callback
     */
    vfunc_notify_progress(progress: number): void
    vfunc_progress(progress: number): void
    vfunc_run(): number
    /**
     * Command objects use this to set error messages when they encounter some kind
     * of failure.
     * @virtual 
     * @param error_message Error message.
     */
    vfunc_set_error_message(error_message: string): void
    /**
     * Starts a command. Client code can handle data from the command by connecting
     * to the ::data-arrived signal.
     * 
     * #AnjutaCommand subclasses should override this method to determine how they
     * call ::run, which actually does the command's legwork.
     * @virtual 
     */
    vfunc_start(): void
    /**
     * Sets up any monitoring needed for commands that should start themselves
     * automatically in response to some event.
     * @virtual 
     */
    vfunc_start_automatic_monitor(): boolean
    /**
     * Stops automatic monitoring for self executing commands. For commands that
     * do not support self-starting, this function does nothing.
     * @virtual 
     */
    vfunc_stop_automatic_monitor(): void

    // Own signals of Anjuta-3.0.Anjuta.Command

    connect(sigName: "command-finished", callback: Command_CommandFinishedSignalCallback): number
    connect_after(sigName: "command-finished", callback: Command_CommandFinishedSignalCallback): number
    emit(sigName: "command-finished", return_code: number, ...args: any[]): void
    connect(sigName: "command-started", callback: Command_CommandStartedSignalCallback): number
    connect_after(sigName: "command-started", callback: Command_CommandStartedSignalCallback): number
    emit(sigName: "command-started", ...args: any[]): void
    connect(sigName: "data-arrived", callback: Command_DataArrivedSignalCallback): number
    connect_after(sigName: "data-arrived", callback: Command_DataArrivedSignalCallback): number
    emit(sigName: "data-arrived", ...args: any[]): void
    connect(sigName: "progress", callback: Command_ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: Command_ProgressSignalCallback): number
    emit(sigName: "progress", progress: number, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Command

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Command extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Command

    static name: string
    static $gtype: GObject.GType<Command>

    // Constructors of Anjuta-3.0.Anjuta.Command

    constructor(config?: Command_ConstructProps) 
    _init(config?: Command_ConstructProps): void
}

interface CommandBar_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Notebook_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.CommandBar

    max_text_width?: number | null
}

interface CommandBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Anjuta-3.0.Anjuta.CommandBar

    readonly max_text_width: number

    // Own fields of Anjuta-3.0.Anjuta.CommandBar

    parent_instance: Gtk.Notebook
    priv: CommandBarPriv

    // Owm methods of Anjuta-3.0.Anjuta.CommandBar

    /**
     * Adds a group of entries to an AnjutaCommandBar.
     * @param group_name A unique name for this group of entries
     * @param entries A list of entries to add
     * @param user_data User data to pass to the entry callback
     */
    add_action_group(group_name: string, entries: CommandBarEntry[], user_data: object | null): void
    /**
     * Removes an action group from an AnjutaCommandBar.
     * @param group_name Name of the action group to remove
     */
    remove_action_group(group_name: string): void
    /**
     * Causes the actions in the given group to become visible, replacing the
     * previously visible group.
     * @param group_name The name of the action group to show
     */
    show_action_group(group_name: string): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Anjuta-3.0.Anjuta.CommandBar

    connect(sigName: "notify::max-text-width", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-text-width", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-text-width", ...args: any[]): void
    connect(sigName: "notify::enable-popup", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-popup", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-popup", ...args: any[]): void
    connect(sigName: "notify::group-name", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-name", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group-name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::scrollable", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollable", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scrollable", ...args: any[]): void
    connect(sigName: "notify::show-border", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-border", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-border", ...args: any[]): void
    connect(sigName: "notify::show-tabs", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-tabs", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-tabs", ...args: any[]): void
    connect(sigName: "notify::tab-pos", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-pos", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-pos", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: CommandBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CommandBar extends Gtk.Notebook {

    // Own properties of Anjuta-3.0.Anjuta.CommandBar

    static name: string
    static $gtype: GObject.GType<CommandBar>

    // Constructors of Anjuta-3.0.Anjuta.CommandBar

    constructor(config?: CommandBar_ConstructProps) 
    /**
     * Creates a new AnjutaCommandBar.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new AnjutaCommandBar.
     * @constructor 
     */
    static new(): CommandBar
    _init(config?: CommandBar_ConstructProps): void
}

interface CommandQueue_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `finished`
 */
interface CommandQueue_FinishedSignalCallback {
    ($obj: CommandQueue): void
}

interface CommandQueue {

    // Own fields of Anjuta-3.0.Anjuta.CommandQueue

    parent_instance: GObject.Object
    priv: CommandQueuePriv

    // Owm methods of Anjuta-3.0.Anjuta.CommandQueue

    /**
     * Adds a command to the Queue and starts it if there are no other commands
     * waiting
     * @param command The command to add
     */
    push(command: Command): void
    start(): boolean

    // Own virtual methods of Anjuta-3.0.Anjuta.CommandQueue

    vfunc_finished(): void

    // Own signals of Anjuta-3.0.Anjuta.CommandQueue

    connect(sigName: "finished", callback: CommandQueue_FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: CommandQueue_FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.CommandQueue

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CommandQueue extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.CommandQueue

    static name: string
    static $gtype: GObject.GType<CommandQueue>

    // Constructors of Anjuta-3.0.Anjuta.CommandQueue

    constructor(config?: CommandQueue_ConstructProps) 
    constructor(mode: CommandQueueExecuteMode) 
    static new(mode: CommandQueueExecuteMode): CommandQueue
    _init(config?: CommandQueue_ConstructProps): void
}

interface Completion_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.Completion

    case_sensitive?: boolean | null
}

interface Completion {

    // Own properties of Anjuta-3.0.Anjuta.Completion

    case_sensitive: boolean

    // Own fields of Anjuta-3.0.Anjuta.Completion

    parent_instance: GObject.Object
    priv: CompletionPrivate

    // Owm methods of Anjuta-3.0.Anjuta.Completion

    /**
     * Add an item to the completion.
     * @param item the item to be added.
     */
    add_item(item: object | null): void
    /**
     * Clear all items added to the completion.
     */
    clear(): void
    get_case_sensitive(): boolean
    set_case_sensitive(case_sensitive: boolean): void
    set_item_destroy_func(item_destroy_func: GLib.DestroyNotify | null): void

    // Class property signals of Anjuta-3.0.Anjuta.Completion

    connect(sigName: "notify::case-sensitive", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::case-sensitive", callback: (($obj: Completion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::case-sensitive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Completion extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Completion

    static name: string
    static $gtype: GObject.GType<Completion>

    // Constructors of Anjuta-3.0.Anjuta.Completion

    constructor(config?: Completion_ConstructProps) 
    _init(config?: Completion_ConstructProps): void
}

interface Dock_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gdl.Dock_ConstructProps {
}

interface Dock extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    name: any

    // Own fields of Anjuta-3.0.Anjuta.Dock

    parent_instance: Gdl.Dock
    priv: DockPriv

    // Owm methods of Anjuta-3.0.Anjuta.Dock

    /**
     * Adds a pane, with optional #AnjutaCommandBar entries, to an AnjutaDock. This
     * method adds a pane with no grip that cannot be closed, floating or iconified.
     * @param pane_name A unique name for this pane
     * @param pane_label Label to display in this pane's grip
     * @param stock_icon Stock icon to display in this pane's grip
     * @param pane The #AnjutaDockPane to add to the dock. The dock takes ownership of 	  the pane object.
     * @param placement A #GdlDockPlacement value indicating where the pane should be 		   placed
     * @param entries #AnjutaCommandBar entries 		 for this pane. Can be %NULL
     * @param user_data User data to pass to the entry callback
     */
    add_pane(pane_name: string, pane_label: string, stock_icon: string, pane: DockPane, placement: Gdl.DockPlacement, entries: CommandBarEntry[] | null, user_data: object | null): boolean
    /**
     * Does the same thing as anjuta_dock_add_pane, but allows GDL dock behavior
     * flags to be specified.
     * @param pane_name A unique name for this pane
     * @param pane_label Label to display in this pane's grip
     * @param stock_icon Stock icon to display in this pane's grip
     * @param pane The #AnjutaDockPane to add to the dock. The dock takes ownership of 	  the pane object.
     * @param placement A #GdlDockPlacement value indicating where the pane should be 		   placed
     * @param entries #AnjutaCommandBar entries 		 for this pane. Can be %NULL
     * @param user_data User data to pass to the entry callback
     * @param behavior Any combination of #GdlDockItemBehavior flags
     */
    add_pane_full(pane_name: string, pane_label: string, stock_icon: string, pane: DockPane, placement: Gdl.DockPlacement, entries: CommandBarEntry[] | null, user_data: object | null, behavior: Gdl.DockItemBehavior): boolean
    get_command_bar(): CommandBar | null
    /**
     * Makes the given pane invisible
     * @param pane Name of the pane to hide
     */
    hide_pane(pane: DockPane): void
    /**
     * Presents the pane to the user by making it the currently active pane in its
     * switcher
     * @param pane Pane to present
     */
    present_pane(pane: DockPane): void
    /**
     * `self` An AnjutaDock
     * Removes a pane from a dock
     * @param pane Name of the pane to remove
     */
    remove_pane(pane: DockPane): void
    /**
     * Adds a pane, with optional #AnjutaCommandBar entries, to an AnjutaDock. This
     * method adds a pane with no grip that cannot be closed, floating or iconified.
     * If there was an old command pane, that pane is removed in favour of the new pane.
     * @param pane_name A unique name for this pane
     * @param pane_label Label to display in this pane's grip
     * @param stock_icon Stock icon to display in this pane's grip
     * @param pane The #AnjutaDockPane to add to the dock. The dock takes ownership of 	  the pane object.
     * @param placement A #GdlDockPlacement value indicating where the pane should be 		   placed
     * @param entries #AnjutaCommandBar entries 		 for this pane. Can be %NULL
     * @param user_data User data to pass to the entry callback
     */
    replace_command_pane(pane_name: string, pane_label: string, stock_icon: string, pane: DockPane, placement: Gdl.DockPlacement, entries: CommandBarEntry[] | null, user_data: object | null): void
    /**
     * Associates an #AnjutaCommandBar with this dock. Command bars can be used to
     * provide different sets of commands based on the currently visible pane.
     * @param command_bar An #AnjutaCommandBar to associate with this dock
     */
    set_command_bar(command_bar: CommandBar): void
    /**
     * Makes the given pane visible
     * @param pane Name of the pane to show
     */
    show_pane(pane: DockPane): void

    // Conflicting methods

    get_toplevel(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Anjuta-3.0.Anjuta.Dock

    connect(sigName: "notify::default-title", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-title", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-title", ...args: any[]): void
    connect(sigName: "notify::floating", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::floating", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::floating", ...args: any[]): void
    connect(sigName: "notify::floatx", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::floatx", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::floatx", ...args: any[]): void
    connect(sigName: "notify::floaty", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::floaty", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::floaty", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::long-name", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::long-name", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::long-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pixbuf-icon", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-icon", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-icon", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Dock extends Gdl.Dock {

    // Own properties of Anjuta-3.0.Anjuta.Dock

    static name: string
    static $gtype: GObject.GType<Dock>

    // Constructors of Anjuta-3.0.Anjuta.Dock

    constructor(config?: Dock_ConstructProps) 
    /**
     * Creates a new AnjutaDock.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new AnjutaDock.
     * @constructor 
     */
    static new(): Dock
    _init(config?: Dock_ConstructProps): void
}

interface DockPane_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.DockPane

    plugin?: Plugin | null
}

/**
 * Signal callback interface for `multiple-selection-changed`
 */
interface DockPane_MultipleSelectionChangedSignalCallback {
    ($obj: DockPane): void
}

/**
 * Signal callback interface for `single-selection-changed`
 */
interface DockPane_SingleSelectionChangedSignalCallback {
    ($obj: DockPane): void
}

interface DockPane {

    // Own properties of Anjuta-3.0.Anjuta.DockPane

    plugin: Plugin

    // Own fields of Anjuta-3.0.Anjuta.DockPane

    parent_instance: GObject.Object
    priv: DockPanePriv

    // Owm methods of Anjuta-3.0.Anjuta.DockPane

    /**
     * Emits the multiple-selection-changed signal.
     */
    notify_multiple_selection_changed(): void
    /**
     * Emits the single-selection-changed signal.
     */
    notify_single_selection_changed(): void
    /**
     * Refreshes the given pane. Subclasses only need to override this method if
     * needed.
     */
    refresh(): void

    // Own virtual methods of Anjuta-3.0.Anjuta.DockPane

    vfunc_multiple_selection_changed(): void
    /**
     * Refreshes the given pane. Subclasses only need to override this method if
     * needed.
     * @virtual 
     */
    vfunc_refresh(): void
    vfunc_single_selection_changed(): void

    // Own signals of Anjuta-3.0.Anjuta.DockPane

    connect(sigName: "multiple-selection-changed", callback: DockPane_MultipleSelectionChangedSignalCallback): number
    connect_after(sigName: "multiple-selection-changed", callback: DockPane_MultipleSelectionChangedSignalCallback): number
    emit(sigName: "multiple-selection-changed", ...args: any[]): void
    connect(sigName: "single-selection-changed", callback: DockPane_SingleSelectionChangedSignalCallback): number
    connect_after(sigName: "single-selection-changed", callback: DockPane_SingleSelectionChangedSignalCallback): number
    emit(sigName: "single-selection-changed", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.DockPane

    connect(sigName: "notify::plugin", callback: (($obj: DockPane, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: DockPane, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plugin", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DockPane extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.DockPane

    static name: string
    static $gtype: GObject.GType<DockPane>

    // Constructors of Anjuta-3.0.Anjuta.DockPane

    constructor(config?: DockPane_ConstructProps) 
    _init(config?: DockPane_ConstructProps): void
}

interface DropEntry_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellEditable_ConstructProps, Gtk.Editable_ConstructProps, Entry_ConstructProps {
}

interface DropEntry extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {

    // Own fields of Anjuta-3.0.Anjuta.DropEntry

    parent_instance: Entry

    // Class property signals of Anjuta-3.0.Anjuta.DropEntry

    connect(sigName: "notify::help-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::help-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::help-text", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-warning", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inner-border", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-pixbuf", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-stock", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-stock", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: DropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DropEntry extends Entry {

    // Own properties of Anjuta-3.0.Anjuta.DropEntry

    static name: string
    static $gtype: GObject.GType<DropEntry>

    // Constructors of Anjuta-3.0.Anjuta.DropEntry

    constructor(config?: DropEntry_ConstructProps) 
    constructor() 
    static new(): DropEntry
    _init(config?: DropEntry_ConstructProps): void
}

interface Entry_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellEditable_ConstructProps, Gtk.Editable_ConstructProps, Gtk.Entry_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.Entry

    help_text?: string | null
}

interface Entry extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {

    // Own properties of Anjuta-3.0.Anjuta.Entry

    help_text: string

    // Own fields of Anjuta-3.0.Anjuta.Entry

    parent_instance: Gtk.Entry
    priv: EntryPriv

    // Owm methods of Anjuta-3.0.Anjuta.Entry

    dup_text(): string
    get_text(): string
    is_showing_help_text(): boolean
    /**
     * Sets the text on the entry, showing the help text if the text is empty.
     * @param text The new text
     */
    set_text(text: string): void

    // Class property signals of Anjuta-3.0.Anjuta.Entry

    connect(sigName: "notify::help-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::help-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::help-text", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-warning", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inner-border", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-pixbuf", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-stock", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-stock", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Entry extends Gtk.Entry {

    // Own properties of Anjuta-3.0.Anjuta.Entry

    static name: string
    static $gtype: GObject.GType<Entry>

    // Constructors of Anjuta-3.0.Anjuta.Entry

    constructor(config?: Entry_ConstructProps) 
    /**
     * Creates a new AnjutaEntry.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new AnjutaEntry.
     * @constructor 
     */
    static new(): Entry
    _init(config?: Entry_ConstructProps): void
}

interface EnvironmentEditor_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Bin_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface EnvironmentEditor_ChangedSignalCallback {
    ($obj: EnvironmentEditor): void
}

interface EnvironmentEditor extends Atk.ImplementorIface, Gtk.Buildable {

    // Owm methods of Anjuta-3.0.Anjuta.EnvironmentEditor

    reset(): void
    set_variable(variable: string): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Anjuta-3.0.Anjuta.EnvironmentEditor

    vfunc_changed(): void

    // Own signals of Anjuta-3.0.Anjuta.EnvironmentEditor

    connect(sigName: "changed", callback: EnvironmentEditor_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: EnvironmentEditor_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.EnvironmentEditor

    connect(sigName: "notify::border-width", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EnvironmentEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EnvironmentEditor extends Gtk.Bin {

    // Own properties of Anjuta-3.0.Anjuta.EnvironmentEditor

    static name: string
    static $gtype: GObject.GType<EnvironmentEditor>

    // Constructors of Anjuta-3.0.Anjuta.EnvironmentEditor

    constructor(config?: EnvironmentEditor_ConstructProps) 
    constructor() 
    static new(): EnvironmentEditor
    _init(config?: EnvironmentEditor_ConstructProps): void
}

interface FileDropEntry_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellEditable_ConstructProps, Gtk.Editable_ConstructProps, DropEntry_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.FileDropEntry

    relative_path?: string | null
}

interface FileDropEntry extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {

    // Own properties of Anjuta-3.0.Anjuta.FileDropEntry

    relative_path: string

    // Own fields of Anjuta-3.0.Anjuta.FileDropEntry

    parent_instance: DropEntry
    priv: FileDropEntryPriv

    // Owm methods of Anjuta-3.0.Anjuta.FileDropEntry

    set_relative_path(path: string): void

    // Class property signals of Anjuta-3.0.Anjuta.FileDropEntry

    connect(sigName: "notify::relative-path", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relative-path", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relative-path", ...args: any[]): void
    connect(sigName: "notify::help-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::help-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::help-text", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-warning", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inner-border", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-pixbuf", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-stock", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-stock", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: FileDropEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileDropEntry extends DropEntry {

    // Own properties of Anjuta-3.0.Anjuta.FileDropEntry

    static name: string
    static $gtype: GObject.GType<FileDropEntry>

    // Constructors of Anjuta-3.0.Anjuta.FileDropEntry

    constructor(config?: FileDropEntry_ConstructProps) 
    constructor() 
    static new(): FileDropEntry
    _init(config?: FileDropEntry_ConstructProps): void
}

interface FileList_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.FileList

    relative_path?: string | null
    show_add_button?: boolean | null
}

interface FileList extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Anjuta-3.0.Anjuta.FileList

    relative_path: string
    show_add_button: boolean

    // Own fields of Anjuta-3.0.Anjuta.FileList

    parent_instance: Gtk.Box
    priv: FileListPriv

    // Owm methods of Anjuta-3.0.Anjuta.FileList

    clear(): void
    set_relative_path(path: string): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Anjuta-3.0.Anjuta.FileList

    connect(sigName: "notify::relative-path", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relative-path", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relative-path", ...args: any[]): void
    connect(sigName: "notify::show-add-button", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-add-button", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-add-button", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: FileList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileList extends Gtk.Box {

    // Own properties of Anjuta-3.0.Anjuta.FileList

    static name: string
    static $gtype: GObject.GType<FileList>

    // Constructors of Anjuta-3.0.Anjuta.FileList

    constructor(config?: FileList_ConstructProps) 
    constructor() 
    static new(): FileList

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: FileList_ConstructProps): void
}

interface LanguageProvider_ConstructProps extends GObject.Object_ConstructProps {
}

interface LanguageProvider {

    // Own fields of Anjuta-3.0.Anjuta.LanguageProvider

    parent: GObject.Object
    priv: LanguageProviderPriv

    // Owm methods of Anjuta-3.0.Anjuta.LanguageProvider

    /**
     * Complete the function name
     * @param iprov IAnjutaProvider object
     * @param iter the cursor
     * @param data the ProposalData
     */
    activate(iprov: GObject.Object, iter: GObject.Object, data: object | null): void
    /**
     * Searches for a calltip context
     * @param itip whether a tooltip is crrently shown
     * @param iter current cursor position
     * @param scope_context_ch language-specific context characters                    the end is marked with a '0' character
     */
    get_calltip_context(itip: GObject.Object, iter: GObject.Object, scope_context_ch: string): string
    /**
     * Search for the current typed word
     * @param editor IAnjutaEditor object
     * @param iter current cursor position
     * @param start_iter return location for the start_iter (if a preword was found)
     * @param word_characters 
     */
    get_pre_word(editor: GObject.Object, iter: GObject.Object, start_iter: GObject.Object, word_characters: string): string | null
    /**
     * Install the settings for AnjutaLanguageProvider
     * @param ieditor IAnjutaEditor object
     * @param settings the settings
     */
    install(ieditor: GObject.Object, settings: Gio.Settings): void
    /**
     * Show completion for the context at position `iter`. The provider should
     * call anjuta_language_provider_proposals here to add proposals to the list.
     * @param iprov IAnjutaProvider object
     * @param cursor the text iter where the provider should be populated
     */
    populate(iprov: GObject.Object, cursor: GObject.Object): void

    // Class property signals of Anjuta-3.0.Anjuta.LanguageProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LanguageProvider extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.LanguageProvider

    static name: string
    static $gtype: GObject.GType<LanguageProvider>

    // Constructors of Anjuta-3.0.Anjuta.LanguageProvider

    constructor(config?: LanguageProvider_ConstructProps) 
    _init(config?: LanguageProvider_ConstructProps): void
}

interface Launcher_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `busy`
 */
interface Launcher_BusySignalCallback {
    ($obj: Launcher, busy: boolean): void
}

/**
 * Signal callback interface for `child-exited`
 */
interface Launcher_ChildExitedSignalCallback {
    ($obj: Launcher, child_pid: number, status: number, time: number): void
}

interface Launcher {

    // Own fields of Anjuta-3.0.Anjuta.Launcher

    parent: GObject.Object
    priv: LauncherPriv

    // Owm methods of Anjuta-3.0.Anjuta.Launcher

    /**
     * Gets the Process ID of the child being executed.
     */
    get_child_pid(): number
    /**
     * Tells if the laucher is currently executing any command.
     */
    is_busy(): boolean
    /**
     * Resets the launcher and kills (SIGTERM) current process, if it is still
     * executing.
     */
    reset(): void
    /**
     * Sends a string to TTY input of the process currently being executed.
     * Mostly useful for entering passwords and other inputs which are directly
     * read from TTY input of the process.
     * @param input_str The string to send to PTY of the process.
     */
    send_ptyin(input_str: string): void
    /**
     * Sends a string to Standard input of the process currently being executed.
     * @param input_str The string to send to STDIN of the process.
     */
    send_stdin(input_str: string): void
    /**
     * Sends a EOF to Standard input of the process currently being executed.
     */
    send_stdin_eof(): void
    /**
     * Sets if output should buffered or not. By default, it is buffered.
     * @param buffered buffer output.
     */
    set_buffered_output(buffered: boolean): boolean
    /**
     * Set if output is checked for a password prompti. A special dialog box
     * is use to enter it in this case. By default, this behavior is enabled.
     * @param check_passwd check for password.
     */
    set_check_passwd_prompt(check_passwd: boolean): boolean
    /**
     * Sets the character set to use for Input/Output with the process.
     * @param charset Character set to use for Input/Output with the process.
     */
    set_encoding(charset: string): void
    /**
     * Sets if input (those given in STDIN) should enabled or disabled. By default,
     * it is disabled.
     * @param echo_on Echo ON flag.
     */
    set_terminal_echo(echo_on: boolean): boolean
    /**
     * When this flag is set, al i/o channels are closed and the child-exit
     * signal is emitted as soon as the child exit. By default, or when this
     * flag is clear, the launcher object wait until the i/o channels are
     * closed.
     * @param terminate_on_exit terminate on exit flag
     */
    set_terminate_on_exit(terminate_on_exit: boolean): boolean
    /**
     * Sends a kernel signal to the process that is being executed.
     * @param sig kernel signal ID (e.g. SIGTERM).
     */
    signal(sig: number): void

    // Own virtual methods of Anjuta-3.0.Anjuta.Launcher

    vfunc_busy(busy_flag: boolean): void
    vfunc_child_exited(child_pid: number, exit_status: number, time_taken_in_seconds: number): void

    // Own signals of Anjuta-3.0.Anjuta.Launcher

    connect(sigName: "busy", callback: Launcher_BusySignalCallback): number
    connect_after(sigName: "busy", callback: Launcher_BusySignalCallback): number
    emit(sigName: "busy", busy: boolean, ...args: any[]): void
    connect(sigName: "child-exited", callback: Launcher_ChildExitedSignalCallback): number
    connect_after(sigName: "child-exited", callback: Launcher_ChildExitedSignalCallback): number
    emit(sigName: "child-exited", child_pid: number, status: number, time: number, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Launcher

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Launcher extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Launcher

    static name: string
    static $gtype: GObject.GType<Launcher>

    // Constructors of Anjuta-3.0.Anjuta.Launcher

    constructor(config?: Launcher_ConstructProps) 
    /**
     * Sets if input (those given in STDIN) should enabled or disabled. By default,
     * it is disabled.
     * @constructor 
     */
    constructor() 
    /**
     * Sets if input (those given in STDIN) should enabled or disabled. By default,
     * it is disabled.
     * @constructor 
     */
    static new(): Launcher
    _init(config?: Launcher_ConstructProps): void
}

interface PkgConfigChooser_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, Gtk.TreeView_ConstructProps {
}

/**
 * Signal callback interface for `package-activated`
 */
interface PkgConfigChooser_PackageActivatedSignalCallback {
    ($obj: PkgConfigChooser, package: string): void
}

/**
 * Signal callback interface for `package-deactivated`
 */
interface PkgConfigChooser_PackageDeactivatedSignalCallback {
    ($obj: PkgConfigChooser, package: string): void
}

interface PkgConfigChooser extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own fields of Anjuta-3.0.Anjuta.PkgConfigChooser

    parent_instance: Gtk.TreeView
    priv: PkgConfigChooserPrivate

    // Owm methods of Anjuta-3.0.Anjuta.PkgConfigChooser

    get_selected_package(): string
    show_active_column(show_column: boolean): void
    show_active_only(show_selected: boolean): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Anjuta-3.0.Anjuta.PkgConfigChooser

    vfunc_package_activated(package: string): void
    vfunc_package_deactivated(package: string): void

    // Own signals of Anjuta-3.0.Anjuta.PkgConfigChooser

    connect(sigName: "package-activated", callback: PkgConfigChooser_PackageActivatedSignalCallback): number
    connect_after(sigName: "package-activated", callback: PkgConfigChooser_PackageActivatedSignalCallback): number
    emit(sigName: "package-activated", package: string, ...args: any[]): void
    connect(sigName: "package-deactivated", callback: PkgConfigChooser_PackageDeactivatedSignalCallback): number
    connect_after(sigName: "package-deactivated", callback: PkgConfigChooser_PackageDeactivatedSignalCallback): number
    emit(sigName: "package-deactivated", package: string, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.PkgConfigChooser

    connect(sigName: "notify::activate-on-single-click", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rules-hint", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: PkgConfigChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PkgConfigChooser extends Gtk.TreeView {

    // Own properties of Anjuta-3.0.Anjuta.PkgConfigChooser

    static name: string
    static $gtype: GObject.GType<PkgConfigChooser>

    // Constructors of Anjuta-3.0.Anjuta.PkgConfigChooser

    constructor(config?: PkgConfigChooser_ConstructProps) 
    constructor() 
    static new(): PkgConfigChooser
    _init(config?: PkgConfigChooser_ConstructProps): void
}

interface PkgScanner_ConstructProps extends AsyncCommand_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.PkgScanner

    package?: string | null
    version?: string | null
}

interface PkgScanner {

    // Own properties of Anjuta-3.0.Anjuta.PkgScanner

    package: string
    version: string

    // Own fields of Anjuta-3.0.Anjuta.PkgScanner

    parent_instance: AsyncCommand
    priv: PkgScannerPrivate

    // Owm methods of Anjuta-3.0.Anjuta.PkgScanner

    get_package(): string
    get_version(): string

    // Class property signals of Anjuta-3.0.Anjuta.PkgScanner

    connect(sigName: "notify::package", callback: (($obj: PkgScanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package", callback: (($obj: PkgScanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::package", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: PkgScanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: PkgScanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PkgScanner extends AsyncCommand {

    // Own properties of Anjuta-3.0.Anjuta.PkgScanner

    static name: string
    static $gtype: GObject.GType<PkgScanner>

    // Constructors of Anjuta-3.0.Anjuta.PkgScanner

    constructor(config?: PkgScanner_ConstructProps) 
    constructor(package: string, version: string) 
    static new(package: string, version: string): PkgScanner
    _init(config?: PkgScanner_ConstructProps): void
}

interface Plugin_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.Plugin

    /**
     * The #AnjutaShell object associated with this plugin
     */
    shell?: Shell | null
}

/**
 * Signal callback interface for `activated`
 */
interface Plugin_ActivatedSignalCallback {
    ($obj: Plugin): void
}

/**
 * Signal callback interface for `deactivated`
 */
interface Plugin_DeactivatedSignalCallback {
    ($obj: Plugin): void
}

interface Plugin {

    // Own fields of Anjuta-3.0.Anjuta.Plugin

    parent: GObject.Object
    shell: Shell

    // Owm methods of Anjuta-3.0.Anjuta.Plugin

    /**
     * Activates the plugin by calling activate() virtual method. All plugins
     * should derive their classes from this virtual class and implement this
     * method.
     * If the plugin implements IAnjutaPreferences, it is prompted to install
     * it's preferences.
     */
    activate(): boolean
    /**
     * Adds a watch for `name` value. When the value is added in shell, the `added`
     * callback will be called and when it is removed, the `removed` callback will
     * be called. The returned ID is used to remove the watch later.
     * @param name Name of the value to watch.
     * @param added Callback to call when the value is added.
     * @param removed Callback to call when the value is removed.
     */
    add_watch(name: string, added: PluginValueAdded, removed: PluginValueRemoved): number
    /**
     * Deactivates the plugin by calling deactivate() virtual method. All plugins
     * should derive their classes from this virtual class and implement this
     * method.
     */
    deactivate(): boolean
    get_shell(): Shell
    /**
     * Returns %TRUE if the plugin has been activated.
     */
    is_active(): boolean
    /**
     * Removes the watch represented by `id` (which was returned by
     * anjuta_plugin_add_watch()).
     * @param id Watch id to remove.
     * @param send_remove If true, calls value_removed callback.
     */
    remove_watch(id: number, send_remove: boolean): void

    // Own virtual methods of Anjuta-3.0.Anjuta.Plugin

    /**
     * Activates the plugin by calling activate() virtual method. All plugins
     * should derive their classes from this virtual class and implement this
     * method.
     * If the plugin implements IAnjutaPreferences, it is prompted to install
     * it's preferences.
     * @virtual 
     */
    vfunc_activate(): boolean
    vfunc_activated(): void
    /**
     * Deactivates the plugin by calling deactivate() virtual method. All plugins
     * should derive their classes from this virtual class and implement this
     * method.
     * @virtual 
     */
    vfunc_deactivate(): boolean
    vfunc_deactivated(): void

    // Own signals of Anjuta-3.0.Anjuta.Plugin

    connect(sigName: "activated", callback: Plugin_ActivatedSignalCallback): number
    connect_after(sigName: "activated", callback: Plugin_ActivatedSignalCallback): number
    emit(sigName: "activated", ...args: any[]): void
    connect(sigName: "deactivated", callback: Plugin_DeactivatedSignalCallback): number
    connect_after(sigName: "deactivated", callback: Plugin_DeactivatedSignalCallback): number
    emit(sigName: "deactivated", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Plugin

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Plugin extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Plugin

    static name: string
    static $gtype: GObject.GType<Plugin>

    // Constructors of Anjuta-3.0.Anjuta.Plugin

    constructor(config?: Plugin_ConstructProps) 
    _init(config?: Plugin_ConstructProps): void
}

interface PluginHandle_ConstructProps extends GObject.Object_ConstructProps {
}

interface PluginHandle {

    // Own properties of Anjuta-3.0.Anjuta.PluginHandle

    readonly about: string
    readonly can_load: boolean
    readonly can_unload: boolean
    readonly checked: boolean
    readonly dependencies: object
    readonly dependency_names: object
    readonly dependents: object
    readonly description: object
    readonly icon_path: string
    readonly id: string
    readonly interfaces: object
    readonly language: string
    readonly name: string
    readonly path: string
    readonly resident: boolean
    readonly resolve_pass: number
    readonly user_activatable: boolean

    // Own fields of Anjuta-3.0.Anjuta.PluginHandle

    parent_instance: GObject.Object
    priv: PluginHandlePriv

    // Owm methods of Anjuta-3.0.Anjuta.PluginHandle

    get_about(): string
    get_can_load(): boolean
    get_can_unload(): boolean
    get_checked(): boolean
    get_description(): PluginDescription
    get_icon_path(): string
    get_id(): string
    get_language(): string
    get_name(): string
    get_path(): string
    get_resident(): boolean
    get_resolve_pass(): number
    get_user_activatable(): boolean
    set_can_load(can_load: boolean): void
    set_can_unload(can_unload: boolean): void
    set_checked(checked: boolean): void
    set_resolve_pass(resolve_pass: boolean): void
    unresolve_dependencies(): void

    // Class property signals of Anjuta-3.0.Anjuta.PluginHandle

    connect(sigName: "notify::about", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::about", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::about", ...args: any[]): void
    connect(sigName: "notify::can-load", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-load", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-load", ...args: any[]): void
    connect(sigName: "notify::can-unload", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-unload", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-unload", ...args: any[]): void
    connect(sigName: "notify::checked", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checked", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::checked", ...args: any[]): void
    connect(sigName: "notify::dependencies", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dependencies", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dependencies", ...args: any[]): void
    connect(sigName: "notify::dependency-names", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dependency-names", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dependency-names", ...args: any[]): void
    connect(sigName: "notify::dependents", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dependents", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dependents", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::icon-path", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-path", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-path", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interfaces", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::resident", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resident", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resident", ...args: any[]): void
    connect(sigName: "notify::resolve-pass", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolve-pass", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resolve-pass", ...args: any[]): void
    connect(sigName: "notify::user-activatable", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-activatable", callback: (($obj: PluginHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-activatable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PluginHandle extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.PluginHandle

    static name: string
    static $gtype: GObject.GType<PluginHandle>

    // Constructors of Anjuta-3.0.Anjuta.PluginHandle

    constructor(config?: PluginHandle_ConstructProps) 
    constructor(plugin_desc_path: string) 
    static new(plugin_desc_path: string): PluginHandle
    _init(config?: PluginHandle_ConstructProps): void
}

interface PluginManager_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.PluginManager

    shell?: GObject.Object | null
    status?: Status | null
}

/**
 * Signal callback interface for `plugin-activated`
 */
interface PluginManager_PluginActivatedSignalCallback {
    ($obj: PluginManager, object: object | null, p0: Plugin): void
}

/**
 * Signal callback interface for `plugin-deactivated`
 */
interface PluginManager_PluginDeactivatedSignalCallback {
    ($obj: PluginManager, object: object | null, p0: Plugin): void
}

interface PluginManager {

    // Own properties of Anjuta-3.0.Anjuta.PluginManager

    readonly activated_plugins: object
    readonly available_plugins: object
    readonly profiles: object
    shell: GObject.Object
    status: Status

    // Own fields of Anjuta-3.0.Anjuta.PluginManager

    parent_instance: GObject.Object
    priv: PluginManagerPriv

    // Owm methods of Anjuta-3.0.Anjuta.PluginManager

    /**
     * Get the list of plugins loaded when there is a choice between several
     * ones without asking the user.
     * 
     * The list format is returned as a string with the format detailed in
     * anjuta_plugin_manager_set_remembered_plugins().
     */
    get_remembered_plugins(): string
    /**
     * Searches if a currently loaded plugins implements
     * the given interface.
     * @param iface_name The interface implemented by the object to be found
     */
    is_active_plugin(iface_name: string): boolean
    /**
     * Set the list of plugins loaded when there is a choice between several
     * ones without asking the user.
     * The list is a string composed of elements separated by ';'. Each element
     * is defined with "key=value", where key is the list of possible plugins and
     * the value is the choosen plugin.
     * 
     * By the example the following element
     * <programlisting>
     *   anjuta-symbol-browser:SymbolBrowserPlugin,anjuta-symbol-db:SymbolDBPlugin,=anjuta-symbol-db:SymbolDBPlugin;
     * </programlisting>
     * means if Anjuta has to choose between SymbolBrowserPlugin and
     * SymbolDBPlugin, it will choose SymbolDBPlugin.
     * @param remembered_plugins A list of prefered plugins
     */
    set_remembered_plugins(remembered_plugins: string): void
    /**
     * Unload all plugins. Do not take care of the dependencies because all plugins
     * are unloaded anyway.
     */
    unload_all_plugins(): void
    /**
     * Unload the corresponding plugin. The plugin has to be loaded.
     * @param plugin_object A #AnjutaPlugin object
     */
    unload_plugin(plugin_object: GObject.Object): boolean
    /**
     * Unload the plugin corresponding to the given handle. If the plugin is
     * already unloaded, nothing will be done.
     * @param handle A #AnjutaPluginHandle
     */
    unload_plugin_by_handle(handle: PluginHandle): boolean

    // Own virtual methods of Anjuta-3.0.Anjuta.PluginManager

    vfunc_plugin_activated(handle: PluginHandle, plugin: GObject.Object): void
    vfunc_plugin_deactivated(handle: PluginHandle, plugin: GObject.Object): void

    // Own signals of Anjuta-3.0.Anjuta.PluginManager

    connect(sigName: "plugin-activated", callback: PluginManager_PluginActivatedSignalCallback): number
    connect_after(sigName: "plugin-activated", callback: PluginManager_PluginActivatedSignalCallback): number
    emit(sigName: "plugin-activated", object: object | null, p0: Plugin, ...args: any[]): void
    connect(sigName: "plugin-deactivated", callback: PluginManager_PluginDeactivatedSignalCallback): number
    connect_after(sigName: "plugin-deactivated", callback: PluginManager_PluginDeactivatedSignalCallback): number
    emit(sigName: "plugin-deactivated", object: object | null, p0: Plugin, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.PluginManager

    connect(sigName: "notify::activated-plugins", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activated-plugins", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activated-plugins", ...args: any[]): void
    connect(sigName: "notify::available-plugins", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-plugins", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::available-plugins", ...args: any[]): void
    connect(sigName: "notify::profiles", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::profiles", ...args: any[]): void
    connect(sigName: "notify::shell", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shell", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shell", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PluginManager extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.PluginManager

    static name: string
    static $gtype: GObject.GType<PluginManager>

    // Constructors of Anjuta-3.0.Anjuta.PluginManager

    constructor(config?: PluginManager_ConstructProps) 
    _init(config?: PluginManager_ConstructProps): void
}

interface Preferences_ConstructProps extends GObject.Object_ConstructProps {
}

interface Preferences {

    // Own fields of Anjuta-3.0.Anjuta.Preferences

    parent: GObject.Object

    // Owm methods of Anjuta-3.0.Anjuta.Preferences

    add_from_builder(builder: Gtk.Builder, settings: Gio.Settings, glade_widget_name: string, stitle: string, icon_filename: string): void
    is_dialog_created(): boolean
    /**
     * This will register all the properties names of the format described above
     * without considering the UI. Useful if you have the widgets shown elsewhere
     * but you want them to be part of preferences system.
     * @param builder GtkBuilder object containing the properties widgets.
     * @param settings 
     * @param parent Parent widget in the builder object
     */
    register_all_properties_from_builder_xml(builder: Gtk.Builder, settings: Gio.Settings, parent: Gtk.Widget): void
    /**
     * This registers only one widget. The widget could be shown elsewhere.
     * The widget needs to fulfill the properties described in
     * #anjuta_preferences_add_page documentation.
     * @param settings the #GSettings object associated with that property
     * @param object Widget to register
     * @param key Property key
     */
    register_property(settings: Gio.Settings, object: Gtk.Widget, key: string): boolean
    remove_page(page_name: string): void

    // Class property signals of Anjuta-3.0.Anjuta.Preferences

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Preferences extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Preferences

    static name: string
    static $gtype: GObject.GType<Preferences>

    // Constructors of Anjuta-3.0.Anjuta.Preferences

    constructor(config?: Preferences_ConstructProps) 
    /**
     * Creates a new #AnjutaPreferences object
     * @constructor 
     * @param plugin_manager #AnjutaPluginManager to be used
     * @param common_schema_id Common schema id used for key starting with .
     */
    constructor(plugin_manager: PluginManager, common_schema_id: string) 
    /**
     * Creates a new #AnjutaPreferences object
     * @constructor 
     * @param plugin_manager #AnjutaPluginManager to be used
     * @param common_schema_id Common schema id used for key starting with .
     */
    static new(plugin_manager: PluginManager, common_schema_id: string): Preferences
    _init(config?: Preferences_ConstructProps): void
}

interface PreferencesDialog_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Dialog_ConstructProps {
}

interface PreferencesDialog extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    window: any

    // Own fields of Anjuta-3.0.Anjuta.PreferencesDialog

    parent: Gtk.Dialog
    priv: PreferencesDialogPrivate

    // Owm methods of Anjuta-3.0.Anjuta.PreferencesDialog

    /**
     * Adds a widget page in preferences dialog. Name and icon appears
     * on the left icon list where differnt pages are selected.
     * @param name Name of the preferences page.
     * @param title Title of the page
     * @param icon Icon file name.
     * @param page page widget.
     */
    add_page(name: string, title: string, icon: GdkPixbuf.Pixbuf, page: Gtk.Widget): void
    /**
     * Removes a preferences page.
     * @param title Name of the preferences page.
     */
    remove_page(title: string): void

    // Conflicting methods

    mnemonic_activate(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Anjuta-3.0.Anjuta.PreferencesDialog

    connect(sigName: "notify::use-header-bar", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: PreferencesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PreferencesDialog extends Gtk.Dialog {

    // Own properties of Anjuta-3.0.Anjuta.PreferencesDialog

    static name: string
    static $gtype: GObject.GType<PreferencesDialog>

    // Constructors of Anjuta-3.0.Anjuta.PreferencesDialog

    constructor(config?: PreferencesDialog_ConstructProps) 
    /**
     * Creates a new #AnjutaPreferencesDialog object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AnjutaPreferencesDialog object.
     * @constructor 
     */
    static new(): PreferencesDialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     */
    static new(): Gtk.Dialog
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: PreferencesDialog_ConstructProps): void
}

interface Profile_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.Profile

    plugin_manager?: PluginManager | null
    profile_name?: string | null
    sync_file?: Gio.File | null
}

/**
 * Signal callback interface for `changed`
 */
interface Profile_ChangedSignalCallback {
    ($obj: Profile): void
}

/**
 * Signal callback interface for `descoped`
 */
interface Profile_DescopedSignalCallback {
    ($obj: Profile): void
}

/**
 * Signal callback interface for `plugin-added`
 */
interface Profile_PluginAddedSignalCallback {
    ($obj: Profile, plugin: object | null): void
}

/**
 * Signal callback interface for `plugin-removed`
 */
interface Profile_PluginRemovedSignalCallback {
    ($obj: Profile, plugin: object | null): void
}

/**
 * Signal callback interface for `scoped`
 */
interface Profile_ScopedSignalCallback {
    ($obj: Profile): void
}

interface Profile {

    // Own properties of Anjuta-3.0.Anjuta.Profile

    plugin_manager: PluginManager
    profile_name: string
    sync_file: Gio.File

    // Own fields of Anjuta-3.0.Anjuta.Profile

    parent_instance: GObject.Object
    priv: ProfilePriv

    // Owm methods of Anjuta-3.0.Anjuta.Profile

    /**
     * Add one plugin into the profile plugin list.
     * @param plugin a #AnjutaPluginHandle.
     */
    add_plugin(plugin: PluginHandle): void
    /**
     * Add all plugins inscribed in the xml file into the profile plugin list.
     * @param profile_xml_file xml file containing plugin list.
     * @param exclude_from_sync %TRUE if these plugins shouldn't be saved in user session.
     */
    add_plugins_from_xml(profile_xml_file: Gio.File, exclude_from_sync: boolean): boolean
    /**
     * Get the profile name.
     */
    get_name(): string
    /**
     * Check if a plugin is included in the profile plugin list.
     * @param plugin a #AnjutaPluginHandle
     */
    has_plugin(plugin: PluginHandle): boolean
    /**
     * Load the profile
     */
    load(): boolean
    /**
     * Remove one plugin from the profile plugin list.
     * @param plugin a #AnjutaPluginHandle.
     */
    remove_plugin(plugin: PluginHandle): void
    /**
     * Define the file used to save plugins list.
     * @param sync_file file used to save profile.
     */
    set_sync_file(sync_file: Gio.File): void
    /**
     * Save the current plugins list in the xml file set with anjuta_profile_set_sync_file().
     */
    sync(): boolean
    /**
     * Unload the profile
     */
    unload(): boolean

    // Own virtual methods of Anjuta-3.0.Anjuta.Profile

    vfunc_changed(): void
    vfunc_descoped(): void
    vfunc_plugin_added(plugin: PluginHandle): void
    vfunc_plugin_removed(plugin: PluginHandle): void
    vfunc_scoped(): void

    // Own signals of Anjuta-3.0.Anjuta.Profile

    connect(sigName: "changed", callback: Profile_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Profile_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "descoped", callback: Profile_DescopedSignalCallback): number
    connect_after(sigName: "descoped", callback: Profile_DescopedSignalCallback): number
    emit(sigName: "descoped", ...args: any[]): void
    connect(sigName: "plugin-added", callback: Profile_PluginAddedSignalCallback): number
    connect_after(sigName: "plugin-added", callback: Profile_PluginAddedSignalCallback): number
    emit(sigName: "plugin-added", plugin: object | null, ...args: any[]): void
    connect(sigName: "plugin-removed", callback: Profile_PluginRemovedSignalCallback): number
    connect_after(sigName: "plugin-removed", callback: Profile_PluginRemovedSignalCallback): number
    emit(sigName: "plugin-removed", plugin: object | null, ...args: any[]): void
    connect(sigName: "scoped", callback: Profile_ScopedSignalCallback): number
    connect_after(sigName: "scoped", callback: Profile_ScopedSignalCallback): number
    emit(sigName: "scoped", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Profile

    connect(sigName: "notify::plugin-manager", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin-manager", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plugin-manager", ...args: any[]): void
    connect(sigName: "notify::profile-name", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profile-name", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::profile-name", ...args: any[]): void
    connect(sigName: "notify::sync-file", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-file", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-file", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Stores a plugin list.
 * @class 
 */
class Profile extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Profile

    static name: string
    static $gtype: GObject.GType<Profile>

    // Constructors of Anjuta-3.0.Anjuta.Profile

    constructor(config?: Profile_ConstructProps) 
    /**
     * Create a new profile.
     * @constructor 
     * @param name the new profile name.
     * @param plugin_manager the #AnjutaPluginManager used by this profile.
     */
    constructor(name: string, plugin_manager: PluginManager) 
    /**
     * Create a new profile.
     * @constructor 
     * @param name the new profile name.
     * @param plugin_manager the #AnjutaPluginManager used by this profile.
     */
    static new(name: string, plugin_manager: PluginManager): Profile
    _init(config?: Profile_ConstructProps): void
}

interface ProfileManager_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.ProfileManager

    plugin_manager?: PluginManager | null
}

/**
 * Signal callback interface for `profile-popped`
 */
interface ProfileManager_ProfilePoppedSignalCallback {
    ($obj: ProfileManager, profile: Profile): void
}

/**
 * Signal callback interface for `profile-pushed`
 */
interface ProfileManager_ProfilePushedSignalCallback {
    ($obj: ProfileManager, profile: Profile): void
}

interface ProfileManager {

    // Own properties of Anjuta-3.0.Anjuta.ProfileManager

    plugin_manager: PluginManager

    // Own fields of Anjuta-3.0.Anjuta.ProfileManager

    parent_instance: GObject.Object
    priv: ProfileManagerPriv

    // Owm methods of Anjuta-3.0.Anjuta.ProfileManager

    /**
     * Close the #AnjutaProfileManager causing "descoped" to be emitted and
     * all queued and previous profiles to be released. This function is to be used
     * when destroying an Anjuta instance.
     */
    close(): void
    /**
     * Freeze the plugin manager. In this state, plugins can be added and removed
     * from the stack without triggering any change in the current profile. It is
     * possible to freeze the manager several times but it will be back in its normal
     * state only after as much call of anjuta_profile_manager_thaw().
     */
    freeze(): void
    /**
     * Return the current profile.
     */
    get_current(): Profile | null
    /**
     * Remove a profile from the profile manager stack. If the manager is not
     * frozen, only the current profile can be removed. It will be unloaded and
     * the previous profile will be loaded.
     * If the manager is frozen, the current profile or the last pushed profile
     * can be removed.
     * @param profile the #AnjutaProfile to remove.
     */
    pop(profile: Profile): boolean
    /**
     * Add a new profile at the top of the profile manager stack. If the profile
     * manager is not frozen, this new profile will be loaded immediatly and
     * become the current profile.
     * @param profile the new #AnjutaProfile.
     */
    push(profile: Profile): boolean
    /**
     * Put back the plugin manager in its normal mode after calling
     * anjuta_profile_manager_freeze(). It will load a new profile if one has been
     * added while the manager was frozen.
     */
    thaw(): boolean

    // Own virtual methods of Anjuta-3.0.Anjuta.ProfileManager

    vfunc_profile_popped(profile: Profile): void
    vfunc_profile_pushed(profile: Profile): void

    // Own signals of Anjuta-3.0.Anjuta.ProfileManager

    connect(sigName: "profile-popped", callback: ProfileManager_ProfilePoppedSignalCallback): number
    connect_after(sigName: "profile-popped", callback: ProfileManager_ProfilePoppedSignalCallback): number
    emit(sigName: "profile-popped", profile: Profile, ...args: any[]): void
    connect(sigName: "profile-pushed", callback: ProfileManager_ProfilePushedSignalCallback): number
    connect_after(sigName: "profile-pushed", callback: ProfileManager_ProfilePushedSignalCallback): number
    emit(sigName: "profile-pushed", profile: Profile, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.ProfileManager

    connect(sigName: "notify::plugin-manager", callback: (($obj: ProfileManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin-manager", callback: (($obj: ProfileManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plugin-manager", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Stores stack of #AnjutaProfile.
 * @class 
 */
class ProfileManager extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.ProfileManager

    static name: string
    static $gtype: GObject.GType<ProfileManager>

    // Constructors of Anjuta-3.0.Anjuta.ProfileManager

    constructor(config?: ProfileManager_ConstructProps) 
    /**
     * Create a new profile manager.
     * @constructor 
     * @param plugin_manager the #AnjutaPluginManager used by all profiles.
     */
    constructor(plugin_manager: PluginManager) 
    /**
     * Create a new profile manager.
     * @constructor 
     * @param plugin_manager the #AnjutaPluginManager used by all profiles.
     */
    static new(plugin_manager: PluginManager): ProfileManager
    _init(config?: ProfileManager_ConstructProps): void
}

interface ProjectNode_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.ProjectNode

    file?: Gio.File | null
    name?: string | null
    state?: ProjectNodeState | null
    type?: ProjectNodeType | null
}

/**
 * Signal callback interface for `loaded`
 */
interface ProjectNode_LoadedSignalCallback {
    ($obj: ProjectNode, object: object | null, p0: GLib.Error): void
}

/**
 * Signal callback interface for `updated`
 */
interface ProjectNode_UpdatedSignalCallback {
    ($obj: ProjectNode, object: object | null, p0: GLib.Error): void
}

interface ProjectNode {

    // Own properties of Anjuta-3.0.Anjuta.ProjectNode

    file: Gio.File
    name: string
    state: ProjectNodeState
    type: ProjectNodeType

    // Own fields of Anjuta-3.0.Anjuta.ProjectNode

    parent_instance: GObject.InitiallyUnowned

    // Owm methods of Anjuta-3.0.Anjuta.ProjectNode

    append(node: ProjectNode): ProjectNode
    check(): void
    children_foreach(func: ProjectNodeForeachFunc): void
    children_traverse(func: ProjectNodeTraverseFunc): ProjectNode
    clear_state(state: ProjectNodeState): boolean
    dump(): void
    first_child(): ProjectNode
    foreach(order: GLib.TraverseType, func: ProjectNodeForeachFunc): void
    get_file(): Gio.File
    get_full_type(): ProjectNodeType
    get_group_from_file(directory: Gio.File): ProjectNode
    get_map_property(id: string, name: string): ProjectProperty
    get_name(): string
    get_node_type(): ProjectNodeType
    get_properties(): ProjectProperty[]
    get_properties_info(): ProjectPropertyInfo[]
    get_property(id: string): ProjectProperty

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name?: string, value?: any): void
    get_property(...args: any[]): any
    get_property(args_or_property_name: any[] | string, value?: any): ProjectProperty | void | any
    get_property_info(id: string): ProjectPropertyInfo
    get_source_from_file(file: Gio.File): ProjectNode
    get_state(): ProjectNodeState
    insert_after(sibling: ProjectNode | null, node: ProjectNode): ProjectNode
    insert_before(sibling: ProjectNode | null, node: ProjectNode): ProjectNode
    insert_property(info: ProjectPropertyInfo, property: ProjectProperty): ProjectProperty
    insert_property_info(info: ProjectPropertyInfo): ProjectPropertyInfo
    last_child(): ProjectNode
    next_sibling(): ProjectNode
    nth_child(n: number): ProjectNode
    parent(): ProjectNode
    parent_type(type: ProjectNodeType): ProjectNode
    prepend(node: ProjectNode): ProjectNode
    prev_sibling(): ProjectNode
    remove(): ProjectNode
    remove_property(property: ProjectProperty): ProjectProperty
    root(): ProjectNode
    set_state(state: ProjectNodeState): boolean
    traverse(order: GLib.TraverseType, func: ProjectNodeTraverseFunc): ProjectNode

    // Own signals of Anjuta-3.0.Anjuta.ProjectNode

    connect(sigName: "loaded", callback: ProjectNode_LoadedSignalCallback): number
    connect_after(sigName: "loaded", callback: ProjectNode_LoadedSignalCallback): number
    emit(sigName: "loaded", object: object | null, p0: GLib.Error, ...args: any[]): void
    connect(sigName: "updated", callback: ProjectNode_UpdatedSignalCallback): number
    connect_after(sigName: "updated", callback: ProjectNode_UpdatedSignalCallback): number
    emit(sigName: "updated", object: object | null, p0: GLib.Error, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.ProjectNode

    connect(sigName: "notify::file", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: ProjectNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #AnjutaProjectNode struct contains private data only, and should
 * accessed using the functions below.
 * @class 
 */
class ProjectNode extends GObject.InitiallyUnowned {

    // Own properties of Anjuta-3.0.Anjuta.ProjectNode

    static name: string
    static $gtype: GObject.GType<ProjectNode>

    // Constructors of Anjuta-3.0.Anjuta.ProjectNode

    constructor(config?: ProjectNode_ConstructProps) 
    _init(config?: ProjectNode_ConstructProps): void
}

interface SavePrompt_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.MessageDialog_ConstructProps {
}

interface SavePrompt extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    window: any
    parent_instance: any

    // Own fields of Anjuta-3.0.Anjuta.SavePrompt

    parent: Gtk.MessageDialog
    priv: SavePromptPrivate

    // Owm methods of Anjuta-3.0.Anjuta.SavePrompt

    get_items_count(): number

    // Conflicting methods

    mnemonic_activate(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Anjuta-3.0.Anjuta.SavePrompt

    connect(sigName: "notify::buttons", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buttons", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buttons", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::message-area", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-area", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-area", ...args: any[]): void
    connect(sigName: "notify::message-type", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-type", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-type", ...args: any[]): void
    connect(sigName: "notify::secondary-text", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-text", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-text", ...args: any[]): void
    connect(sigName: "notify::secondary-use-markup", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-use-markup", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-use-markup", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::use-header-bar", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: SavePrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SavePrompt extends Gtk.MessageDialog {

    // Own properties of Anjuta-3.0.Anjuta.SavePrompt

    static name: string
    static $gtype: GObject.GType<SavePrompt>

    // Constructors of Anjuta-3.0.Anjuta.SavePrompt

    constructor(config?: SavePrompt_ConstructProps) 
    constructor(parent: Gtk.Window) 
    static new(parent: Gtk.Window): SavePrompt

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     */
    static new(): Gtk.Dialog
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: SavePrompt_ConstructProps): void
}

interface Serializer_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.Serializer

    filepath?: string | null
    mode?: SerializerMode | null
}

interface Serializer {

    // Own properties of Anjuta-3.0.Anjuta.Serializer

    readonly filepath: string
    readonly mode: SerializerMode

    // Own fields of Anjuta-3.0.Anjuta.Serializer

    parent: GObject.Object
    priv: SerializerPrivate

    // Owm methods of Anjuta-3.0.Anjuta.Serializer

    read_float(name: string, value: number): boolean
    read_int(name: string, value: number): boolean
    read_string(name: string, value: string, replace: boolean): boolean
    write_float(name: string, value: number): boolean
    write_int(name: string, value: number): boolean
    write_string(name: string, value: string): boolean

    // Class property signals of Anjuta-3.0.Anjuta.Serializer

    connect(sigName: "notify::filepath", callback: (($obj: Serializer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filepath", callback: (($obj: Serializer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filepath", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: Serializer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: Serializer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Serializer extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Serializer

    static name: string
    static $gtype: GObject.GType<Serializer>

    // Constructors of Anjuta-3.0.Anjuta.Serializer

    constructor(config?: Serializer_ConstructProps) 
    constructor(filepath: string, mode: SerializerMode) 
    static new(filepath: string, mode: SerializerMode): Serializer
    _init(config?: Serializer_ConstructProps): void
}

interface Session_ConstructProps extends GObject.Object_ConstructProps {
}

interface Session {

    // Own fields of Anjuta-3.0.Anjuta.Session

    parent: GObject.Object
    priv: SessionPriv

    // Owm methods of Anjuta-3.0.Anjuta.Session

    /**
     * Clears the session.
     */
    clear(): void
    /**
     * Clears the given section in session object.
     * @param section Section to clear.
     */
    clear_section(section: string): void
    /**
     * Return a GFile corresponding to the URI and and optional fragment,
     * normally read from a session key.
     * The path is expected to be relative to the session directory but it works
     * with an absolute URI, in this case it returns the same file than
     * g_file_new_for_uri.
     * It is useful to keep only relative file paths in a session file to be able
     * to copy the whole project without breaking references.
     * @param uri a relative URI from a key
     * @param fragment fragment part of the URI if existing, can be %NULL
     */
    get_file_from_relative_uri(uri: string, fragment: string | null): Gio.File
    /**
     * Get a float `value` of `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     */
    get_float(section: string, key: string): number
    /**
     * Get an integer `value` of `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     */
    get_int(section: string, key: string): number
    /**
     * Return an URI relative to the session directory file with an optional
     * fragment.
     * It is useful to keep only relative file paths in a session file to be able
     * to copy the whole project without breaking references.
     * @param file a GFile
     * @param fragment an optional fragment
     */
    get_relative_uri_from_file(file: Gio.File, fragment: string): string
    /**
     * Returns the directory corresponding to this session object.
     */
    get_session_directory(): string
    /**
     * Gets the session filename corresponding to this session object.
     */
    get_session_filename(): string
    /**
     * Get a string `value` of `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     */
    get_string(section: string, key: string): string
    /**
     * Set a float `value` to `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     * @param value Key value
     */
    set_float(section: string, key: string, value: number): void
    /**
     * Set an integer `value` to `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     * @param value Key value
     */
    set_int(section: string, key: string, value: number): void
    /**
     * Set a string `value` to `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     * @param value Key value
     */
    set_string(section: string, key: string, value: string): void
    /**
     * Synchronizes session object with session file
     */
    sync(): void

    // Class property signals of Anjuta-3.0.Anjuta.Session

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Session extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Session

    static name: string
    static $gtype: GObject.GType<Session>

    // Constructors of Anjuta-3.0.Anjuta.Session

    constructor(config?: Session_ConstructProps) 
    /**
     * Created a new session object. `session_directory` is the directory
     * where session information will be stored or loaded in case of existing
     * session.
     * @constructor 
     * @param session_directory Directory where session is loaded from/saved to.
     */
    constructor(session_directory: string) 
    /**
     * Created a new session object. `session_directory` is the directory
     * where session information will be stored or loaded in case of existing
     * session.
     * @constructor 
     * @param session_directory Directory where session is loaded from/saved to.
     */
    static new(session_directory: string): Session
    _init(config?: Session_ConstructProps): void
}

interface Status_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {
}

/**
 * Signal callback interface for `busy`
 */
interface Status_BusySignalCallback {
    ($obj: Status, object: boolean): void
}

interface Status extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Anjuta-3.0.Anjuta.Status

    parent: Gtk.Box
    priv: StatusPriv

    // Owm methods of Anjuta-3.0.Anjuta.Status

    add_widget(widget: Gtk.Widget): void
    busy_pop(): void
    busy_push(): void
    clear_stack(): void
    disable_splash(disable_splash: boolean): void
    pop(): void
    progress_add_ticks(ticks: number): void
    progress_increment_ticks(ticks: number, text: string): void
    progress_pulse(text: string): void
    progress_reset(): void
    progress_tick(icon: GdkPixbuf.Pixbuf, text: string): void
    set_splash(splash_file: string, splash_progress_position: number): void
    set_title(title: string): void
    set_title_window(window: Gtk.Widget): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Anjuta-3.0.Anjuta.Status

    vfunc_busy(state: boolean): void

    // Own signals of Anjuta-3.0.Anjuta.Status

    connect(sigName: "busy", callback: Status_BusySignalCallback): number
    connect_after(sigName: "busy", callback: Status_BusySignalCallback): number
    emit(sigName: "busy", object: boolean, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Status

    connect(sigName: "notify::baseline-position", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Status extends Gtk.Box {

    // Own properties of Anjuta-3.0.Anjuta.Status

    static name: string
    static $gtype: GObject.GType<Status>

    // Constructors of Anjuta-3.0.Anjuta.Status

    constructor(config?: Status_ConstructProps) 
    constructor() 
    static new(): Status

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Status_ConstructProps): void
}

interface SyncCommand_ConstructProps extends Command_ConstructProps {
}

interface SyncCommand {

    // Own fields of Anjuta-3.0.Anjuta.SyncCommand

    parent_instance: Command

    // Class property signals of Anjuta-3.0.Anjuta.SyncCommand

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SyncCommand extends Command {

    // Own properties of Anjuta-3.0.Anjuta.SyncCommand

    static name: string
    static $gtype: GObject.GType<SyncCommand>

    // Constructors of Anjuta-3.0.Anjuta.SyncCommand

    constructor(config?: SyncCommand_ConstructProps) 
    _init(config?: SyncCommand_ConstructProps): void
}

interface Tabber_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Container_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.Tabber

    notebook?: GObject.Object | null
}

interface Tabber extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Anjuta-3.0.Anjuta.Tabber

    readonly notebook: GObject.Object

    // Own fields of Anjuta-3.0.Anjuta.Tabber

    parent_instance: Gtk.Container
    priv: TabberPriv

    // Owm methods of Anjuta-3.0.Anjuta.Tabber

    /**
     * Append a tab to the AnjutaTabber widget
     * @param tab_label widget used as tab label
     */
    add_tab(tab_label: Gtk.Widget): void
    /**
     * Prepend a tab to the AnjutaTabber widget
     * @param tab_label widget used as tab label
     */
    prepend_tab(tab_label: Gtk.Widget): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Anjuta-3.0.Anjuta.Tabber

    connect(sigName: "notify::notebook", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notebook", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::notebook", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Tabber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Tabber extends Gtk.Container {

    // Own properties of Anjuta-3.0.Anjuta.Tabber

    static name: string
    static $gtype: GObject.GType<Tabber>

    // Constructors of Anjuta-3.0.Anjuta.Tabber

    constructor(config?: Tabber_ConstructProps) 
    /**
     * Creates a new AnjutaTabber widget
     * @constructor 
     * @param notebook the GtkNotebook the tabber should be associated with
     */
    constructor(notebook: Gtk.Notebook) 
    /**
     * Creates a new AnjutaTabber widget
     * @constructor 
     * @param notebook the GtkNotebook the tabber should be associated with
     */
    static new(notebook: Gtk.Notebook): Tabber
    _init(config?: Tabber_ConstructProps): void
}

interface TokenFile_ConstructProps extends GObject.Object_ConstructProps {
}

interface TokenFile {

    // Owm methods of Anjuta-3.0.Anjuta.TokenFile

    free(): void
    get_token_location(location: TokenFileLocation, token: Token): boolean
    /**
     * Returns the position of the token in the file. This position is a number
     * which doesn't correspond to a line number or a character but respect the
     * order of token in the file.
     * @param token token
     */
    get_token_position(token: Token): number
    is_dirty(): boolean
    move(new_file: Gio.File): void
    save(): boolean
    unload(): boolean
    /**
     * Update the file with all changed token starting from `token`. The function can
     * return an error if the token is not in the file.
     * @param token Token to update.
     */
    update(token: Token): boolean

    // Class property signals of Anjuta-3.0.Anjuta.TokenFile

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TokenFile extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.TokenFile

    static name: string
    static $gtype: GObject.GType<TokenFile>

    // Constructors of Anjuta-3.0.Anjuta.TokenFile

    constructor(config?: TokenFile_ConstructProps) 
    constructor(file: Gio.File) 
    static new(file: Gio.File): TokenFile
    _init(config?: TokenFile_ConstructProps): void
}

interface TreeComboBox_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Actionable_ConstructProps, Gtk.Activatable_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellLayout_ConstructProps, Gtk.ToggleButton_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.TreeComboBox

    model?: Gtk.TreeModel | null
}

/**
 * Signal callback interface for `changed`
 */
interface TreeComboBox_ChangedSignalCallback {
    ($obj: TreeComboBox): void
}

/**
 * Signal callback interface for `popdown`
 */
interface TreeComboBox_PopdownSignalCallback {
    ($obj: TreeComboBox): void
}

/**
 * Signal callback interface for `popup`
 */
interface TreeComboBox_PopupSignalCallback {
    ($obj: TreeComboBox): void
}

interface TreeComboBox extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable, Gtk.CellLayout {

    // Own properties of Anjuta-3.0.Anjuta.TreeComboBox

    model: Gtk.TreeModel

    // Own fields of Anjuta-3.0.Anjuta.TreeComboBox

    parent: Gtk.ToggleButton

    // Owm methods of Anjuta-3.0.Anjuta.TreeComboBox

    get_active_iter(iter: Gtk.TreeIter): boolean
    set_active(index: number): void

    // Overloads of set_active

    /**
     * Sets the status of the toggle button. Set to %TRUE if you want the
     * GtkToggleButton to be “pressed in”, and %FALSE to raise it.
     * This action causes the #GtkToggleButton::toggled signal and the
     * #GtkButton::clicked signal to be emitted.
     * @param is_active %TRUE or %FALSE.
     */
    set_active(is_active: boolean): void
    set_active(...args: any[]): any
    set_active(args_or_is_active: any[] | boolean): void | any
    set_active_iter(iter: Gtk.TreeIter): void
    set_invalid_text(str: string): void
    set_model(model: Gtk.TreeModel): void
    set_valid_function(func: Gtk.TreeModelFilterVisibleFunc): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Anjuta-3.0.Anjuta.TreeComboBox

    vfunc_changed(): void

    // Own signals of Anjuta-3.0.Anjuta.TreeComboBox

    connect(sigName: "changed", callback: TreeComboBox_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: TreeComboBox_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "popdown", callback: TreeComboBox_PopdownSignalCallback): number
    connect_after(sigName: "popdown", callback: TreeComboBox_PopdownSignalCallback): number
    emit(sigName: "popdown", ...args: any[]): void
    connect(sigName: "popup", callback: TreeComboBox_PopupSignalCallback): number
    connect_after(sigName: "popup", callback: TreeComboBox_PopupSignalCallback): number
    emit(sigName: "popup", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.TreeComboBox

    connect(sigName: "notify::model", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::draw-indicator", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-indicator", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draw-indicator", ...args: any[]): void
    connect(sigName: "notify::inconsistent", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inconsistent", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inconsistent", ...args: any[]): void
    connect(sigName: "notify::always-show-image", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: TreeComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeComboBox extends Gtk.ToggleButton {

    // Own properties of Anjuta-3.0.Anjuta.TreeComboBox

    static name: string
    static $gtype: GObject.GType<TreeComboBox>

    // Constructors of Anjuta-3.0.Anjuta.TreeComboBox

    constructor(config?: TreeComboBox_ConstructProps) 
    constructor() 
    static new(): TreeComboBox
    _init(config?: TreeComboBox_ConstructProps): void
}

interface UI_ConstructProps extends Gtk.Buildable_ConstructProps, Gtk.UIManager_ConstructProps {
}

interface UI extends Gtk.Buildable {

    // Own fields of Anjuta-3.0.Anjuta.UI

    parent: Gtk.UIManager
    priv: UIPrivate

    // Owm methods of Anjuta-3.0.Anjuta.UI

    /**
     * Activates the action `action_name` in the #GtkActionGroup `action_group`.
     * "ActionGroupName/ActionName". Note that it will only work if the group has
     * been added using methods in #AnjutaUI.
     * @param action_group Action group.
     * @param action_name Action name.
     */
    activate_action_by_group(action_group: Gtk.ActionGroup, action_name: string): void
    /**
     * Activates the action represented by `action_path`. The path is in the form
     * "ActionGroupName/ActionName". Note that it will only work if the group has
     * been added using methods in #AnjutaUI.
     * @param action_path Path of the action in the form "GroupName/ActionName"
     */
    activate_action_by_path(action_path: string): void
    /**
     * This is similar to anjuta_ui_add_action_group_entries(), except that
     * it adds #GtkActionGroup object `action_group` directly. All actions in this
     * group are automatically registered in #AnjutaUI and can be retrieved
     * normally with anjuta_ui_get_action().
     * @param action_group_name Untranslated name of the action group.
     * @param action_group_label Translated label of the action group.
     * @param action_group #GtkActionGroup object to add.
     * @param can_customize 
     */
    add_action_group(action_group_name: string, action_group_label: string, action_group: Gtk.ActionGroup, can_customize: boolean): void
    /**
     * #GtkAction objects are created from the #GtkActionEntry structures and
     * added to the UI Manager. "activate" signal of #GtkAction is connected for
     * all the action objects using the callback in the entry structure and the
     * `user_data` passed here.
     * 
     * This group of actions are registered with the name `action_group_name`
     * in #AnjutaUI. A #GtkAction object from this action group can be later
     * retrieved by anjuta_ui_get_action() using `action_group_name` and action name.
     * `action_group_label` is used as the display name for the action group in
     * UI manager dialog where action shortcuts are configured.
     * @param action_group_name Untranslated name of the action group.
     * @param action_group_label Translated label of the action group.
     * @param entries An array of action entries.
     * @param translation_domain The translation domain used to translated the entries. It is usually the GETTEXT_PACKAGE macro in a project.
     * @param can_customize If true the actions are customizable by user.
     * @param user_data User data to pass to action objects. This is the data that will come as user_data in "activate" signal of the actions.
     */
    add_action_group_entries(action_group_name: string, action_group_label: string, entries: Gtk.ActionEntry[], translation_domain: string, can_customize: boolean, user_data: object | null): Gtk.ActionGroup
    /**
     * This is similar to anjuta_ui_add_action_group_entries(), except that
     * it adds #GtkToggleAction objects after creating them from the `entries`.
     * @param action_group_name Untranslated name of the action group.
     * @param action_group_label Translated label of the action group.
     * @param entries An array of action entries.
     * @param translation_domain The translation domain used to translated the entries. It is usually the GETTEXT_PACKAGE macro in a project.
     * @param can_customize 
     * @param user_data User data to pass to action objects. This is the data that will come as user_data in "activate" signal of the actions.
     */
    add_toggle_action_group_entries(action_group_name: string, action_group_label: string, entries: Gtk.ToggleActionEntry[], translation_domain: string, can_customize: boolean, user_data: object | null): Gtk.ActionGroup
    /**
     * Dumps the current UI XML tree in STDOUT. Useful for debugging.
     */
    dump_tree(): void
    /**
     * Creates an accel editor widget and returns it. It should be added to
     * container and displayed to users.
     */
    get_accel_editor(): Gtk.Widget
    /**
     * Returns the #GtkAccelGroup object associated with this UI manager.
     */
    get_accel_group(): Gtk.AccelGroup
    /**
     * Returns the action object with the name `action_name` in `action_group_name`.
     * Note that it will be only sucessully returned if the group has been added
     * using methods in #AnjutaUI.
     * @param action_group_name Group name.
     * @param action_name Action name.
     */
    get_action(action_group_name: string, action_name?: string): Gtk.Action

    // Overloads of get_action

    /**
     * Looks up an action by following a path. See gtk_ui_manager_get_widget()
     * for more information about paths.
     * @param path a path
     */
    get_action(path: string): Gtk.Action
    get_action(...args: any[]): any
    get_action(args_or_path: any[] | string): Gtk.Action | any
    /**
     * This returns the IconFactory object. All icons should be registered using
     * this icon factory. Read the documentation for #GtkIconFactory on how to
     * use it.
     */
    get_icon_factory(): Gtk.IconFactory
    /**
     * Merges XML UI definition in `ui_filename`. UI elements defined in the xml
     * are merged with existing UI elements in UI manager. The format of the
     * file content is the standard XML UI definition tree. For more detail,
     * read the documentation for #GtkUIManager.
     * @param ui_filename UI file to merge into UI manager.
     */
    merge(ui_filename: string): number
    /**
     * Removes a previous added action group. All actions in this group are
     * also unregistered from UI manager.
     * @param action_group #GtkActionGroup object to remove.
     */
    remove_action_group(action_group: Gtk.ActionGroup): void
    unload_accels(): void
    /**
     * Unmerges UI with the ID value `id` (returned by anjuta_ui_merge() when
     * it was merged. For more detail, read the documentation for #GtkUIManager.
     * @param id Merge ID returned by anjuta_ui_merge().
     */
    unmerge(id: number): void

    // Class property signals of Anjuta-3.0.Anjuta.UI

    connect(sigName: "notify::add-tearoffs", callback: (($obj: UI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-tearoffs", callback: (($obj: UI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::add-tearoffs", ...args: any[]): void
    connect(sigName: "notify::ui", callback: (($obj: UI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ui", callback: (($obj: UI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ui", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UI extends Gtk.UIManager {

    // Own properties of Anjuta-3.0.Anjuta.UI

    static name: string
    static $gtype: GObject.GType<UI>

    // Constructors of Anjuta-3.0.Anjuta.UI

    constructor(config?: UI_ConstructProps) 
    /**
     * Creates a new instance of #AnjutaUI.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #AnjutaUI.
     * @constructor 
     */
    static new(): UI

    // Overloads of new

    /**
     * Creates a new ui manager object.
     * @constructor 
     */
    static new(): Gtk.UIManager
    _init(config?: UI_ConstructProps): void
    static load_accels(filename: string): void
    static save_accels(filename: string): void
}

interface VcsStatusTreeView_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, Gtk.TreeView_ConstructProps {

    // Own constructor properties of Anjuta-3.0.Anjuta.VcsStatusTreeView

    conflicted_selectable?: boolean | null
    show_status?: boolean | null
    status_codes?: VcsStatus | null
}

interface VcsStatusTreeView extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Anjuta-3.0.Anjuta.VcsStatusTreeView

    readonly conflicted_selectable: boolean
    show_status: boolean
    readonly status_codes: VcsStatus

    // Own fields of Anjuta-3.0.Anjuta.VcsStatusTreeView

    parent_instance: Gtk.TreeView
    priv: VcsStatusTreeViewPriv

    // Owm methods of Anjuta-3.0.Anjuta.VcsStatusTreeView

    add(path: string, status?: VcsStatus, selected?: boolean): void

    // Overloads of add

    /**
     * Adds `widget` to `container`. Typically used for simple containers
     * such as #GtkWindow, #GtkFrame, or #GtkButton; for more complicated
     * layout containers such as #GtkBox or #GtkGrid, this function will
     * pick default packing parameters that may not be correct.  So
     * consider functions such as gtk_box_pack_start() and
     * gtk_grid_attach() as an alternative to gtk_container_add() in
     * those cases. A widget may be added to only one container at a time;
     * you can’t place the same widget inside two different containers.
     * 
     * Note that some containers, such as #GtkScrolledWindow or #GtkListBox,
     * may add intermediate children between the added widget and the
     * container.
     * @param widget a widget to be placed inside `container`
     */
    add(widget: Gtk.Widget): void
    add(...args: any[]): any
    add(args_or_widget: any[] | Gtk.Widget): void | any
    destroy(): void
    select_all(): void
    unselect_all(): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Anjuta-3.0.Anjuta.VcsStatusTreeView

    connect(sigName: "notify::conflicted-selectable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::conflicted-selectable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::conflicted-selectable", ...args: any[]): void
    connect(sigName: "notify::show-status", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-status", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-status", ...args: any[]): void
    connect(sigName: "notify::status-codes", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-codes", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status-codes", ...args: any[]): void
    connect(sigName: "notify::activate-on-single-click", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rules-hint", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: VcsStatusTreeView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VcsStatusTreeView extends Gtk.TreeView {

    // Own properties of Anjuta-3.0.Anjuta.VcsStatusTreeView

    static name: string
    static $gtype: GObject.GType<VcsStatusTreeView>

    // Constructors of Anjuta-3.0.Anjuta.VcsStatusTreeView

    constructor(config?: VcsStatusTreeView_ConstructProps) 
    constructor() 
    static new(): VcsStatusTreeView
    _init(config?: VcsStatusTreeView_ConstructProps): void
}

interface AsyncCommandClass {

    // Own fields of Anjuta-3.0.Anjuta.AsyncCommandClass

    parent_class: CommandClass
}

abstract class AsyncCommandClass {

    // Own properties of Anjuta-3.0.Anjuta.AsyncCommandClass

    static name: string
}

interface AsyncCommandPriv {
}

class AsyncCommandPriv {

    // Own properties of Anjuta-3.0.Anjuta.AsyncCommandPriv

    static name: string
}

interface AsyncNotifyClass {

    // Own fields of Anjuta-3.0.Anjuta.AsyncNotifyClass

    parent_class: GObject.ObjectClass
    finished: (self: AsyncNotify) => void
}

abstract class AsyncNotifyClass {

    // Own properties of Anjuta-3.0.Anjuta.AsyncNotifyClass

    static name: string
}

interface AsyncNotifyPriv {
}

class AsyncNotifyPriv {

    // Own properties of Anjuta-3.0.Anjuta.AsyncNotifyPriv

    static name: string
}

interface AutogenClass {
}

abstract class AutogenClass {

    // Own properties of Anjuta-3.0.Anjuta.AutogenClass

    static name: string
}

interface CModuleClass {
}

abstract class CModuleClass {

    // Own properties of Anjuta-3.0.Anjuta.CModuleClass

    static name: string
}

interface CPluginFactoryClass {
}

abstract class CPluginFactoryClass {

    // Own properties of Anjuta-3.0.Anjuta.CPluginFactoryClass

    static name: string
}

interface CellRendererCaptionedImageClass {

    // Own fields of Anjuta-3.0.Anjuta.CellRendererCaptionedImageClass

    parent_class: Gtk.CellRendererClass
}

abstract class CellRendererCaptionedImageClass {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererCaptionedImageClass

    static name: string
}

interface CellRendererDiffClass {

    // Own fields of Anjuta-3.0.Anjuta.CellRendererDiffClass

    parent_class: Gtk.CellRendererClass
}

abstract class CellRendererDiffClass {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererDiffClass

    static name: string
}

interface CellRendererDiffPrivate {
}

class CellRendererDiffPrivate {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererDiffPrivate

    static name: string
}

interface CloseButtonClass {

    // Own fields of Anjuta-3.0.Anjuta.CloseButtonClass

    parent_class: Gtk.ButtonClass
    priv: CloseButtonClassPrivate
}

abstract class CloseButtonClass {

    // Own properties of Anjuta-3.0.Anjuta.CloseButtonClass

    static name: string
}

interface CloseButtonClassPrivate {
}

class CloseButtonClassPrivate {

    // Own properties of Anjuta-3.0.Anjuta.CloseButtonClassPrivate

    static name: string
}

interface ColumnTextViewClass {

    // Own fields of Anjuta-3.0.Anjuta.ColumnTextViewClass

    parent_class: Gtk.BoxClass
}

abstract class ColumnTextViewClass {

    // Own properties of Anjuta-3.0.Anjuta.ColumnTextViewClass

    static name: string
}

interface ColumnTextViewPriv {
}

class ColumnTextViewPriv {

    // Own properties of Anjuta-3.0.Anjuta.ColumnTextViewPriv

    static name: string
}

interface CommandBarClass {

    // Own fields of Anjuta-3.0.Anjuta.CommandBarClass

    parent_class: Gtk.NotebookClass
}

abstract class CommandBarClass {

    // Own properties of Anjuta-3.0.Anjuta.CommandBarClass

    static name: string
}

interface CommandBarEntry {

    // Own fields of Anjuta-3.0.Anjuta.CommandBarEntry

    /**
     * The type of action
     * @field 
     */
    type: CommandBarEntryType
    /**
     * The name of the action for this entry
     * @field 
     */
    action_name: string
    /**
     * The display label for this entry
     * @field 
     */
    label: string
    tooltip: string
    /**
     * The stock icon to display for this entry
     * @field 
     */
    stock_icon: string
    /**
     * Function to call when this entry's action is activated
     * @field 
     */
    callback: GObject.Callback
}

/**
 * AnjutaCommandBarEntry is used to add a set of frames and actions to a command
 * bar.
 * @record 
 */
class CommandBarEntry {

    // Own properties of Anjuta-3.0.Anjuta.CommandBarEntry

    static name: string
}

interface CommandBarPriv {
}

class CommandBarPriv {

    // Own properties of Anjuta-3.0.Anjuta.CommandBarPriv

    static name: string
}

interface CommandClass {

    // Own fields of Anjuta-3.0.Anjuta.CommandClass

    parent_class: GObject.ObjectClass
    run: (self: Command) => number
    start: (self: Command) => void
    cancel: (self: Command) => void
    notify_data_arrived: (self: Command) => void
    notify_complete: (self: Command, return_code: number) => void
    notify_progress: (self: Command, progress: number) => void
    set_error_message: (self: Command, error_message: string) => void
    get_error_message: (self: Command) => string | null
    start_automatic_monitor: (self: Command) => boolean
    stop_automatic_monitor: (self: Command) => void
    data_arrived: (command: Command) => void
    command_started: (command: Command) => void
    command_finished: (command: Command, return_code: number) => void
    progress: (command: Command, progress: number) => void
}

abstract class CommandClass {

    // Own properties of Anjuta-3.0.Anjuta.CommandClass

    static name: string
}

interface CommandPriv {
}

class CommandPriv {

    // Own properties of Anjuta-3.0.Anjuta.CommandPriv

    static name: string
}

interface CommandQueueClass {

    // Own fields of Anjuta-3.0.Anjuta.CommandQueueClass

    parent_class: GObject.ObjectClass
    finished: (queue: CommandQueue) => void
}

abstract class CommandQueueClass {

    // Own properties of Anjuta-3.0.Anjuta.CommandQueueClass

    static name: string
}

interface CommandQueuePriv {
}

class CommandQueuePriv {

    // Own properties of Anjuta-3.0.Anjuta.CommandQueuePriv

    static name: string
}

interface CompletionClass {

    // Own fields of Anjuta-3.0.Anjuta.CompletionClass

    parent_class: GObject.ObjectClass
}

abstract class CompletionClass {

    // Own properties of Anjuta-3.0.Anjuta.CompletionClass

    static name: string
}

interface CompletionPrivate {
}

class CompletionPrivate {

    // Own properties of Anjuta-3.0.Anjuta.CompletionPrivate

    static name: string
}

interface DockClass {

    // Own fields of Anjuta-3.0.Anjuta.DockClass

    parent_class: Gdl.DockClass
}

abstract class DockClass {

    // Own properties of Anjuta-3.0.Anjuta.DockClass

    static name: string
}

interface DockPaneClass {

    // Own fields of Anjuta-3.0.Anjuta.DockPaneClass

    parent_class: GObject.ObjectClass
    refresh: (self: DockPane) => void
    single_selection_changed: (self: DockPane) => void
    multiple_selection_changed: (self: DockPane) => void
}

abstract class DockPaneClass {

    // Own properties of Anjuta-3.0.Anjuta.DockPaneClass

    static name: string
}

interface DockPanePriv {
}

class DockPanePriv {

    // Own properties of Anjuta-3.0.Anjuta.DockPanePriv

    static name: string
}

interface DockPriv {
}

class DockPriv {

    // Own properties of Anjuta-3.0.Anjuta.DockPriv

    static name: string
}

interface DropEntryClass {

    // Own fields of Anjuta-3.0.Anjuta.DropEntryClass

    parent_class: EntryClass
}

abstract class DropEntryClass {

    // Own properties of Anjuta-3.0.Anjuta.DropEntryClass

    static name: string
}

interface Encoding {

    // Owm methods of Anjuta-3.0.Anjuta.Encoding

    /**
     * Makes a copy of the given encoding.
     * This function is used by language bindings.
     */
    copy(): Encoding
    /**
     * Frees the resources allocated by the given encoding.
     * This function is used by language bindings.
     */
    free(): void
    get_charset(): string
    get_name(): string
    to_string(): string
}

class Encoding {

    // Own properties of Anjuta-3.0.Anjuta.Encoding

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Encoding

    static get_current(): Encoding
    static get_from_charset(charset: string): Encoding
    static get_from_index(index: number): Encoding
    static get_utf8(): Encoding
}

interface EntryClass {

    // Own fields of Anjuta-3.0.Anjuta.EntryClass

    parent_class: Gtk.EntryClass
}

abstract class EntryClass {

    // Own properties of Anjuta-3.0.Anjuta.EntryClass

    static name: string
}

interface EntryPriv {
}

class EntryPriv {

    // Own properties of Anjuta-3.0.Anjuta.EntryPriv

    static name: string
}

interface EnvironmentEditorClass {

    // Own fields of Anjuta-3.0.Anjuta.EnvironmentEditorClass

    parent_class: Gtk.BinClass
    changed: (self: EnvironmentEditor) => void
}

abstract class EnvironmentEditorClass {

    // Own properties of Anjuta-3.0.Anjuta.EnvironmentEditorClass

    static name: string
}

interface FileDropEntryClass {

    // Own fields of Anjuta-3.0.Anjuta.FileDropEntryClass

    parent_class: DropEntryClass
}

abstract class FileDropEntryClass {

    // Own properties of Anjuta-3.0.Anjuta.FileDropEntryClass

    static name: string
}

interface FileDropEntryPriv {
}

class FileDropEntryPriv {

    // Own properties of Anjuta-3.0.Anjuta.FileDropEntryPriv

    static name: string
}

interface FileListClass {

    // Own fields of Anjuta-3.0.Anjuta.FileListClass

    parent_class: Gtk.BoxClass
}

abstract class FileListClass {

    // Own properties of Anjuta-3.0.Anjuta.FileListClass

    static name: string
}

interface FileListPriv {
}

class FileListPriv {

    // Own properties of Anjuta-3.0.Anjuta.FileListPriv

    static name: string
}

interface LanguageProposalData {

    // Own fields of Anjuta-3.0.Anjuta.LanguageProposalData

    /**
     * Name of the object
     * @field 
     */
    name: string
    /**
     * Info about the object
     * @field 
     */
    info: string
    /**
     * If this is a function
     * @field 
     */
    is_func: boolean
    /**
     * If the function has at least one parameters
     * @field 
     */
    has_para: boolean

    // Owm methods of Anjuta-3.0.Anjuta.LanguageProposalData

    /**
     * Free the given proposal data
     */
    free(): void
}

class LanguageProposalData {

    // Own properties of Anjuta-3.0.Anjuta.LanguageProposalData

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.LanguageProposalData

    constructor(name: string) 
    static new(name: string): LanguageProposalData
}

interface LanguageProviderClass {

    // Own fields of Anjuta-3.0.Anjuta.LanguageProviderClass

    parent_class: GObject.ObjectClass
}

abstract class LanguageProviderClass {

    // Own properties of Anjuta-3.0.Anjuta.LanguageProviderClass

    static name: string
}

interface LanguageProviderPriv {
}

class LanguageProviderPriv {

    // Own properties of Anjuta-3.0.Anjuta.LanguageProviderPriv

    static name: string
}

interface LauncherClass {

    // Own fields of Anjuta-3.0.Anjuta.LauncherClass

    parent_class: GObject.ObjectClass
    child_exited: (launcher: Launcher, child_pid: number, exit_status: number, time_taken_in_seconds: number) => void
    busy: (launcher: Launcher, busy_flag: boolean) => void
}

abstract class LauncherClass {

    // Own properties of Anjuta-3.0.Anjuta.LauncherClass

    static name: string
}

interface LauncherPriv {
}

class LauncherPriv {

    // Own properties of Anjuta-3.0.Anjuta.LauncherPriv

    static name: string
}

interface PkgConfigChooserClass {

    // Own fields of Anjuta-3.0.Anjuta.PkgConfigChooserClass

    parent_class: Gtk.TreeViewClass
    package_activated: (self: PkgConfigChooser, package: string) => void
    package_deactivated: (self: PkgConfigChooser, package: string) => void
}

abstract class PkgConfigChooserClass {

    // Own properties of Anjuta-3.0.Anjuta.PkgConfigChooserClass

    static name: string
}

interface PkgConfigChooserPrivate {
}

class PkgConfigChooserPrivate {

    // Own properties of Anjuta-3.0.Anjuta.PkgConfigChooserPrivate

    static name: string
}

interface PkgScannerClass {

    // Own fields of Anjuta-3.0.Anjuta.PkgScannerClass

    parent_class: AsyncCommandClass
}

abstract class PkgScannerClass {

    // Own properties of Anjuta-3.0.Anjuta.PkgScannerClass

    static name: string
}

interface PkgScannerPrivate {
}

class PkgScannerPrivate {

    // Own properties of Anjuta-3.0.Anjuta.PkgScannerPrivate

    static name: string
}

interface PluginClass {

    // Own fields of Anjuta-3.0.Anjuta.PluginClass

    parent_class: GObject.ObjectClass
    activated: (plugin: Plugin) => void
    deactivated: (plugin: Plugin) => void
    activate: (plugin: Plugin) => boolean
    deactivate: (plugin: Plugin) => boolean
}

abstract class PluginClass {

    // Own properties of Anjuta-3.0.Anjuta.PluginClass

    static name: string
}

interface PluginDescription {

    // Owm methods of Anjuta-3.0.Anjuta.PluginDescription

    copy(): PluginDescription
    /**
     * Frees the #AnjutaPluginDescription instance.
     */
    free(): void
    /**
     * Returns the value of key as boolean in the given section.
     * @param section Section name.
     * @param keyname Key name.
     * @param val Pointer to value to store retured value.
     */
    get_boolean(section: string, keyname: string, val: boolean): boolean
    /**
     * Returns the value of key as integer in the given section.
     * @param section Section name.
     * @param keyname Key name.
     * @param val Pointer to value to store retured value.
     */
    get_integer(section: string, keyname: string, val: number): boolean
    /**
     * Returns the value of key in the given section in current locale.
     * @param section Section name.
     * @param keyname Key name.
     * @param val Pointer to value to store retured value.
     */
    get_locale_string(section: string, keyname: string, val: string): boolean
    /**
     * Retrieves the value of a key (in the given section) for the given locale.
     * The value returned in `val` must be freed after use.
     * @param section_name Name of the section.
     * @param keyname Name of the key.
     * @param locale The locale for which the value is to be retrieved.
     */
    get_raw(section_name: string, keyname: string, locale: string): [ /* returnType */ boolean, /* val */ string ]
    /**
     * Returns the value of key in the given section.
     * @param section Section name.
     * @param keyname Key name.
     * @param val Pointer to value to store retured value.
     */
    get_string(section: string, keyname: string, val: string): boolean
    /**
     * Override the value of a key in the description. This can be removed using
     * the function anjuta_plugin_description_remove().
     * @param section_name Section name.
     * @param keyname Key name.
     * @param val Pointer to value to store retured value.
     */
    override(section_name: string, keyname: string, val: string): boolean
    /**
     * Remove a key from the description.
     * @param section_name Section name.
     * @param keyname Key name.
     */
    remove(section_name: string, keyname: string): boolean
    /**
     * Converts the description detains into string format, usually for
     * saving it in a file.
     */
    to_string(): string | null
}

class PluginDescription {

    // Own properties of Anjuta-3.0.Anjuta.PluginDescription

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.PluginDescription

    constructor(filename: string) 
    static new(filename: string): PluginDescription
    /**
     * Parses the given plugin description data (usally read from the plugin
     * description file and creates an instance of #AnjutaPluginDescription.
     * The format of the content string is similar to .ini format.
     * @constructor 
     * @param data The data to parse. The format of the data is .ini style.
     */
    static new_from_string(data: string): PluginDescription
}

interface PluginHandleClass {

    // Own fields of Anjuta-3.0.Anjuta.PluginHandleClass

    parent_class: GObject.ObjectClass
}

abstract class PluginHandleClass {

    // Own properties of Anjuta-3.0.Anjuta.PluginHandleClass

    static name: string
}

interface PluginHandlePriv {
}

class PluginHandlePriv {

    // Own properties of Anjuta-3.0.Anjuta.PluginHandlePriv

    static name: string
}

interface PluginManagerClass {

    // Own fields of Anjuta-3.0.Anjuta.PluginManagerClass

    parent_class: GObject.ObjectClass
    plugin_activated: (self: PluginManager, handle: PluginHandle, plugin: GObject.Object) => void
    plugin_deactivated: (self: PluginManager, handle: PluginHandle, plugin: GObject.Object) => void
}

abstract class PluginManagerClass {

    // Own properties of Anjuta-3.0.Anjuta.PluginManagerClass

    static name: string
}

interface PluginManagerPriv {
}

class PluginManagerPriv {

    // Own properties of Anjuta-3.0.Anjuta.PluginManagerPriv

    static name: string
}

interface PluginPrivate {
}

class PluginPrivate {

    // Own properties of Anjuta-3.0.Anjuta.PluginPrivate

    static name: string
}

interface PreferencesClass {

    // Own fields of Anjuta-3.0.Anjuta.PreferencesClass

    parent: GObject.ObjectClass
}

abstract class PreferencesClass {

    // Own properties of Anjuta-3.0.Anjuta.PreferencesClass

    static name: string
}

interface PreferencesDialogClass {

    // Own fields of Anjuta-3.0.Anjuta.PreferencesDialogClass

    parent: Gtk.DialogClass
}

abstract class PreferencesDialogClass {

    // Own properties of Anjuta-3.0.Anjuta.PreferencesDialogClass

    static name: string
}

interface PreferencesDialogPrivate {
}

class PreferencesDialogPrivate {

    // Own properties of Anjuta-3.0.Anjuta.PreferencesDialogPrivate

    static name: string
}

interface PreferencesPriv {
}

class PreferencesPriv {

    // Own properties of Anjuta-3.0.Anjuta.PreferencesPriv

    static name: string
}

interface ProfileClass {

    // Own fields of Anjuta-3.0.Anjuta.ProfileClass

    parent_class: GObject.ObjectClass
    plugin_added: (self: Profile, plugin: PluginHandle) => void
    plugin_removed: (self: Profile, plugin: PluginHandle) => void
    changed: (self: Profile) => void
    descoped: (self: Profile) => void
    scoped: (self: Profile) => void
}

abstract class ProfileClass {

    // Own properties of Anjuta-3.0.Anjuta.ProfileClass

    static name: string
}

interface ProfileManagerClass {

    // Own fields of Anjuta-3.0.Anjuta.ProfileManagerClass

    parent_class: GObject.ObjectClass
    profile_pushed: (self: ProfileManager, profile: Profile) => void
    profile_popped: (self: ProfileManager, profile: Profile) => void
}

abstract class ProfileManagerClass {

    // Own properties of Anjuta-3.0.Anjuta.ProfileManagerClass

    static name: string
}

interface ProfileManagerPriv {
}

class ProfileManagerPriv {

    // Own properties of Anjuta-3.0.Anjuta.ProfileManagerPriv

    static name: string
}

interface ProfilePriv {
}

class ProfilePriv {

    // Own properties of Anjuta-3.0.Anjuta.ProfilePriv

    static name: string
}

interface ProjectNodeClass {

    // Own fields of Anjuta-3.0.Anjuta.ProjectNodeClass

    parent_class: GObject.InitiallyUnownedClass
    updated: (error: GLib.Error) => void
    loaded: (error: GLib.Error) => void
}

abstract class ProjectNodeClass {

    // Own properties of Anjuta-3.0.Anjuta.ProjectNodeClass

    static name: string
}

interface ProjectNodeInfo {

    // Own fields of Anjuta-3.0.Anjuta.ProjectNodeInfo

    type: ProjectNodeType
    name: string
    mime_type: string
    property_help_id: string

    // Owm methods of Anjuta-3.0.Anjuta.ProjectNodeInfo

    copy(): ProjectNodeInfo
    free(): void
    mime(): string
}

class ProjectNodeInfo {

    // Own properties of Anjuta-3.0.Anjuta.ProjectNodeInfo

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.ProjectNodeInfo

    constructor(type: ProjectNodeType, name: string, mime_type: string) 
    static new(type: ProjectNodeType, name: string, mime_type: string): ProjectNodeInfo
}

interface ProjectProperty {

    // Own fields of Anjuta-3.0.Anjuta.ProjectProperty

    name: string
    value: string
    info: ProjectPropertyInfo
    user_data: object

    // Owm methods of Anjuta-3.0.Anjuta.ProjectProperty

    copy(): ProjectProperty
    free(): void
}

class ProjectProperty {

    // Own properties of Anjuta-3.0.Anjuta.ProjectProperty

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.ProjectProperty

    constructor(value: string, name: string | null, user_data: object | null) 
    static new(value: string, name: string | null, user_data: object | null): ProjectProperty
}

interface ProjectPropertyInfo {

    // Own fields of Anjuta-3.0.Anjuta.ProjectPropertyInfo

    id: string
    name: string
    type: ProjectValueType
    flags: ProjectPropertyFlags
    description: string
    default_value: ProjectProperty
    user_data: object

    // Owm methods of Anjuta-3.0.Anjuta.ProjectPropertyInfo

    copy(): ProjectPropertyInfo
    free(): void
}

class ProjectPropertyInfo {

    // Own properties of Anjuta-3.0.Anjuta.ProjectPropertyInfo

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.ProjectPropertyInfo

    constructor(id: string, name: string, type: ProjectValueType, flags: ProjectPropertyFlags, description: string, default_value: ProjectProperty, user_data: object | null) 
    static new(id: string, name: string, type: ProjectValueType, flags: ProjectPropertyFlags, description: string, default_value: ProjectProperty, user_data: object | null): ProjectPropertyInfo
}

interface Property {
}

class Property {

    // Own properties of Anjuta-3.0.Anjuta.Property

    static name: string
}

interface SavePromptClass {

    // Own fields of Anjuta-3.0.Anjuta.SavePromptClass

    parent_class: Gtk.MessageDialogClass
}

abstract class SavePromptClass {

    // Own properties of Anjuta-3.0.Anjuta.SavePromptClass

    static name: string
}

interface SavePromptPrivate {
}

class SavePromptPrivate {

    // Own properties of Anjuta-3.0.Anjuta.SavePromptPrivate

    static name: string
}

interface SerializerClass {

    // Own fields of Anjuta-3.0.Anjuta.SerializerClass

    parent_class: GObject.ObjectClass
}

abstract class SerializerClass {

    // Own properties of Anjuta-3.0.Anjuta.SerializerClass

    static name: string
}

interface SerializerPrivate {
}

class SerializerPrivate {

    // Own properties of Anjuta-3.0.Anjuta.SerializerPrivate

    static name: string
}

interface SessionClass {

    // Own fields of Anjuta-3.0.Anjuta.SessionClass

    parent_class: GObject.ObjectClass
}

abstract class SessionClass {

    // Own properties of Anjuta-3.0.Anjuta.SessionClass

    static name: string
}

interface SessionPriv {
}

class SessionPriv {

    // Own properties of Anjuta-3.0.Anjuta.SessionPriv

    static name: string
}

interface ShellIface {

    // Own fields of Anjuta-3.0.Anjuta.ShellIface

    g_iface: GObject.TypeInterface
    value_added: (shell: Shell, name: string, value: any) => void
    value_removed: (shell: Shell, name: string) => void
    save_session: (shell: Shell, phase: SessionPhase, session: Session) => void
    load_session: (shell: Shell, phase: SessionPhase, session: Session) => void
    save_prompt: (shell: Shell, save_prompt: SavePrompt) => void
    get_status: (shell: Shell) => Status
    get_ui: (shell: Shell) => UI
    get_preferences: (shell: Shell) => Preferences
    get_plugin_manager: (shell: Shell) => PluginManager
    get_profile_manager: (shell: Shell) => ProfileManager
    add_widget_full: (shell: Shell, widget: Gtk.Widget, name: string, title: string, stock_id: string, placement: ShellPlacement, locked: boolean) => void
    add_widget_custom: (shell: Shell, widget: Gtk.Widget, name: string, title: string, stock_id: string, label: Gtk.Widget, placement: ShellPlacement) => void
    remove_widget: (shell: Shell, widget: Gtk.Widget) => void
    present_widget: (shell: Shell, widget: Gtk.Widget) => void
    iconify_dockable_widget: (shell: Shell, widget: Gtk.Widget) => void
    hide_dockable_widget: (shell: Shell, widget: Gtk.Widget) => void
    show_dockable_widget: (shell: Shell, widget: Gtk.Widget) => void
    maximize_widget: (shell: Shell, widget_name: string) => void
    unmaximize: (shell: Shell) => void
    add_value: (shell: Shell, name: string, value: any) => void
    get_value: (shell: Shell, name: string, value: any) => void
    remove_value: (shell: Shell, name: string) => void
    saving_push: (shell: Shell) => void
    saving_pop: (shell: Shell) => void
    get_object: (shell: Shell, iface_name: string) => GObject.Object
}

abstract class ShellIface {

    // Own properties of Anjuta-3.0.Anjuta.ShellIface

    static name: string
}

interface StatusClass {

    // Own fields of Anjuta-3.0.Anjuta.StatusClass

    parent_class: Gtk.BoxClass
    busy: (status: Status, state: boolean) => void
}

abstract class StatusClass {

    // Own properties of Anjuta-3.0.Anjuta.StatusClass

    static name: string
}

interface StatusPriv {
}

class StatusPriv {

    // Own properties of Anjuta-3.0.Anjuta.StatusPriv

    static name: string
}

interface SyncCommandClass {

    // Own fields of Anjuta-3.0.Anjuta.SyncCommandClass

    parent_class: CommandClass
}

abstract class SyncCommandClass {

    // Own properties of Anjuta-3.0.Anjuta.SyncCommandClass

    static name: string
}

interface TabberClass {

    // Own fields of Anjuta-3.0.Anjuta.TabberClass

    parent_class: Gtk.ContainerClass
}

abstract class TabberClass {

    // Own properties of Anjuta-3.0.Anjuta.TabberClass

    static name: string
}

interface TabberPriv {
}

class TabberPriv {

    // Own properties of Anjuta-3.0.Anjuta.TabberPriv

    static name: string
}

interface Token {

    // Owm methods of Anjuta-3.0.Anjuta.Token

    check(): boolean
    clear_flags(flags: number): void
    compare(tokenb: Token): boolean
    dump(): void
    dump_link(): void
    evaluate(): string
    evaluate_name(): string
    get_flags(): number
    get_length(): number
    get_string(): string
    get_type(): number
    is_empty(): boolean
    remove_item(): void
    set_flags(flags: number): void
    set_length(length: number): void
    set_string(value: string, length: number): void
    set_type(type: number): void
}

class Token {

    // Own properties of Anjuta-3.0.Anjuta.Token

    static name: string
}

interface TokenFileClass {
}

abstract class TokenFileClass {

    // Own properties of Anjuta-3.0.Anjuta.TokenFileClass

    static name: string
}

interface TokenFileLocation {

    // Own fields of Anjuta-3.0.Anjuta.TokenFileLocation

    filename: string
    line: number
    column: number
}

class TokenFileLocation {

    // Own properties of Anjuta-3.0.Anjuta.TokenFileLocation

    static name: string
}

interface TokenStream {

    // Owm methods of Anjuta-3.0.Anjuta.TokenStream

    /**
     * Append an already existing token in the output stream.
     * @param token a #AnjutaToken object.
     */
    append_token(token: Token): void
    /**
     * Return the current directory.
     */
    get_current_directory(): Gio.File
    /**
     * Return the current file.
     */
    get_current_file(): Gio.File
    /**
     * Return the parent stream
     */
    get_parent(): TokenStream | null
    /**
     * Return the root token for the output stream.
     */
    get_root(): Token
    /**
     * Destroy the stream object and return the parent stream if it exists.
     */
    pop(): TokenStream | null
    /**
     * Read token from the input stream and write the content as a C string in the
     * buffer passed as argument.
     * @param buffer a character buffer to fill with token data.
     * @param max_size the size of the buffer.
     */
    read(buffer: string, max_size: number): number
}

class TokenStream {

    // Own properties of Anjuta-3.0.Anjuta.TokenStream

    static name: string
}

interface TokenStyle {

    // Owm methods of Anjuta-3.0.Anjuta.TokenStyle

    format(list: Token): void
    free(): void
    update(list: Token): void
}

class TokenStyle {

    // Own properties of Anjuta-3.0.Anjuta.TokenStyle

    static name: string
}

interface TreeComboBoxClass {

    // Own fields of Anjuta-3.0.Anjuta.TreeComboBoxClass

    changed: (combo: TreeComboBox) => void
}

abstract class TreeComboBoxClass {

    // Own properties of Anjuta-3.0.Anjuta.TreeComboBoxClass

    static name: string
}

interface TreeComboBoxPrivate {
}

class TreeComboBoxPrivate {

    // Own properties of Anjuta-3.0.Anjuta.TreeComboBoxPrivate

    static name: string
}

interface UIClass {

    // Own fields of Anjuta-3.0.Anjuta.UIClass

    parent: Gtk.UIManagerClass
}

abstract class UIClass {

    // Own properties of Anjuta-3.0.Anjuta.UIClass

    static name: string
}

interface UIPrivate {
}

class UIPrivate {

    // Own properties of Anjuta-3.0.Anjuta.UIPrivate

    static name: string
}

interface UtilStringMap {

    // Own fields of Anjuta-3.0.Anjuta.UtilStringMap

    type: number
    name: string
}

class UtilStringMap {

    // Own properties of Anjuta-3.0.Anjuta.UtilStringMap

    static name: string
}

interface VcsStatusTreeViewClass {

    // Own fields of Anjuta-3.0.Anjuta.VcsStatusTreeViewClass

    parent_class: Gtk.TreeViewClass
}

abstract class VcsStatusTreeViewClass {

    // Own properties of Anjuta-3.0.Anjuta.VcsStatusTreeViewClass

    static name: string
}

interface VcsStatusTreeViewPriv {
}

class VcsStatusTreeViewPriv {

    // Own properties of Anjuta-3.0.Anjuta.VcsStatusTreeViewPriv

    static name: string
}

    type GluePlugin = GObject.TypeModule
}
export default Anjuta;