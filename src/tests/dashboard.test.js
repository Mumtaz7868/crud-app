import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Dashboard from "../Comopnents/dashboard/Dashboard";
import { openModal } from "../store/slices/modalSlice";
import AddProductForm from "../Comopnents/dashboard/AddProdcutform";

const mockStore = configureStore();

describe("Dashboard Component", () => {
  const store = mockStore({
    data: {
      data: [],
    },
    modal: {
      modal: false,
    },
    formData: {
      formData: {},
    },
  });

  test("renders Dashboard component", () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    expect(screen.getByText("Add Product")).toBeInTheDocument();
  });

  test('handles click on "Add Product" button and opens modal', () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    fireEvent.click(screen.getByText("Add Product"));

    expect(store.getActions()).toContainEqual(openModal());
  });
});

describe("AddProductForm Component", () => {
  let store;
  
  beforeEach(() => {
    store = mockStore({
      formData: {
        formData: {
          title: "",
          subtitle: "",
          image: "",
          description: "",
        },
      },
    });
  });

  test("renders form and handles input", () => {
    render(
      <Provider store={store}>
        <AddProductForm handleSubmit={() => {}} isEdit={false} />
      </Provider>
    );

    const titleValue = screen.getByLabelText("Title").value;
    const subTitleValue = screen.getByLabelText("SubTitle").value;
    const imageValue = screen.getByLabelText("Image").value;
    const descriptionValue = screen.getByLabelText("Description").value;

    expect(titleValue).toBe("");
    expect(subTitleValue).toBe("");
    expect(imageValue).toBe("");
    expect(descriptionValue).toBe("");
  });

  test("handles form submission", () => {
    const handleSubmitMock = jest.fn();

    render(
      <Provider store={store}>
        <AddProductForm handleSubmit={handleSubmitMock} isEdit={false} />
      </Provider>
    );

    fireEvent.submit(screen.getByRole("button", { name: "Submit" }));
    expect(handleSubmitMock).toHaveBeenCalled();
  });
});
