import { GreenInnovatorsProjectPage } from './app.po';

describe('green-innovators-project App', () => {
  let page: GreenInnovatorsProjectPage;

  beforeEach(() => {
    page = new GreenInnovatorsProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
