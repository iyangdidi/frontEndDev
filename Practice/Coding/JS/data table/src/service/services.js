import users from "../data/users.js";
// should get from backend
// mimic the behavir here
// should use async, use sync to make it simplier
export const getPaginatedUserData = (pageIndex, size) => {
    const startIndex = (pageIndex - 1) * size;
    const endIndex = pageIndex * size - 1;
    if (endIndex < users.length) {
        return users.slice(startIndex, endIndex + 1);
    } else {
        return users.slice(startIndex);
    }
};

export const getTotalPages = (usersPerPage) => {
    return Math.ceil(users.length / usersPerPage);
};
