# browsergrab

Get all browser specific information about a target who visits your URL and stores it in a MongoDB collection
Uses [fingerprintjs2](https://github.com/Valve/fingerprintjs2) for browser fingerprinting

## Usage

```bash
$ grabserver --port 9999 --mongo localhost:27017 --dest "https://google.com"
```
