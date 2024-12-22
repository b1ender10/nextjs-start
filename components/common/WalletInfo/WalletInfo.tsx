import React, { useState } from 'react';
import styles from './styles.module.scss';
import { DropDown, DropDownContent, DropDownTrigger, DropDownItem, Icons, Button } from '@/components/common';
import { useAppKitAccount, useAppKitNetwork, useWalletInfo } from '@reown/appkit/react';
import { useDisconnect } from 'wagmi';
import { useDisconnect as useDisconnectReown } from '@reown/appkit/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { shortenedAddress } from '@/lib';

interface WalletInfoProps {
  type?: 'short' | 'normal',
  className?: string
}

export const WalletInfo: React.FC<WalletInfoProps> = ({type = "normal", className}) => {

  const { address, isConnected, caipAddress, status } = useAppKitAccount()
  const { caipNetwork, caipNetworkId, chainId, switchNetwork } = useAppKitNetwork()
  const [ isDropDownOpen, setIsDropDownOpen ] = useState(false);
  const { disconnect } = useDisconnect();
  const { disconnect: disconnectReown } = useDisconnectReown();

  const tempDisconnect = async () => {
    try {
      localStorage.clear();
      await disconnect(); // wagmi
      await disconnectReown(); // appkit // problem here // fix ???
    } catch(e) {
      console.error(e);
    }
    
  }

  if(type === "short") {
    return (
      <div className={`${styles.walletInfo} ${className}`}>
        {isConnected && 
          <DropDown open={isDropDownOpen} onOpenChange={() => setIsDropDownOpen(prev => !prev)}>
            <DropDownTrigger>
                <div className={styles.networkInfo} >
                  <Button variant="tertiary">{shortenedAddress(address)}</Button>
                </div>
            </DropDownTrigger>

            <DropDownContent>
              <DropDownItem onClick={tempDisconnect}>
                Disconnect
              </DropDownItem>
            </DropDownContent>
          </DropDown>
        }
      </div>
    )
  }


  return (
    <div className={styles.walletInfo}>
      <DropDown open={isDropDownOpen} onOpenChange={() => setIsDropDownOpen(prev => !prev)}>
        <DropDownTrigger>
          <div className={styles.networkInfo} >
            <img loading="lazy" src={"/images/main/ethereumLogo.svg"} alt="" className={styles.networkIcon} />
            <div className={styles.networkName}>
              <span>{caipNetwork?.name}</span>
              <Icons.ArrowUp fill="Emerald-dark" height={8} style={isDropDownOpen ? {rotate: "0deg"} : {rotate: "180deg"}} />
            </div>
          </div>
        </DropDownTrigger>

        <DropDownContent>
          <DropDownItem onClick={tempDisconnect}>
            Disconnect
          </DropDownItem>
        </DropDownContent>
      </DropDown>
      <Button className={styles.addressButton} variant="primary">{shortenedAddress(address)}</Button>
    </div>
  )
};