import { BenioCzarodziejPage } from './app.po';

describe('benio-czarodziej App', () => {
  let page: BenioCzarodziejPage;

  beforeEach(() => {
    page = new BenioCzarodziejPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
