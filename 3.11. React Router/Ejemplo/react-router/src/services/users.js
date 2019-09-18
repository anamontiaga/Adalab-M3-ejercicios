const ENDPOINT = "https://randomuser.me/api/?results=5";

const fetchUsers = () => fetch(ENDPOINT).then(res => res.json());

export { fetchUsers };
