import twitter from '@images/twitter.png';
import github from '@images/github.png';
import instagram from '@images/instagram.png';
import { useUser } from '../hooks/useUser';
import React from 'react';

export function UserCard() {
	const { user, loading } = useUser();
	return (
		<>
			{loading ? (
				<h1>Cargando...</h1>
			) : (
				<div className="About">
					<div className="card">
						<div className="card_details">
							<div className="card_photo center circle">
								<img src={user.picture.large} alt={user.name.first} />
								<svg
									viewBox="0 0 100 100"
									xmlns="http://www.w3.org/2000/svg"
									style={{ enableBackground: 'new -580 439 577.9 194' }}
									xmlSpace="preserve"
								>
									<circle cx="50" cy="50" r="40" />
								</svg>
							</div>
							<p className="card_title">Hi, My name is</p>
							<p className="card_value">
								{user.name.first} {user.name.last}
							</p>
						</div>
						<div className="card_userdata">
							<ul>
								<li>{user.email}</li>
								<li>{user.location.country}</li>
							</ul>
						</div>
						<div className="card_social">
							<a href="https://twitter.com/gndx">
								<img src={twitter} />
							</a>
							<a href="https://github.com/gndx">
								<img src={github} />
							</a>
							<a href="https://instagram.com/gndx">
								<img src={instagram} />
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
