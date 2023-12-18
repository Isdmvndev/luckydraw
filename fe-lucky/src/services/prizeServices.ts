import http from "../configs/instances";

const getAll = (idTurn:any) => {
  return http.get(`/prize/getAll?idTurn=${idTurn}`);
};

const get = (id: any) => {
  return http.get(`/prize/${id}`);
};

const create = (data: any, idTurn: any) => {
  return http.patch("/prize/create", data,{
    params:{
      idTurn:idTurn
    }
  });
};

const update = (id: any, data: any, idTurn: any) => {
  return http.put(`/prize/update`, data,{
    params:{
      idTurn:idTurn
    }
  });
};
const setEmployeeToPrize = (data: any,) => {
  return http.put(`/prize/setemployeetoprize`, data,{
  });
};


const remove = (id: any) => {
  return http.delete(`/prize/${id}`);
};

const removeAll = () => {
  return http.delete(`/prize`);
};

const findByTitle = (title: any) => {
  return http.get(`/prize?title=${title}`);
};

const PrizeService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  setEmployeeToPrize
};

export default PrizeService;