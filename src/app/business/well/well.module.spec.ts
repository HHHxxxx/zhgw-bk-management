import { WellModule } from './well.module';

describe('WellModule', () => {
  let wellModule: WellModule;

  beforeEach(() => {
    wellModule = new WellModule();
  });

  it('should create an instance', () => {
    expect(wellModule).toBeTruthy();
  });
});
