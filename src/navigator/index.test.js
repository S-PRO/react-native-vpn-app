import { initialRouteName } from './index';

describe("check initialRouteName", () => {

  it("should be initial route ", () => {
    expect(initialRouteName).toEqual("Onboarding");
  });
});
