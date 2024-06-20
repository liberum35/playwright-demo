import { test, expect } from '@playwright/test';

// Тест для проверки формы на странице https://demoqa.com/webtables
test('Check form on page', async ({ page }) => {
  // Переходим на страницу
  await page.goto('https://demoqa.com/webtables', {waitUntil:'domcontentloaded'});
  // Кликаем на кнопку "Add"
  await page.getByRole('button', { name: 'Add' }).click();
  // Проверяем, что все поля пустые
  await expect(page.getByPlaceholder('First Name')).toBeEmpty();
  await expect(page.getByPlaceholder('Last Name')).toBeEmpty();
  await expect(page.getByPlaceholder('name@example.com')).toBeEmpty();
  await expect(page.getByPlaceholder('Age')).toBeEmpty();
  await expect(page.getByPlaceholder('Salary')).toBeEmpty();
  await expect(page.getByPlaceholder('Department')).toBeEmpty();
  // Заполняем поля формы
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Name');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('LastName');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('test@youpmail.com');
  await page.getByPlaceholder('Age').click();
  await page.getByPlaceholder('Age').fill('30');
  await page.getByPlaceholder('Salary').click();
  await page.getByPlaceholder('Salary').fill('5000');
  await page.getByPlaceholder('Department').click();
  await page.getByPlaceholder('Department').fill('QA');
  // Кликаем на кнопку "Submit"
  await page.getByRole('button', { name: 'Submit' }).click();
});