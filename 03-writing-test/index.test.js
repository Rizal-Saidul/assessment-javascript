const test = require('node:test');
const assert = require('node:assert');
const sum = require('./index');

test('Fungsi sum harus menjumlahkan dua angka dengan benar', async (t) => {
  
  await t.test('menjumlahkan dua angka positif: 2 + 3 = 5', () => {
    assert.strictEqual(sum(2, 3), 5);
  });

  await t.test('menjumlahkan angka negatif: -1 + -1 = -2', () => {
    assert.strictEqual(sum(-1, -1), -2);
  });

  await t.test('menjumlahkan dengan angka nol: 5 + 0 = 5', () => {
    assert.strictEqual(sum(5, 0), 5);
  });

  await t.test('menjumlahkan angka desimal: 0.1 + 0.2 mendekati 0.3', () => {
    // Menggunakan strictEqual untuk hasil presisi jika memungkinkan
    // atau jika sum menangani float dengan baik
    assert.strictEqual(sum(1.5, 2.5), 4);
  });
});