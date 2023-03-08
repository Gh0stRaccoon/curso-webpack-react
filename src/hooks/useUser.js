import { useEffect, useState } from 'react';
import { getUser } from '../services/users';

export function useUser() {
	const [userInfo, setUserInfo] = useState({});
	const [loading, setLoading] = useState(true);

	const obtainUser = async () => {
		setLoading(true);
		const user = await getUser();
		setUserInfo(user);
		setLoading(false);
	};

	useEffect(() => {
		obtainUser();
	}, []);

	return { user: userInfo, loading };
}
