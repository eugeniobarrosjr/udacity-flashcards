import AddDeck from "./pages/AddDeck";
import Deck from "./pages/Deck";
import DeckQuiz from "./pages/DeckQuiz";

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

const createNavigator = () => createAppContainer(createStackNavigator({}));

export default createNavigator;
