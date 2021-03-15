export const width = (data) => {

  return {
    type: "WIDTH",
    payload: data,
  }
}


export const setrandevu = (data) => {

  console.log("set randevu");
  return {
    type: "RANDEVULAR",
    payload: data,
  }
}


export const setkat = (data) => {

  return {
    type: "KAT",
    payload: data,
  }
}
