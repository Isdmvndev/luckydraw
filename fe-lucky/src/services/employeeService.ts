import http from "../configs/instances";

const getAll = () => {
  return http.get("/employee/getAll");
};

const get = (id: any) => {
  return http.get(`/employee/${id}`);
};

const create = (data: any) => {
  return http.post("/employee/create", data);
};

const update = (id: any, data: any) => {
  return http.put(`/employee/${id}`, data);
};

const remove = (id: any) => {
  return http.delete(`/employee/${id}`);
};

const removeAll = () => {
  return http.delete(`/employee`);
};

const findByTitle = (title: any) => {
  return http.get(`/employee?title=${title}`);
};
const findByPrize = (prizeId: any) => {
  return http.get(`/employee?prizeId=${prizeId}`);
};

const EmployeeService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  findByPrize: findByPrize
};

export default EmployeeService;