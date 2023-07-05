export const getToken = localStorage.getItem('Token')
export const getRole = localStorage.getItem('Role')
export const getUserID = localStorage.getItem('UserID')
export const authToken = `Bearer ${getToken}`
