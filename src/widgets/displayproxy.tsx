// @gjsx-resource
import Gtk from "gi://Gtk?version=4.0";
import GObject from 'gi://GObject';
import Webkit from "gi://WebKit2?version=5.0";
import Gio from "gi://Gio"
import GLib from 'gi://GLib';
import util from "gjsx/utils";
import { __dirname } from '../main.js';

const css_prov = util.CssProvider()
export const ProxiedBroadwayWebView = GObject.registerClass({ GTypeName: "ProxiedBroadwayWebView" }, class  extends Gtk.Box {

    _setAttr() {
        this.orientation = Gtk.Orientation.VERTICAL;
        this.valign = Gtk.Align.BASELINE;
        this.vexpand = true;
        this.homogeneous = true;
        this.margin_start = 18;
        this.spacing = 10;
    }
    _init() {
        super._init();
        this._setAttr();

        let webView: Webkit.WebView, scroll: Gtk.ScrolledWindow, settings: Webkit.Settings, button: Gtk.Button, box2: Gtk.Box, label: Gtk.Label, css1: Gtk.CssProvider, buttonLabel: Gtk.Label;
        try {

            webView = new Webkit.WebView();
            // Load the html asset 
            webView.load_uri('http://0.0.0.0:8086');
            // webView.load_uri(GLib.filename_to_uri(`${__dirname}/assets/webMsg.html`, null));


            let vid = new Gtk.Video({ file: Gio.File.new_for_path(__dirname + '/assets/video/lonelyshade.mp4') })
            scroll = new Gtk.ScrolledWindow({ child: webView as unknown as Gtk.Widget })

            box2 = new Gtk.Box({ vexpand: true, spacing: 10, orientation: Gtk.Orientation.VERTICAL });
            this.append(scroll);
            // this.append(vid)
            // this.append(box2)
        } catch (e) {
            logError(e)
        }
    }
})