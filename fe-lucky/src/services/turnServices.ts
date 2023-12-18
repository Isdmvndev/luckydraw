import http from "../configs/instances";

const getAll = () => {
  return http.get("/turn/getAll");
};

const get = (id: any) => {
  return http.get(`/turn/${id}`);
};

const create = (data: any) => {
  return http.post("/turn/create", data);
};

const update = (id: any, data: any) => {
  return http.put(`/turn/${id}`, data);
};

const remove = (id: any) => {
  return http.delete(`/turn/${id}`);
};

const removeAll = () => {
  return http.delete(`/turn`);
};

const findByTitle = (title: any) => {
  return http.get(`/turn?title=${title}`);
};

const TurnService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TurnService;