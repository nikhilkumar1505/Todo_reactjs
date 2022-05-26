import { ProfileCard } from "../ProfileCard";
import { render, screen } from "./test-utils";
import { ApiService } from "../../services/Api.services";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { apiConfig } from "../../network";
import { RootContext } from "../../services/RootContext";

const users = {
  results: [
    {
      name: { title: "Mr", first: "brad", last: "gibson" },
      email: "brad.gibsson@exapmle.com",
      picture: {
        large: "https://randomuser.me/api/portraits/men/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      },
    },
    {
      name: { title: "Mr", first: "will", last: "smit" },
      email: "will.jasonsmit@exapmle.com",
      picture: {
        large: "https://randomuser.me/api/portraits/men/72.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/72.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/72.jpg",
      },
    },
  ],
};
const success = rest.get(apiConfig.baseUrl, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(users));
});

const server = setupServer(success);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("testing block for Profile display componets", () => {
  const results: any = {
    profile: [],
    setProfile: jest.fn(),
  };

  it("should render without breaking", () => {
    render(<ProfileCard />);
  });

  it("should fetch users", async () => {
    const res = await ApiService.getDetails("male", "AU");
    expect(res).toStrictEqual(users);
  });
  it("check for the name of user", async () => {
    const res = await ApiService.getDetails("male", "AU");
    results.profile = res.results;
    expect(screen.queryByText("brad.gibsson@exapmle.com")).not.toBeTruthy();
    render(
      <RootContext.Provider value={results}>
        <ProfileCard />
      </RootContext.Provider>
    );
    expect(screen.queryByText("brad.gibsson@exapmle.com")).toBeTruthy();
  });
});
