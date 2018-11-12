
import { NewDashboardModule } from './new-dashboard.module';

describe('DashboardModule', () => {
  let dashboardModule: NewDashboardModule;

  beforeEach(() => {
    dashboardModule = new NewDashboardModule();
  });

  it('should create an instance', () => {
    expect(dashboardModule).toBeTruthy();
  });
});
