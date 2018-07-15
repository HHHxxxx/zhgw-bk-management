import { MianModule } from './mian.module';

describe('MianModule', () => {
  let mianModule: MianModule;

  beforeEach(() => {
    mianModule = new MianModule();
  });

  it('should create an instance', () => {
    expect(mianModule).toBeTruthy();
  });
});
