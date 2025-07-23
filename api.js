//function get veiculos
async function apiGetVeiculo(route) {
  const response = await fetch(`https://localhost:7151/${route}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization':`Bearer ${localStorage.getItem('token')}` / Verificar isso sem usuários
    },
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar da api');
  }
  return await response.json();
}
