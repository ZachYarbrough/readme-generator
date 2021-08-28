function renderLicenseBadge(license) {
    switch(license) {
        case 'Apache':
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        case 'MIT':
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        case 'GPL':
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`;
        case 'MPL':
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        case 'IBM':
            return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
        case 'None':
            return '';
    }
}

function renderLicenseLink(license) {
    if(license !== 'None') {
        return `
- [License](#license)`} else {
        return '';
    }
}

function renderLicenseSection(license) {
    if(license !== 'None') {
        return `## License
${renderLicenseBadge(license)}  
`} else {
        return '';
    }
}

function generateMarkdown(data) {
    return `# ${data.title}
## Description 
${data.about}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
## Installation
${data.install}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contribution}
## Tests
${data.test}
`;
}

    module.exports = generateMarkdown;
    