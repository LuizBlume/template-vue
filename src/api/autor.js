import axios from "axios"

export default class AutorApi {
  async buscarTodosOsAutores(page) {
    const { data } = await axios.get(`/autores/?page=${page}`)
    return data
  }
  async adicionarAutor(autor) {
    const { data } = await axios.post("/autores/", autor)
    return data
  }
  async atualizarAutor(autor) {
    const { data } = await axios.put(`/autores/${autor.id}/`, autor)
    return data
  }
  async excluirAutor(id) {
    await axios.delete(`/autores/${id}/`)
  }
}
