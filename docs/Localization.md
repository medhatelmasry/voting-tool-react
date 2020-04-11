Currently in this project, localization is not implemented.
The previous members that worked on this project seems to have attempted
to implement localization, but have not managed to actually have any text
in the project translated into different languages.

The tool that seems to have been used is the translate and localization
feature of Docusaurus. A more detailed documentation can be found at
https://docusaurus.io/docs/en/translation. A basic rundown of this tool
is that pages that need to be translated are placed in the `website/pages/en`
directory, with strings wrapped in a <translate> tag. Then, the integrated
Crowdin uploads the strings and download the translated files from Crowdin.
This tool may not be the ideal solution as the translation is done through
Crowdin, which is company that provides translation services. While Crowdin 
provides free string translations for Open Source projects, it may take
time for the translations to happne. Also, each and every page that needs
translating will need to be duplicated in order for translation to happen.

An alternative approach is to use `react-localization`. A more detailed
documentation can be found at https://www.npmjs.com/package/react-localization.
By using react-localization, each string in each page can be directly
translated and saved on the project and be reused if necessary. The 
CandidateSectionHeader component has been translated using this library,
and can be checked by changing the language settings of the browser and 
navigating to the componenent.