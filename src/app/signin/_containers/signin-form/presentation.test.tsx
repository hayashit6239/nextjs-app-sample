import { render, screen } from "@testing-library/react";
import { SigninFormPresentation } from "./presentation";
import { useActionState } from "react-use-action-state";
import { useAuthContext } from "@/features/contexts/authContexts";
import { useRouter } from "next/navigation";
import userEvent from "@testing-library/user-event";

jest.mock("react-use-action-state");
jest.mock("@/common/contexts/authContexts");
jest.mock("next/navigation");

describe("SigninFormPresentation", () => {
    const mockFormAction = jest.fn();
    const mockSetAuthUser = jest.fn();
    const mockRouter = { push: jest.fn() };

    beforeEach(() => {
        (useActionState as jest.Mock).mockReturnValue([
            { username: "", password: "", zodErrors: null },
            mockFormAction,
            false, // pending is initially false
        ]);
        (useAuthContext as jest.Mock).mockReturnValue({ setAuthUser: mockSetAuthUser });
        (useRouter as jest.Mock).mockReturnValue(mockRouter);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders the form correctly and submits", async () => {
        render(<SigninFormPresentation />);
        const user = userEvent.setup();
        await user.type(screen.getByPlaceholderText("ユーザー名"), "testuser");
        await user.type(screen.getByPlaceholderText("パスワード"), "password");
        await user.click(screen.getByRole("button", { name: "サインイン" }));

        expect(mockFormAction).toHaveBeenCalledWith({
            username: "testuser",
            password: "password",
        });
    });

    it("displays loading overlay while pending", () => {
        (useActionState as jest.Mock).mockReturnValue([
            { username: "", password: "" },
            mockFormAction,
            true, // pending is true
        ]);

        render(<SigninFormPresentation />);
        expect(screen.getByRole("progressbar")).toBeVisible();
    });

    it("updates authUser and redirects after successful submission", () => {
        (useActionState as jest.Mock).mockReturnValue([
            { id: 1, name: "Test User", imageUrl: "test.jpg", username: "", password: "" },
            mockFormAction,
            false,
        ]);

        render(<SigninFormPresentation />);

        expect(mockSetAuthUser).toHaveBeenCalledWith({
            id: 1,
            name: "Test User",
            imageUrl: "test.jpg",
        });
        expect(mockRouter.push).toHaveBeenCalledWith("/users/1");
    });

    it("displays zodErrors if present", async () => {
        const mockZodErrors = { username: "Username is required" };
        (useActionState as jest.Mock).mockReturnValue([
            { username: "", password: "", zodErrors: mockZodErrors },
            mockFormAction,
            false,
        ]);

        render(<SigninFormPresentation />);

        expect(screen.getByText("Username is required")).toBeVisible();
    });
});
