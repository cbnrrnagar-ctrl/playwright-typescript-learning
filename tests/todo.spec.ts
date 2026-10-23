import {test, expect} from '@playwright/test';

test('add a todo list and see in the function', async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  const newToDo = page.getByPlaceholder('What needs to be done?');
  await newToDo.fill("Learn Playwright");
  await newToDo.press('Enter');
  const items = page.getByTestId('todo-title');
  await expect(items).toHaveText(['Learn Playwright']);
});

test('add another todo list and see in the function', async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  const newToDo = page.getByPlaceholder('What needs to be done?');
  await newToDo.fill("Buy Milk");
  await newToDo.press('Enter');
  await newToDo.fill("Walk the Dog");
  await newToDo.press('Enter');
  const items = page.getByTestId('todo-title');
  await expect(items).toHaveText(['Buy Milk', 'Walk the Dog']);
});                                 