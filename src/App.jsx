import Header from "./components/Header";

import Footer from "./components/Footer";

import TodoList from "./components/TodoList";
const App = () => {
  return (
    <div className="h-[100vh] mx-auto flex flex-col w-[900px]">
      <h1 className="font-bold text-4xl text-center m-12 text-Red">
        To Do App
      </h1>
      <div className="flex flex-col gap-6 text-center items-center justify-center">
        <Header />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
};

export default App;
