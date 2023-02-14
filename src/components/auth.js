const BASE_URL = 'https://auth.nomoreparties.co';

export const login = async (data) => {
    const response = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(response)
    }
    return response.json();
};

export const register = async (data) => {
    const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(response)
    }
}

export const checkAuth = async (token) => {
    const response = await fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Accept": 'application/json',
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    
    return response.json();
}