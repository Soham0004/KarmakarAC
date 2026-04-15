const SHEET_ID = '1DPsqo04fD9rmnJuUwQTlD9HF5i6fr4wG-MpJOZj6AEk';
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  const sheet = SpreadsheetApp.openById('1DPsqo04fD9rmnJuUwQTlD9HF5i6fr4wG-MpJOZj6AEk').getSheetByName('Sheet1');

  sheet.appendRow([
    new Date(),
    e.parameter.name || '',
    e.parameter.phone || '',
    e.parameter.service || '',
    e.parameter.preferredDate || '',
    e.parameter.area || '',
    e.parameter.message || '',
    e.parameter.page || '',
    e.parameter.submittedAt || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
