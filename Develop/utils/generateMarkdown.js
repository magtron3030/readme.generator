// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateMarkdown({title, description, installation, usage, license, contributing, tests, github, email}) {

    
  switch (license) {
      case 'MIT License':
          license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
          break;
      case 'Apache License 2.0':
            license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
      case 'GNU General Pulic License v3.0':
            license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
      case 'Boost Software License 1.0':
            license = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            break;
      case 'BSD 2-Clause Simplified License':
            license = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
            break;
      case 'BSD 3-Clause New or Revised License':
             license = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
             break;
      case 'Eclipse Public License 2.0':   
             license = '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)'
             break;
      case 'Creative Commons Zero v1.0':
             license = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
             break;


      default:
        console.log("invalidSelection")

}
const result = `
# ${title} ${license}

## Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

[License](#license)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Test
${tests}

## Questions
https://github.com/${github}
${email}

## License
${license}
`
return result;
}

module.exports = {generateMarkdown};
