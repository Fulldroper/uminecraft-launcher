import classes from "./Icons.module.css";

export const DownloadIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['download-icon']}`} viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 11.25V14.25C14 14.6478 13.8595 15.0294 13.6095 15.3107C13.3594 15.592 13.0203 15.75 12.6667 15.75H3.33333C2.97971 15.75 2.64057 15.592 2.39052 15.3107C2.14048 15.0294 2 14.6478 2 14.25V11.25" />
            <path d="M4 7.875L8 11.25M8 11.25L12 7.875M8 11.25V2.25" />
        </svg>
    )
}
export const ContextIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['context-icon']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="1" />
            <circle cx="9" cy="5" r="1" />
            <circle cx="9" cy="13" r="1" />
        </svg>
    )
}

export const BurgerIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['burger-icon']}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" />
            <path d="M3 6H21" />
            <path d="M3 18H21" />
        </svg>
    )
}

export const CloseBurgerIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['close-burger-icon']}`} viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
            <path d="M5.63599 5.63605L18.3639 18.364" />
            <path d="M5.63599 18.364L18.3639 5.63603" />
        </svg>
    )
}

export const SaveIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H12L15.75 6V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75Z" />
            <path d="M12.75 15.75V9.75H5.25V15.75" />
            <path d="M5.25 2.25V6H11.25" />
        </svg>

    )
}

export const DeleteIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
                <path d="M2.25 4.5H3.75H15.75" stroke="#B6B6BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5" stroke="#B6B6BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 8.25V12.75" stroke="#B6B6BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.5 8.25V12.75" stroke="#B6B6BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>

    )
}

export const DropdownIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['']}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M16 7L10 13L4 7" stroke="white" stroke-width="1.5"/>
        </svg>

    )
}

export const PlayButton = ({className}) => {
    return (
        <svg className={`${className} ${classes['']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.65" d="M5 1L17 9L5 17V1Z" fill="white"/>
        </svg>

    )
}

export const FolderIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
                <path d="M16.5 14.25C16.5 14.6478 16.342 15.0294 16.0607 15.3107C15.7794 15.592 15.3978 15.75 15 15.75H3C2.60218 15.75 2.22064 15.592 1.93934 15.3107C1.65804 15.0294 1.5 14.6478 1.5 14.25V3.75C1.5 3.35218 1.65804 2.97064 1.93934 2.68934C2.22064 2.40804 2.60218 2.25 3 2.25H6.75L8.25 4.5H15C15.3978 4.5 15.7794 4.65804 16.0607 4.93934C16.342 5.22064 16.5 5.60218 16.5 6V14.25Z" stroke="#B6B6BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>

    )
}

export const EditIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8" clipPath="url(#clip0_37_1730)">
                <path d="M8.25 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V9.75" stroke="#B6B6BF" strokeWidth="1.5" strokeLinecap="square"/>
                <path d="M13.875 1.87493C14.1734 1.57656 14.578 1.40894 15 1.40894C15.422 1.40894 15.8266 1.57656 16.125 1.87493C16.4234 2.17329 16.591 2.57797 16.591 2.99993C16.591 3.42188 16.4234 3.82656 16.125 4.12493L9 11.2499L6 11.9999L6.75 8.99993L13.875 1.87493Z" stroke="#B6B6BF" strokeWidth="1.5" strokeLinecap="square"/>
            </g>
            <defs>
                <clipPath id="clip0_37_1730">
                    <rect width="18" height="18" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    )
}

export const LogoutIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
                <path d="M6.75 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H6.75" stroke="#B6B6BF" stroke-width="1.5" stroke-linecap="square"/>
                <path d="M12 12.75L15.75 9L12 5.25" stroke="#B6B6BF" strokeWidth="1.5" strokeLinecap="square"/>
                <path d="M15.75 9H6.75" stroke="#B6B6BF" strokeWidth="1.5" strokeLinecap="square"/>
            </g>
        </svg>

    )
}
