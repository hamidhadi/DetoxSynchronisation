describe('Success-1', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true })
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should find the cube on Modal screen', async () => {
    await device.disableSynchronization()
    await element(by.id('modal-button')).tap()
    await waitFor(element(by.id('cube'))).toBeVisible();
  });

  it('should find the test text on Home screen', async () => {
    await device.enableSynchronization()
    await element(by.id('show-text')).tap()
    await expect(element(by.id('test-text'))).toBeVisible()
  });
});
