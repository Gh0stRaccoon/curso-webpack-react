export const getUser = async () => {
	try {
		const { results: users } = await fetch('https://randomuser.me/api/').then(
			(res) => res.json()
		);
		return users[0];
	} catch (error) {
		throw new Error('No se pudo obtener el usuario');
	}
};
