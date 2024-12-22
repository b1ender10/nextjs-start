import { useAppKit, useAppKitAccount, useAppKitState } from "@reown/appkit/react";
import { useEffect } from "react";
import { useAccount } from "wagmi";

export const useCloseModal = () => {
    const { open: isOpen, selectedNetworkId } = useAppKitState();
    const { isConnected } = useAccount();
    const { isConnected: isConnectedReown } = useAppKitAccount();
    const { open, close } = useAppKit();

    useEffect(() => {
    // console.log(isOpen, selectedNetworkId, isConnectedReown, isConnected);
    if (selectedNetworkId == "eip155:11155111" && isConnectedReown) {
        console.log("close")
        close();
    }
    }, [isOpen, selectedNetworkId]); // TODO: fix this
}