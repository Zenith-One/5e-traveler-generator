import { TravelerDndPage } from './app.po';

describe('traveler-dnd App', () => {
  let page: TravelerDndPage;

  beforeEach(() => {
    page = new TravelerDndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
