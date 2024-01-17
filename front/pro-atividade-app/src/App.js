import Atividade from './pages/atividades/Atividade';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Cliente from "./pages/clientes/Cliente";
import Dashboard from "./pages/dashboard/Dashboard";
import ClienteForm from './pages/clientes/ClienteForm';
import PageNotFound from "./pages/PageNotFound";

export default function App() {

	return (
		<Switch> {/* Evita mais de 1 match da rota */}
			<Route path='/' exact component={Dashboard} />
			<Route path='/atividade/list' component={Atividade} />
			<Route path='cliente/:id/atividade' component={Atividade} />
			<Route path='/cliente/list' component={Cliente} />
			<Route path='/cliente/detalhe/:id?' component={ClienteForm} />
			<Route component={PageNotFound} />
		</Switch>
	);
}
