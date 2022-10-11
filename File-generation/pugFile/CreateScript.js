function camelize(str) {
	let newStr = ''
	if (str) {
		let wordArr = str.split(/[-_]/g)
		for (let i in wordArr) {
			if (i > 0) {
				newStr +=
					wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1)
			} else {
				newStr += wordArr[i]
			}
		}
	} else {
		return newStr
	}
	return newStr
}
const generatedTSFilefunction = (component) => {
	console.log('Create TSfile for component', component)
	// let RemoveSpecialChar = component.replace(/[^a-zA-Z0-9]/g, ' ')
	let camelCase = camelize(component)
	const className = camelCase.charAt(0).toUpperCase() + camelCase.slice(1)
	console.log(className)
	return `
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-${component}',
  templateUrl: './${component}.component.html',
  styleUrls: ['./${component}.component.scss'],
})
export class ${className}Component implements OnInit {

  constructor() {}

  ngOnInit(): void {}


  onSubmit(Form: HTMLFormElement) {
    console.error('Submit form');
    console.warn(Form);
  }
}
`
}
module.exports = { generatedTSFilefunction }
