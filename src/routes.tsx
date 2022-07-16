import { Route } from "./@types/route";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodosPage";

export const Routes: Array<Route> = [
    {
       key: 'home-route',
       title: 'Home',
       path: '/',
       enabled: true,
       component: HomePage
    }, {
        key: 'todos-route',
        title: 'Todos',	
        path: '/todos',
        enabled: true,
        component: TodoPage
    }
]