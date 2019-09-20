const ENDPOINT = "https://randomuser.me/api/?results=50";

const fetchUsers = () => fetch(ENDPOINT).then(res => res.json());

export { fetchUsers };
