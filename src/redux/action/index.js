export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const ADD_TO_FAV = "ADD_TO_FAV";

export const removeAction = (company) => {
  return {
    type: REMOVE_FROM_FAV,
    payload: company
  };
};

export const addAction = (data) => {
  return { type: ADD_TO_FAV, payload: data.company_name };
};
