// Also called Modules

/*
you can split up multiple files, we just need to import them in the correct order of HTML files or JS files

person.js:
const person = {
    name: 'Max'
}

export default person // Import default and ONLY export of the file Name in the receiving file is up to you

utility.js:
export const clean = () => {...}
export const baseData = 10; // You can see that we import two difference instances, then files import those exported data will be a 'Named' exported (Because we don't mention anything is a default) so we need to call it by exact named

app.js:
import person from './person.js'
import prs from './person.js'

import {baseData} from './utility.js'
import {clean} from './utility.js' // But with the named exported you can hack it like this to name it in another file
import {smth as Something} from './utility.js' // Or you have multiple exported file, you can import those like this:
import * as bundled from './utility.js'

*/