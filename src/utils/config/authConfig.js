export const getToken = localStorage.getItem('Token')
export const authToken = `Bearer ${getToken}`
