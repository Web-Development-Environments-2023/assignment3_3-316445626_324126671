import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import FamilyPage from "./pages/FamilyPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("./pages/FavoritePage"),
  },
  {
    path: "/family",
    name: "family",
    component: FamilyPage,
  },
  {
    path: "/myrecipes",
    name: "myrecipes",
    component: () => import("./pages/MyRecipesPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
