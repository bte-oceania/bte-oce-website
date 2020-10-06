import config from '../../config';

export function load(callback) {
    window.gapi.client.load("sheets", "v4", () => {
      window.gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: config.spreadsheetId,
          range: "'Points Info'!C4:D23"
        })
        .then(
          response => {
            const data = response.result.values;
            console.log(data);
            
          }
        )
    });
};