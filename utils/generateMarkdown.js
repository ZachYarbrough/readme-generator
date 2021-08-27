function renderLicenseBadge(license) {
    if(license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if(license === 'None') {
        return '';
    }
}

function renderLicenseLink(license) {
    if(license !== 'None') {
        return `- [License](#license)`;
    } else {
        return '';
    }
}

function renderLicenseSection(license) {
    if(license !== 'None') {
        return `## License
${renderLicenseBadge(license)}  
`
    } else {
        return '';
    }
}

function generateMarkdown(data) {
    return `# ${data.title}
## Description 
${data.about}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
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
    