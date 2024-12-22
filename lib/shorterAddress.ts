export const shortenedAddress = (address: string | undefined) => {
    return `${address?.slice(0, 5)}...${address?.slice(-5)}`;
}