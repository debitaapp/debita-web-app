import * as sapper from '@sapper/app'
import Amplify from 'aws-amplify'
import awsmobile from './aws-exports'

Amplify.configure(awsmobile)

sapper.start({
  target: document.querySelector('#sapper'),
})
