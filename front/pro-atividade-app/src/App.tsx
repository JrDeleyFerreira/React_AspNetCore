
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Atividade from "./pages/atividades/Atividade.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import Cliente from "./pages/clientes/Cliente.tsx";
import ClienteForm from "./pages/clientes/ClienteForm.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";

const App = () => {

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

export default App;