const tarefas = [];

function listar() {
  return tarefas;
}

function buscarPeloId(tarefaId) {
  return tarefas.find(t => t.id === tarefaId) || null;
}

function criar(tarefa) {
  const novaTarefa = { ...tarefa, id: Math.random().toString(36).substr(2, 4) };
  tarefas.push(novaTarefa);
  return novaTarefa;
}

function atualizar(tarefaId, dados) {
  const tarefa = tarefas.find(t => t.id === tarefaId);
  if (!tarefa) return null;
  Object.assign(tarefa, dados);
  return tarefa;
}

function remover(tarefaId) {
  const index = tarefas.findIndex(t => t.id === tarefaId);
  if (index === -1) return null;
  return tarefas.splice(index, 1)[0];
}

module.exports = { listar, buscarPeloId, criar, atualizar, remover };
