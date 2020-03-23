import * as sapper from '@sapper/app'
import Amplify from 'aws-amplify'
import { cognito } from './config/aws'

Amplify.configure({
	Auth: {
		...cognito
	}
})

sapper.start({
	target: document.querySelector('#sapper')
})
