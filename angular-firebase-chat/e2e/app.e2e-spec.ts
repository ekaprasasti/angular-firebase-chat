import { AngularFirebaseChatPage } from './app.po';

describe('angular-firebase-chat App', () => {
  let page: AngularFirebaseChatPage;

  beforeEach(() => {
    page = new AngularFirebaseChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
