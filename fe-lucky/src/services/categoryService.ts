import http from "../configs/instances";

const getAll = () => {
  return http.get("/category/getAll");
};

const get = (id: any) => {
  return http.get(`/category/${id}`);
};

const create = (data: any) => {
  return http.post("/category/create", data);
};

const update = (id: any, data: any) => {
  return http.put(`/category/${id}`, data);
};

const remove = (id: any) => {
  return http.delete(`/category/${id}`);
};

const removeAll = () => {
  return http.delete(`/category`);
};

const findByTitle = (title: any) => {
  return http.get(`/category?title=${title}`);
};
const findByPrize = (prizeId: any) => {
  return http.get(`/category?prizeId=${prizeId}`);
};

const EmployeeService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  findByPrize
};

export default EmployeeService;