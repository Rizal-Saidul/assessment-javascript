import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('Fungsi sum harus mengembalikan 0 jika tipe parameter tidak number', async (t) => {
  await t.test('mengembalikan 0 jika parameter pertama bukan number', () => {
    assert.strictEqual(sum('2', 3), 0);
  });

  await t.test('mengembalikan 0 jika parameter kedua bukan number', () => {
    assert.strictEqual(sum(2, '3'), 0);
  });

  await t.test('mengembalikan 0 jika kedua parameter bukan number', () => {
    assert.strictEqual(sum('2', '3'), 0);
  });
});

test('Fungsi sum harus mengembalikan 0 jika ada parameter negatif', async (t) => {
  await t.test('mengembalikan 0 jika parameter pertama negatif', () => {
    assert.strictEqual(sum(-1, 5), 0);
  });

  await t.test('mengembalikan 0 jika parameter kedua negatif', () => {
    assert.strictEqual(sum(5, -1), 0);
  });

  await t.test('mengembalikan 0 jika kedua parameter negatif', () => {
    assert.strictEqual(sum(-5, -1), 0);
  });
});

test('Fungsi sum harus menjumlahkan dengan benar untuk angka positif', async (t) => {
  await t.test('menjumlahkan dua angka positif: 2 + 3 = 5', () => {
    assert.strictEqual(sum(2, 3), 5);
  });

  await t.test('menjumlahkan dengan nol: 5 + 0 = 5', () => {
    assert.strictEqual(sum(5, 0), 5);
  });

  await t.test('menjumlahkan dengan nol di parameter pertama: 0 + 5 = 5', () => {
    assert.strictEqual(sum(0, 5), 5);
  });

  await t.test('menjumlahkan dua nol: 0 + 0 = 0', () => {
    assert.strictEqual(sum(0, 0), 0);
  });

  await t.test('menjumlahkan angka desimal: 1.5 + 2.5 = 4', () => {
    assert.strictEqual(sum(1.5, 2.5), 4);
  });

  await t.test('menjumlahkan angka besar: 1000 + 2000 = 3000', () => {
    assert.strictEqual(sum(1000, 2000), 3000);
  });
});