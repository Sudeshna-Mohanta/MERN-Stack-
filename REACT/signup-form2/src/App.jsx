/* eslint-disable no-unused-vars */
import "./App.css";
import { FormContext, FormProvider } from "./context/FormContext";

import SignUpForm from "./components/SignUp/SignUpForm";

function AppContent() {
  return <SignUpForm />;
}

function App() {
  return (
    <FormProvider>
      <AppContent />
    </FormProvider>
  );
}

export default App;
