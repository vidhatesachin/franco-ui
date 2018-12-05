import { BranchModule } from './branch.module';

describe('BranchModule', () => {
  let branchModule: BranchModule;

  beforeEach(() => {
    branchModule = new BranchModule();
  });

  it('should create an instance', () => {
    expect(branchModule).toBeTruthy();
  });
});
