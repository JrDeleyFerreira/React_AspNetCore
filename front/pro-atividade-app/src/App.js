import Atividade from './pages/atividades/Atividade';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cliente from "./pages/clientes/Cliente";
import Dashboard from "./pages/dashboard/Dashboard";
import ClienteForm from './pages/clientes/ClienteForm';
import PageNotFound from "./pages/PageNotFound";

export default function App() {

	return (
		<Routes> {/* Evita mais de 1 match da rota */}
			<Route path='/' element={<Dashboard />} />
			<Route path='/atividade/*' element={<Atividade />} />
			<Route path='/cliente/*' element={<Cliente />} />
			<Route path='/cliente/:id/atividade' element={<Atividade />} />
			<Route path='/cliente/detalhe' element={<ClienteForm />} />
			<Route path='/cliente/detalhe/:id' element={<ClienteForm />} />
			<Route element={<PageNotFound />} />
		</Routes>
	);
}
