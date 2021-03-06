/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

use events_loop::Event;
use servo::embedder_traits::EmbedderMsg;
use servo::msg::constellation_msg::TopLevelBrowsingContextId as BrowserId;
use std::sync::mpsc::Sender;

/// Manages the events sent from Servo. Since we only have one window from
/// Servo's point of view, we don't even need to link Browser and BrowserWindow.
/// All communication with the front end can happen from Browser and the api server.

pub struct Browser {
    event_sender: Sender<Event>,
}

impl Browser {
    pub fn new(event_sender: &Sender<Event>) -> Browser {
        Browser {
            event_sender: event_sender.clone(),
        }
    }

    /// Handle Servo Events.
    pub fn handle_servo_events(&mut self, events: Vec<(Option<BrowserId>, EmbedderMsg)>) {
        for event in events {
            println!("Servo event: {:?}", event);
            match event.1 {
                EmbedderMsg::Status(_status) => {
                    // self.status = status;
                }
                EmbedderMsg::ChangePageTitle(_title) => {
                    // self.title = title;

                    // let fallback_title: String = if let Some(ref current_url) = self.current_url {
                    //     current_url.to_string()
                    // } else {
                    //     String::from("Untitled")
                    // };
                    // let title = match self.title {
                    //     Some(ref title) if title.len() > 0 => &**title,
                    //     _ => &fallback_title,
                    // };
                    // let title = format!("{} - Servo", title);
                    // self.window.set_title(&title);
                }
                EmbedderMsg::MoveTo(_point) => {
                    // self.window.set_position(point);
                }
                EmbedderMsg::ResizeTo(_size) => {
                    // self.window.set_inner_size(size);
                }
                EmbedderMsg::AllowNavigation(_url, response_chan) => {
                    if let Err(e) = response_chan.send(true) {
                        warn!("Failed to send allow_navigation() response: {}", e);
                    };
                }
                EmbedderMsg::KeyEvent(_ch, _key, _state, _modified) => {
                    // self.handle_key_from_servo(browser_id, ch, key, state, modified);
                }
                EmbedderMsg::SetCursor(_cursor) => {
                    // self.window.set_cursor(cursor);
                }
                EmbedderMsg::NewFavicon(_url) => {
                    // self.favicon = Some(url);
                }
                EmbedderMsg::HeadParsed => {
                    // self.loading_state = Some(LoadingState::Loading);
                }
                EmbedderMsg::HistoryChanged(_entries, _current) => {
                    // self.current_url = Some(entries[current].url.clone());
                }
                EmbedderMsg::SetFullscreenState(_state) => {
                    // self.window.set_fullscreen(state);
                }
                EmbedderMsg::LoadStart => {
                    // self.loading_state = Some(LoadingState::Connecting);
                }
                EmbedderMsg::LoadComplete => {
                    // self.loading_state = Some(LoadingState::Loaded);
                }
                EmbedderMsg::GetSelectedBluetoothDevice(_, _) => {}
                EmbedderMsg::Shutdown => {
                    self.event_sender
                        .send(Event::ShutdownEvent)
                        .expect("Failed to send shutdown event");
                }
                EmbedderMsg::ShowIME(_kind) => {}
                EmbedderMsg::HideIME => {}
                EmbedderMsg::SelectFiles(_filter, _multiple, _sender) => {}
                EmbedderMsg::Panic(_reason, _backtrace) => {}
                EmbedderMsg::Alert(_message, _sender) => {},
                EmbedderMsg::AllowUnload(_sender) => {},
                EmbedderMsg::CloseBrowser => {},
                EmbedderMsg::AllowOpeningBrowser(response_chan) => {
                    // Note: would be a place to handle pop-ups config.
                    // see Step 7 of #the-rules-for-choosing-a-browsing-context-given-a-browsing-context-name
                    if let Err(e) = response_chan.send(true) {
                        warn!("Failed to send AllowOpeningBrowser response: {}", e);
                    };
                }
                EmbedderMsg::BrowserCreated(new_browser_id) => {
                    debug!("BrowserCreated {}", new_browser_id);
                    // TODO: properly handle a new "tab"
                    // self.browsers.push(new_browser_id);
                    // if self.browser_id.is_none() {
                    //     self.browser_id = Some(new_browser_id);
                    // }
                    // self.event_queue.push(WindowEvent::SelectBrowser(new_browser_id));
                }
            }
        }
    }
}
