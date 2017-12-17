import { Angular4bootPage } from './app.po';

describe('angular4boot App', () => {
  let page: Angular4bootPage;

  beforeEach(() => {
    page = new Angular4bootPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
