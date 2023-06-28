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
        <svg className={`${className} ${classes['save-icon']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H12L15.75 6V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75Z" />
            <path d="M12.75 15.75V9.75H5.25V15.75"  />
            <path d="M5.25 2.25V6H11.25"  />
        </svg>
    )
}

export const DeleteIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['delete-icon']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 4.5H3.75H15.75" />
            <path d="M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5" />
            <path d="M7.5 8.25V12.75" />
            <path d="M10.5 8.25V12.75" />
        </svg>
    )
}

export const DropdownIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['dropdown-icon']}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 7L10 13L4 7" />
        </svg>

    )
}

export const PlayIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['play-icon']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1L17 9L5 17V1Z" />
        </svg>

    )
}

export const FolderIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['folder-icon']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 14.25C16.5 14.6478 16.342 15.0294 16.0607 15.3107C15.7794 15.592 15.3978 15.75 15 15.75H3C2.60218 15.75 2.22064 15.592 1.93934 15.3107C1.65804 15.0294 1.5 14.6478 1.5 14.25V3.75C1.5 3.35218 1.65804 2.97064 1.93934 2.68934C2.22064 2.40804 2.60218 2.25 3 2.25H6.75L8.25 4.5H15C15.3978 4.5 15.7794 4.65804 16.0607 4.93934C16.342 5.22064 16.5 5.60218 16.5 6V14.25Z" />
        </svg>

    )
}

export const EditIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['edit-icon']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V9.75" />
            <path d="M13.875 1.87493C14.1734 1.57656 14.578 1.40894 15 1.40894C15.422 1.40894 15.8266 1.57656 16.125 1.87493C16.4234 2.17329 16.591 2.57797 16.591 2.99993C16.591 3.42188 16.4234 3.82656 16.125 4.12493L9 11.2499L6 11.9999L6.75 8.99993L13.875 1.87493Z" />
        </svg>

    )
}

export const LogoutIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['logout-icon']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.75 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H6.75" />
            <path d="M12 12.75L15.75 9L12 5.25" />
            <path d="M15.75 9H6.75" />
        </svg>

    )
}

export const CheckIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['logout-icon']}`} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 4L6.125 12L3 8.36364"  />
        </svg>
    )
}

export const BackIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['back-icon']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 9H2M2 9L7.06897 13M2 9L7.06897 5" />
        </svg>

    )
}

export const ToolIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['tool-icon']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.025 4.72505C10.8876 4.86524 10.8106 5.05373 10.8106 5.25005C10.8106 5.44636 10.8876 5.63485 11.025 5.77505L12.225 6.97505C12.3652 7.11247 12.5537 7.18944 12.75 7.18944C12.9463 7.18944 13.1348 7.11247 13.275 6.97505L16.1025 4.14755C16.4796 4.98094 16.5938 5.90947 16.4299 6.80941C16.2659 7.70934 15.8315 8.53793 15.1847 9.18476C14.5379 9.83158 13.7093 10.2659 12.8094 10.4299C11.9094 10.5939 10.9809 10.4797 10.1475 10.1025L4.96501 15.285C4.66665 15.5834 4.26197 15.751 3.84001 15.751C3.41806 15.751 3.01338 15.5834 2.71501 15.285C2.41665 14.9867 2.24902 14.582 2.24902 14.16C2.24902 13.7381 2.41665 13.3334 2.71501 13.035L7.89751 7.85255C7.52039 7.01915 7.4062 6.09062 7.57017 5.19069C7.73414 4.29075 8.16848 3.46216 8.8153 2.81534C9.46213 2.16851 10.2907 1.73417 11.1907 1.5702C12.0906 1.40623 13.0191 1.52042 13.8525 1.89755L11.0325 4.71755L11.025 4.72505Z" />
        </svg>

    )
}

export const ServerIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['server-icon']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 1.5H3C2.17157 1.5 1.5 2.17157 1.5 3V6C1.5 6.82843 2.17157 7.5 3 7.5H15C15.8284 7.5 16.5 6.82843 16.5 6V3C16.5 2.17157 15.8284 1.5 15 1.5Z" />
            <path d="M15 10.5H3C2.17157 10.5 1.5 11.1716 1.5 12V15C1.5 15.8284 2.17157 16.5 3 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V12C16.5 11.1716 15.8284 10.5 15 10.5Z" />
            <path d="M4.5 4.5H4.5075" />
            <path d="M4.5 13.5H4.5075" />
        </svg>

    )
}

export const CubeIcon = ({className}) => {
    return (
        <svg className={`${className} ${classes['cube-icon']}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 12V6.00005C15.7497 5.737 15.6803 5.47866 15.5487 5.25092C15.417 5.02319 15.2278 4.83407 15 4.70255L9.75 1.70255C9.52197 1.5709 9.2633 1.50159 9 1.50159C8.7367 1.50159 8.47803 1.5709 8.25 1.70255L3 4.70255C2.7722 4.83407 2.58299 5.02319 2.45135 5.25092C2.31971 5.47866 2.25027 5.737 2.25 6.00005V12C2.25027 12.2631 2.31971 12.5214 2.45135 12.7492C2.58299 12.9769 2.7722 13.166 3 13.2975L8.25 16.2975C8.47803 16.4292 8.7367 16.4985 9 16.4985C9.2633 16.4985 9.52197 16.4292 9.75 16.2975L15 13.2975C15.2278 13.166 15.417 12.9769 15.5487 12.7492C15.6803 12.5214 15.7497 12.2631 15.75 12Z" />
            <path d="M2.45251 5.21997L9.00001 9.00747L15.5475 5.21997" />
            <path d="M9 16.56V9" />
        </svg>

    )
}
