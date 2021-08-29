function renderLicenseBadge(license) {
    switch(license) {
        case 'Apache':
            return `
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)  `;
        case 'MIT':
            return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  `;
        case 'GPL':
            return `
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)  `;
        case 'MPL':
            return `
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)  `;
        case 'IBM':
            return `
[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)  `;
        case 'None':
            return '';
    }
}

function renderLicenseToC(license) {
    if(license !== 'None') {
        return `
- [License](#license)`} else {
        return '';
    }
}

function renderLicenseLink(license) {
    switch(license) {
        case 'Apache':
            return `[Apache License](https://opensource.org/licenses/Apache-2.0)`
        case 'MIT':
            return `[MIT License](https://opensource.org/licenses/MIT)`
        case 'GPL':
            return `[GPL License](http://www.gnu.org/licenses/gpl-3.0)`
        case 'MPL':
            return `[MPL License](https://opensource.org/licenses/MPL-2.0)`
        case 'IBM':
            return `[IPL License](https://opensource.org/licenses/IPL-1.0)`
        case 'None':
            return '';
    }
}

function renderLicenseSection(license) {
    if(license !== 'None') {
        return `## License
Licensed under the ${renderLicenseLink(license)}.
`} else {
        return '';
    }
}

function generateMarkdown(data) {
    return `# ${data.title}${renderLicenseBadge(data.license)}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)${renderLicenseToC(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Description
${data.about}
## Installation
${data.install}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contribution}
## Tests
${data.test}
## Questions
Vist my github here: https://github.com/${data.github}.  
If you have any questions email me at [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
    