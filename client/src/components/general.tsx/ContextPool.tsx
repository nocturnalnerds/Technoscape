import { PropsWithChildren } from "react";
import { CompanyProvider } from "../../context/CompanyContext";
import { Outlet } from "react-router-dom";
import { DialogComponents, DialogProvider } from "./Dialog";
import NewCompany from "../Dialog/NewCompany";
import PopupProvider from "./Popup";
import { AuthProvider } from "../../context/AuthContext";
import ForgotPassword from "../Dialog/ForgotPassword";

const dialog: DialogComponents = [
  {
    name: "newCompany",
    component: <NewCompany />,
    options: {
      collapseWhenClickOutside: true,
    },
  },
  {
    name: "forgotPassword",
    component: <ForgotPassword />,
    options: {
      collapseWhenClickOutside: true,
    },
  },
];

export default function ContextPool() {
  return (
    <CompanyProvider>
      <AuthProvider>
        <PopupProvider>
          <DialogProvider components={dialog}>
            <Outlet />
          </DialogProvider>
        </PopupProvider>
      </AuthProvider>
    </CompanyProvider>
  );
}
