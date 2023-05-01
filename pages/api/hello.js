import { setCookie } from 'cookies-next'

export default function handler(req, res) {
	setCookie('test', 'test12345', {
		req,
		res,
		maxAge: 34000,
		path: '/',
		domain: '/',
		sameSite: 'none', // Set to 'none' for third-party cookies
		secure: true // Required for 'none'
	})

	console.log('after cookie set')

	res.status(200).send(`Hello, test!`)
}
