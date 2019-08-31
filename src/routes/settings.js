import React from "react";
import '../css/settings.css';
class Settings extends React.Component {
  render() {
    return(
      <div className="settings">
        <nav className="titleBar">
          <h1>Flash Card App</h1>
          <h2>Settings</h2>
        </nav>
        <section className="settings__inputs">
          <label for="frequency">
            Frequency of notifications:
          </label>
          <select id="frequency">
            <option value="never">Never</option>
            <option value="daily">Daily</option>
            <option value="twice">Twice a day</option>
            <option value="hourly">Hourly</option>
          </select>
          <label for="type">
            Card types to use for notifications:
          </label>
          <select id="type">
            <option value="all">All Types</option>
            <option value="ch/re">Challenge/Response</option>
            <option value="tip">Tip</option>
            <option value="t/f">True/Falses</option>
          </select>
          <button type="button" id="saveSettings">Save Settings</button>
        </section>
      </div>
    );
  }
}

export default Settings;
