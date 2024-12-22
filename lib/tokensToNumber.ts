export const tokensToNumberString = (tokens: unknown) => {
    const balance = tokens ? Number(tokens.toString()) : 0;
    const formattedBalance = (Math.floor(balance / 10 ** 18 * 100) / 100).toLocaleString();
    return formattedBalance
}

export const tokensToNumber = (tokens: unknown) => {
    const balance = tokens ? Number(tokens.toString()) : 0;
    const formattedBalance = (balance / 10 ** 18);
    return formattedBalance
}

export const numberToToken = (number: number) => {
    const balance = number ? BigInt(number) : BigInt(0);
    const formattedBalance = balance * BigInt(10 ** 18);
    return formattedBalance
}