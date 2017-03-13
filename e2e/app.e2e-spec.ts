import { TestCameraPage } from './app.po';

describe('test-camera App', () => {
  let page: TestCameraPage;

  beforeEach(() => {
    page = new TestCameraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
