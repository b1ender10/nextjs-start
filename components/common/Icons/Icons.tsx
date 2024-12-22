import { FC, HTMLAttributes } from "react"

export type IconsProps = HTMLAttributes<SVGElement> & {
    width?: number
    height?: number
    fill?: string
    viewBox?: string
}

export namespace Icons {
    export const Currency: FC<IconsProps> = ({ width, height, fill, viewBox, ...other }) => {
        return (
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : "13"}
                height={height ? height : "14"}
                viewBox={viewBox ? viewBox : "0 0 13 14"}
                fill={fill ? `var(--${fill})` : "none"}
                {...other}
            >
                <path fillRule="evenodd" clipRule="evenodd" d="M9.70724 2.62564H1.4585V0.25H9.70724C10.852 0.25 11.6834 0.890629 12.1813 1.56633C12.6629 2.22 12.9407 3.04047 12.9407 3.74747C12.9407 4.8708 12.5469 5.767 11.9082 6.4185C11.296 7.043 10.5291 7.37299 9.86335 7.53942L9.85467 7.54159L0.541371 9.7213L0 7.40817L3.30672 6.63426V3.81362H5.68236V6.07826L9.29511 5.23272C9.68163 5.13495 10.0007 4.97078 10.2118 4.75538C10.398 4.56551 10.5651 4.27389 10.5651 3.74747C10.5651 3.5966 10.48 3.26225 10.2687 2.97556C10.0737 2.7109 9.8823 2.62564 9.70724 2.62564ZM5.68236 10.8743H5.68341V13.2499H3.30672V10.5443L5.68236 9.88444V10.8743Z" 
                    fill={fill ? `var(--${fill})` : "#01565B"}
                />
            </svg>
        )
    }

    export const ArrowUp: FC<IconsProps> = ({ width, height, fill, viewBox, ...other }) => {
        return (
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : "19"}
                height={height ? height : "10"}
                viewBox={viewBox ? viewBox : "0 0 19 10"}
                fill={fill ? `var(--${fill})` : "none"}
                {...other}
            >
                <path d="M1.55212 8.7831L10.2939 1.2168" stroke={fill ? `var(--${fill})` : "white"} strokeWidth="2"/>
                <path d="M18 8.527L9.61763 1.2168" stroke={fill ? `var(--${fill})` : "white"} strokeWidth="2"/>
            </svg>
        )
    }

    export const ArrowRight: FC<IconsProps> = ({ width, height, fill, viewBox, ...other }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : "20"}
                height={height ? height : "19"}
                viewBox={viewBox ? viewBox : "0 0 20 19"}
                fill={fill ? `var(--${fill})` : "none"}
                {...other}
            >
                <path fillRule="evenodd" clipRule="evenodd" d="M9.60686 3.39838C9.29769 3.70754 9.29769 4.2088 9.60686 4.51796L13.7971 8.70817H4.62498C4.18775 8.70817 3.83331 9.06261 3.83331 9.49984C3.83331 9.93706 4.18775 10.2915 4.62498 10.2915H13.7971L9.60686 14.4817C9.29769 14.7909 9.29769 15.2921 9.60686 15.6013C9.91602 15.9105 10.4173 15.9105 10.7264 15.6013L16.2681 10.0596C16.4177 9.91006 16.4949 9.71553 16.4997 9.51955C16.5 9.50726 16.5001 9.49496 16.4998 9.48267C16.4977 9.38243 16.4769 9.28677 16.4408 9.19903C16.4022 9.10482 16.3446 9.01655 16.2681 8.94004L10.7264 3.39838C10.4173 3.08921 9.91602 3.08921 9.60686 3.39838Z" 
                    fill={fill ? `var(--${fill})` : "#0D6C4D"}
                />
                <mask id="mask0_2668_575" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="3" y="3" width="14" height="13">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.60686 3.39838C9.29769 3.70754 9.29769 4.2088 9.60686 4.51796L13.7971 8.70817H4.62498C4.18775 8.70817 3.83331 9.06261 3.83331 9.49984C3.83331 9.93706 4.18775 10.2915 4.62498 10.2915H13.7971L9.60686 14.4817C9.29769 14.7909 9.29769 15.2921 9.60686 15.6013C9.91602 15.9105 10.4173 15.9105 10.7264 15.6013L16.2681 10.0596C16.4177 9.91006 16.4949 9.71553 16.4997 9.51955C16.5 9.50726 16.5001 9.49496 16.4998 9.48267C16.4977 9.38243 16.4769 9.28677 16.4408 9.19903C16.4022 9.10482 16.3446 9.01655 16.2681 8.94004L10.7264 3.39838C10.4173 3.08921 9.91602 3.08921 9.60686 3.39838Z" 
                    fill="white"
                />
                </mask>
                <g mask="url(#mask0_2668_575)">
                <rect x="0.666626" width="19" height="19" fill={fill ? `var(--${fill})` : "#0D6C4D"}/>
                </g>
            </svg>
        )
    }

    export const TrendingUp: FC<IconsProps> = ({ width, height, fill, viewBox, ...other }) => {
        return (
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : "20"}
                height={height ? height : "19"}
                viewBox={viewBox ? viewBox : "0 0 20 19"}
                fill={fill ? `var(--${fill})` : "none"}
                {...other}
            >
                <path d="M19.333 4.75016V9.50016C19.333 9.97516 19.0163 10.2918 18.5413 10.2918C18.0663 10.2918 17.7497 9.97516 17.7497 9.50016V6.65016L11.5747 12.8252C11.258 13.1418 10.783 13.1418 10.4663 12.8252L7.06217 9.421L1.67884 14.8043C1.52051 14.9627 1.36217 15.0418 1.12467 15.0418C0.887174 15.0418 0.728841 14.9627 0.570508 14.8043C0.253841 14.4877 0.253841 14.0127 0.570508 13.696L6.50801 7.7585C6.82467 7.44183 7.29967 7.44183 7.61634 7.7585L11.0205 11.1627L16.6413 5.54183H13.7913C13.3163 5.54183 12.9997 5.22516 12.9997 4.75016C12.9997 4.27516 13.3163 3.9585 13.7913 3.9585H18.5413C18.6205 3.9585 18.7788 3.9585 18.858 4.03766C19.0163 4.11683 19.1747 4.27516 19.2538 4.4335C19.333 4.51266 19.333 4.671 19.333 4.75016Z" fill="#272727"/>
                <mask id="mask0_2489_9660" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="3" width="20" height="13">
                <path d="M19.333 4.75016V9.50016C19.333 9.97516 19.0163 10.2918 18.5413 10.2918C18.0663 10.2918 17.7497 9.97516 17.7497 9.50016V6.65016L11.5747 12.8252C11.258 13.1418 10.783 13.1418 10.4663 12.8252L7.06217 9.421L1.67884 14.8043C1.52051 14.9627 1.36217 15.0418 1.12467 15.0418C0.887174 15.0418 0.728841 14.9627 0.570508 14.8043C0.253841 14.4877 0.253841 14.0127 0.570508 13.696L6.50801 7.7585C6.82467 7.44183 7.29967 7.44183 7.61634 7.7585L11.0205 11.1627L16.6413 5.54183H13.7913C13.3163 5.54183 12.9997 5.22516 12.9997 4.75016C12.9997 4.27516 13.3163 3.9585 13.7913 3.9585H18.5413C18.6205 3.9585 18.7788 3.9585 18.858 4.03766C19.0163 4.11683 19.1747 4.27516 19.2538 4.4335C19.333 4.51266 19.333 4.671 19.333 4.75016Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_2489_9660)">
                <rect x="0.333008" width="19" height="19" fill="#272727"/>
                </g>
            </svg>
        )
    }

    export const Wallet: FC<IconsProps> = ({ width, height, fill, viewBox, ...other }) => {
        return (
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : "14"}
                height={height ? height : "15"}
                viewBox={viewBox ? viewBox : "0 0 14 15"}
                fill={fill ? `var(--${fill})` : "none"}
                {...other}
            >
                <path fillRule="evenodd" clipRule="evenodd" d="M10.1818 2.19143H3.81818C2.76736 2.19143 1.86526 2.82818 1.47667 3.73689H6.53111C7.08339 3.73689 7.53111 4.1846 7.53111 4.73689C7.53111 5.28917 7.08339 5.73689 6.53111 5.73689H1.27273V10.2632C1.27273 11.669 2.41237 12.8087 3.81818 12.8087H10.1818C11.5876 12.8087 12.7273 11.669 12.7273 10.2632V9.72731H10.5C9.26992 9.72731 8.27274 8.73013 8.27274 7.50004C8.27274 6.26995 9.26992 5.27277 10.5 5.27277H12.7273V4.73688C12.7273 3.33107 11.5876 2.19143 10.1818 2.19143ZM12.7273 6.54549H12.0909V7.18186C12.0909 7.53331 11.806 7.81822 11.4546 7.81822C11.1031 7.81822 10.8182 7.53331 10.8182 7.18186V6.54549H10.5C9.97283 6.54549 9.54546 6.97286 9.54546 7.50004C9.54546 8.02722 9.97283 8.45458 10.5 8.45458H12.7273V6.54549ZM3.81818 0.918701C1.70946 0.918701 0 2.62816 0 4.73688V10.2632C0 12.3719 1.70946 14.0814 3.81818 14.0814H10.1818C12.2905 14.0814 14 12.3719 14 10.2632V4.73688C14 2.62816 12.2905 0.918701 10.1818 0.918701H3.81818Z" 
                    fill="#E47373"
                />
            </svg>
        )
    }

    export const Refresh: FC<IconsProps> = ({ width, height, fill, viewBox, ...other }) => {
        return (
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : "20"}
                height={height ? height : "19"}
                viewBox={viewBox ? viewBox : "0 0 20 19"}
                fill={fill ? `var(--${fill})` : "none"}
                {...other}
            >
                <path fillRule="evenodd" clipRule="evenodd" d="M1.24963 8.53517C1.28905 8.555 1.32847 8.57482 1.36788 8.61447C1.44672 8.69377 1.6044 8.69377 1.68324 8.69377H6.41353C6.88656 8.69377 7.20191 8.37658 7.20191 7.90078C7.20191 7.42499 6.88656 7.1078 6.41353 7.1078H3.65419L5.9405 5.04604C6.5712 4.33236 7.43842 3.85657 8.30564 3.53938C9.88241 2.98429 11.6168 3.06359 13.1148 3.77727C14.6127 4.57025 15.7953 5.83903 16.3471 7.42499C16.5048 7.82149 16.9778 8.05938 17.372 7.90078C17.7662 7.74219 18.0027 7.2664 17.8451 6.86991C17.1355 4.88745 15.7164 3.30148 13.8243 2.3499C11.9322 1.47762 9.80357 1.31902 7.83262 2.03271C6.72888 2.4292 5.70398 3.06359 4.9156 3.85657L2.55046 6.07692V3.14288C2.55046 2.66709 2.2351 2.3499 1.76208 2.3499C1.28905 2.3499 0.973694 2.66709 0.973694 3.14288V7.98008V8.05938V8.21798C0.973694 8.25763 0.993403 8.27745 1.01311 8.29728C1.03282 8.3171 1.05253 8.33693 1.05253 8.37657C1.13137 8.37657 1.13137 8.45587 1.13137 8.45587C1.17079 8.49552 1.21021 8.51535 1.24963 8.53517ZM19.816 10.7555V10.9141C19.816 10.9417 19.816 10.9597 19.8226 10.9748C19.8351 11.003 19.8708 11.021 19.9737 11.0727V15.8306C19.9737 16.3064 19.6583 16.6236 19.1853 16.6236C18.7123 16.6236 18.3969 16.3064 18.3969 15.8306V12.8966L16.0318 15.1169C14.5339 16.6236 12.5629 17.4166 10.5131 17.4166C8.46331 17.4166 6.49236 16.7029 4.9156 15.1169C4.04838 14.324 3.41767 13.2931 3.02348 12.1829C2.8658 11.7864 3.10232 11.3106 3.49651 11.152C3.8907 10.9934 4.36373 11.2313 4.52141 11.6278C4.83676 12.5001 5.38863 13.3724 6.01933 14.0068C8.46331 16.465 12.4841 16.465 14.928 14.0068L17.1355 11.8657H14.3762C13.9031 11.8657 13.5878 11.5485 13.5878 11.0727C13.5878 10.5969 13.9031 10.2797 14.3762 10.2797H19.1065H19.2641H19.4218L19.5007 10.359L19.6583 10.5176C19.7372 10.5176 19.7372 10.5969 19.7372 10.5969C19.7372 10.6366 19.7569 10.6564 19.7766 10.6762C19.7963 10.6961 19.816 10.7159 19.816 10.7555Z" fill="#272727"/>
                <mask id="mask0_2644_768" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="1" width="20" height="17">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.24963 8.53517C1.28905 8.555 1.32847 8.57482 1.36788 8.61447C1.44672 8.69377 1.6044 8.69377 1.68324 8.69377H6.41353C6.88656 8.69377 7.20191 8.37658 7.20191 7.90078C7.20191 7.42499 6.88656 7.1078 6.41353 7.1078H3.65419L5.9405 5.04604C6.5712 4.33236 7.43842 3.85657 8.30564 3.53938C9.88241 2.98429 11.6168 3.06359 13.1148 3.77727C14.6127 4.57025 15.7953 5.83903 16.3471 7.42499C16.5048 7.82149 16.9778 8.05938 17.372 7.90078C17.7662 7.74219 18.0027 7.2664 17.8451 6.86991C17.1355 4.88745 15.7164 3.30148 13.8243 2.3499C11.9322 1.47762 9.80357 1.31902 7.83262 2.03271C6.72888 2.4292 5.70398 3.06359 4.9156 3.85657L2.55046 6.07692V3.14288C2.55046 2.66709 2.2351 2.3499 1.76208 2.3499C1.28905 2.3499 0.973694 2.66709 0.973694 3.14288V7.98008V8.05938V8.21798C0.973694 8.25763 0.993403 8.27745 1.01311 8.29728C1.03282 8.3171 1.05253 8.33693 1.05253 8.37657C1.13137 8.37657 1.13137 8.45587 1.13137 8.45587C1.17079 8.49552 1.21021 8.51535 1.24963 8.53517ZM19.816 10.7555V10.9141C19.816 10.9417 19.816 10.9597 19.8226 10.9748C19.8351 11.003 19.8708 11.021 19.9737 11.0727V15.8306C19.9737 16.3064 19.6583 16.6236 19.1853 16.6236C18.7123 16.6236 18.3969 16.3064 18.3969 15.8306V12.8966L16.0318 15.1169C14.5339 16.6236 12.5629 17.4166 10.5131 17.4166C8.46331 17.4166 6.49236 16.7029 4.9156 15.1169C4.04838 14.324 3.41767 13.2931 3.02348 12.1829C2.8658 11.7864 3.10232 11.3106 3.49651 11.152C3.8907 10.9934 4.36373 11.2313 4.52141 11.6278C4.83676 12.5001 5.38863 13.3724 6.01933 14.0068C8.46331 16.465 12.4841 16.465 14.928 14.0068L17.1355 11.8657H14.3762C13.9031 11.8657 13.5878 11.5485 13.5878 11.0727C13.5878 10.5969 13.9031 10.2797 14.3762 10.2797H19.1065H19.2641H19.4218L19.5007 10.359L19.6583 10.5176C19.7372 10.5176 19.7372 10.5969 19.7372 10.5969C19.7372 10.6366 19.7569 10.6564 19.7766 10.6762C19.7963 10.6961 19.816 10.7159 19.816 10.7555Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_2644_768)">
                <rect x="0.973694" width="19" height="19" fill="#272727"/>
                </g>
            </svg>
        )
    }

    export const Alert: FC<IconsProps> = ({ width, height, fill, viewBox, ...other }) => {
        return (
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : "15"}
                height={height ? height : "14"}
                viewBox={viewBox ? viewBox : "0 0 15 14"}
                fill={fill ? `var(--${fill})` : "none"}
                {...other}
            >
                <path fillRule="evenodd" clipRule="evenodd" d="M1.08301 6.99992C1.08301 10.5583 3.94134 13.4166 7.49967 13.4166C11.058 13.4166 13.9163 10.5583 13.9163 6.99992C13.9163 3.44159 11.058 0.583252 7.49967 0.583252C3.94134 0.583252 1.08301 3.44159 1.08301 6.99992ZM2.24967 6.99992C2.24967 4.08325 4.583 1.74992 7.49967 1.74992C10.4163 1.74992 12.7497 4.08325 12.7497 6.99992C12.7497 9.91659 10.4163 12.2499 7.49967 12.2499C4.583 12.2499 2.24967 9.91659 2.24967 6.99992ZM8.08301 6.99992V4.66659C8.08301 4.31659 7.84968 4.08325 7.49968 4.08325C7.14968 4.08325 6.91634 4.31659 6.91634 4.66659V6.99992C6.91634 7.34992 7.14968 7.58325 7.49968 7.58325C7.84968 7.58325 8.08301 7.34992 8.08301 6.99992ZM8.02469 9.56658C8.02469 9.62492 7.96635 9.68325 7.90802 9.74158C7.79135 9.85825 7.67469 9.91658 7.44135 9.91658C7.26635 9.91658 7.14969 9.85825 7.03302 9.74158C6.91635 9.62492 6.85802 9.50825 6.85802 9.33325C6.85802 9.26491 6.87804 9.21658 6.89462 9.17655C6.90634 9.14824 6.91635 9.12408 6.91635 9.09991C6.91635 9.04158 6.97469 8.98325 7.03302 8.92491C7.20802 8.74991 7.44135 8.69158 7.67469 8.80825C7.70385 8.80825 7.71844 8.82283 7.73302 8.83741C7.7476 8.852 7.76219 8.86658 7.79135 8.86658C7.84969 8.86658 7.90802 8.92491 7.90802 8.92491C7.93719 8.95408 7.95177 8.98325 7.96635 9.01241C7.98094 9.04158 7.99552 9.07075 8.02469 9.09991C8.08302 9.15825 8.08302 9.27491 8.08302 9.33325C8.08302 9.36242 8.06844 9.40617 8.05385 9.44991C8.03927 9.49366 8.02469 9.53741 8.02469 9.56658Z" 
                    fill={fill ? `var(--${fill})` : "#0D6C4D"}
                />
                <mask id="mask0_2051_4646" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="1" y="0" width="13" height="14">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.08301 6.99992C1.08301 10.5583 3.94134 13.4166 7.49967 13.4166C11.058 13.4166 13.9163 10.5583 13.9163 6.99992C13.9163 3.44159 11.058 0.583252 7.49967 0.583252C3.94134 0.583252 1.08301 3.44159 1.08301 6.99992ZM2.24967 6.99992C2.24967 4.08325 4.583 1.74992 7.49967 1.74992C10.4163 1.74992 12.7497 4.08325 12.7497 6.99992C12.7497 9.91659 10.4163 12.2499 7.49967 12.2499C4.583 12.2499 2.24967 9.91659 2.24967 6.99992ZM8.08301 6.99992V4.66659C8.08301 4.31659 7.84968 4.08325 7.49968 4.08325C7.14968 4.08325 6.91634 4.31659 6.91634 4.66659V6.99992C6.91634 7.34992 7.14968 7.58325 7.49968 7.58325C7.84968 7.58325 8.08301 7.34992 8.08301 6.99992ZM8.02469 9.56658C8.02469 9.62492 7.96635 9.68325 7.90802 9.74158C7.79135 9.85825 7.67469 9.91658 7.44135 9.91658C7.26635 9.91658 7.14969 9.85825 7.03302 9.74158C6.91635 9.62492 6.85802 9.50825 6.85802 9.33325C6.85802 9.26491 6.87804 9.21658 6.89462 9.17655C6.90634 9.14824 6.91635 9.12408 6.91635 9.09991C6.91635 9.04158 6.97469 8.98325 7.03302 8.92491C7.20802 8.74991 7.44135 8.69158 7.67469 8.80825C7.70385 8.80825 7.71844 8.82283 7.73302 8.83741C7.7476 8.852 7.76219 8.86658 7.79135 8.86658C7.84969 8.86658 7.90802 8.92491 7.90802 8.92491C7.93719 8.95408 7.95177 8.98325 7.96635 9.01241C7.98094 9.04158 7.99552 9.07075 8.02469 9.09991C8.08302 9.15825 8.08302 9.27491 8.08302 9.33325C8.08302 9.36242 8.06844 9.40617 8.05385 9.44991C8.03927 9.49366 8.02469 9.53741 8.02469 9.56658Z" 
                    fill="white"
                />
                </mask>
                <g mask="url(#mask0_2051_4646)">
                <rect x="0.5" width="14" height="14" fill={fill ? `var(--${fill})` : "#0D6C4D"}/>
                </g>
            </svg>
        )
    }
   
    export const Download: FC<IconsProps> = ({ width, height, fill, viewBox, ...other }) => {
        return (
            <svg
                width={width ? width : "15"}
                height={height ? height : "14"}
                viewBox={viewBox ? viewBox : "0 0 15 14"}
                fill={fill ? `var(--${fill})` : "none"}
                {...other}
            >
                <path fillRule="evenodd" clipRule="evenodd" d="M7.33681 9.85837C7.27848 9.85837 7.22015 9.80004 7.16181 9.74171L4.82848 7.40837C4.59515 7.17504 4.59515 6.82504 4.82848 6.59171C5.06181 6.35837 5.41181 6.35837 5.64515 6.59171L6.98681 7.93337V1.16671C6.98681 0.816707 7.22015 0.583374 7.57015 0.583374C7.92015 0.583374 8.15348 0.816707 8.15348 1.16671V7.93337L9.49515 6.59171C9.72848 6.35837 10.0785 6.35837 10.3118 6.59171C10.5451 6.82504 10.5451 7.17504 10.3118 7.40837L7.97848 9.74171C7.94931 9.77087 7.92015 9.78546 7.89098 9.80004C7.86181 9.81462 7.83265 9.82921 7.80348 9.85837C7.74515 9.91671 7.62848 9.91671 7.57015 9.91671C7.51181 9.91671 7.39515 9.91671 7.33681 9.85837ZM13.4035 11.6667V9.91671C13.4035 9.56671 13.1701 9.33337 12.8201 9.33337C12.4701 9.33337 12.2368 9.56671 12.2368 9.91671V11.6667C12.2368 12.0167 12.0035 12.25 11.6535 12.25H3.48682C3.13682 12.25 2.90348 12.0167 2.90348 11.6667V9.91671C2.90348 9.56671 2.67015 9.33337 2.32015 9.33337C1.97015 9.33337 1.73682 9.56671 1.73682 9.91671V11.6667C1.73682 12.6584 2.49515 13.4167 3.48682 13.4167H11.6535C12.6451 13.4167 13.4035 12.6584 13.4035 11.6667Z" 
                    fill={fill ? `var(--${fill})` : "#01565B"}
                />
                <mask id="mask0_4215_1157" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="1" y="0" width="13" height="14">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.33681 9.85837C7.27848 9.85837 7.22015 9.80004 7.16181 9.74171L4.82848 7.40837C4.59515 7.17504 4.59515 6.82504 4.82848 6.59171C5.06181 6.35837 5.41181 6.35837 5.64515 6.59171L6.98681 7.93337V1.16671C6.98681 0.816707 7.22015 0.583374 7.57015 0.583374C7.92015 0.583374 8.15348 0.816707 8.15348 1.16671V7.93337L9.49515 6.59171C9.72848 6.35837 10.0785 6.35837 10.3118 6.59171C10.5451 6.82504 10.5451 7.17504 10.3118 7.40837L7.97848 9.74171C7.94931 9.77087 7.92015 9.78546 7.89098 9.80004C7.86181 9.81462 7.83265 9.82921 7.80348 9.85837C7.74515 9.91671 7.62848 9.91671 7.57015 9.91671C7.51181 9.91671 7.39515 9.91671 7.33681 9.85837ZM13.4035 11.6667V9.91671C13.4035 9.56671 13.1701 9.33337 12.8201 9.33337C12.4701 9.33337 12.2368 9.56671 12.2368 9.91671V11.6667C12.2368 12.0167 12.0035 12.25 11.6535 12.25H3.48682C3.13682 12.25 2.90348 12.0167 2.90348 11.6667V9.91671C2.90348 9.56671 2.67015 9.33337 2.32015 9.33337C1.97015 9.33337 1.73682 9.56671 1.73682 9.91671V11.6667C1.73682 12.6584 2.49515 13.4167 3.48682 13.4167H11.6535C12.6451 13.4167 13.4035 12.6584 13.4035 11.6667Z" 
                   fill={fill ? `var(--${fill})` : "white"}
                />
                </mask>
                <g mask="url(#mask0_4215_1157)">
                <rect x="0.570312" width="14" height="14" fill={fill ? `var(--${fill})` : "#01565B"}/>
                </g>
            </svg>
        )
    }

   
}
