import * as figlet from 'figlet';


export const printLineStar = () => {
    console.log('******************************************');
}

export const printLineEmpty = () => {
    console.log('');
}

export const printLineTextHeader = (text: string) => {
    console.log(figlet.textSync(text, { horizontalLayout: 'full' }));
}