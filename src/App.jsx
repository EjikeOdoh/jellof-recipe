import Heading from "./components/Heading";

import './App.css'

function App() {
  return (
    <main>
      <Heading
        text={"Ingredients"}
      />

      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Okro_soup_with_shrimps%2Cdried_fish%2Ccow_leg_and_tail_with_meat.jpg/250px-Okro_soup_with_shrimps%2Cdried_fish%2Ccow_leg_and_tail_with_meat.jpg" />

      <Heading
        text={"Instructions"}
      />

    </main>
  )
}

export default App;