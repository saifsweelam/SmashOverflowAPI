import colors from 'yoctocolors-cjs';

const consoleColors = {
    red: colors.red,
    green: colors.green,
    yellow: colors.yellow,
    blue: colors.blue,
    magenta: colors.magenta,
    cyan: colors.cyan,
    white: colors.white,
    black: colors.black,
    gray: colors.gray,
    redBright: colors.redBright,
    greenBright: colors.greenBright,
    yellowBright: colors.yellowBright,
    blueBright: colors.blueBright,
    magentaBright: colors.magentaBright,
    cyanBright: colors.cyanBright,
    whiteBright: colors.whiteBright,
} as const;
type ConsoleColor = keyof typeof consoleColors;

const consoleStyles = {
    bold: colors.bold,
    italic: colors.italic,
    underline: colors.underline,
    overline: colors.overline,
    strikethrough: colors.strikethrough,
    inverse: colors.inverse,
    hidden: colors.hidden,
    reset: colors.reset,
} as const;
type ConsoleStyle = keyof typeof consoleStyles;

export default function ColorLog(...items: [...unknown[], ConsoleColor, ConsoleStyle]) {
    const style = items.pop() as ConsoleStyle;
    const color = items.pop() as ConsoleColor;
    console.log(
        ...items.map(item => consoleStyles[style](
            consoleColors[color](String(item))
        ))
    );
}