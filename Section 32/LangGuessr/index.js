import { franc } from 'franc'
import langs from 'langs'
import color from 'colors'

const input = process.argv[2];
const langCode = franc(input);

if (langCode === 'und') {
    console.log("SORRY, COULDN't FIGURE IT OUT")
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is${language}`);
}
