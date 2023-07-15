import ServerCard from "./ServerCard";
import classes from "./Servers.module.css";
import ServerIcon from '../../assets/images/serverIcon.jpg';

const Servers = () => {

    const serverList = [
        {
            title: 'TechnoMagic',
            icon: ServerIcon,
            version: '1.12.2',
            currentPlayers: '2',
            maxPlayers: '125',
            serverActive: 'active',
            isUpdated: 'need-update',
        },
        {
            title: 'Vanilla',
            icon: ServerIcon,
            version: '1.20.1',
            currentPlayers: '15',
            maxPlayers: '999',
            serverActive: 'active',
            isUpdated: 'updated',
        },
        {
            title: 'Anarchy',
            icon: ServerIcon,
            version: '1.19.4',
            currentPlayers: '31',
            maxPlayers: '150',
            serverActive: 'active',
            isUpdated: 'need-download',
        },
        {
            title: 'Magic',
            icon: ServerIcon,
            version: '1.7.10',
            currentPlayers: '4',
            maxPlayers: '100',
            serverActive: 'bad-connection',
            isUpdated: 'updated',
        },
        {
            title: 'SkyBlock',
            icon: ServerIcon,
            version: '1.19.4',
            currentPlayers: '0',
            maxPlayers: '50',
            serverActive: 'closed',
            isUpdated: 'need-download',
        },
        {
            title: 'Industrial',
            icon: ServerIcon,
            version: '1.7.10',
            currentPlayers: '20',
            maxPlayers: '300',
            serverActive: 'active',
            isUpdated: 'need-download',
        },
        {
            title: 'Industrial',
            icon: ServerIcon,
            version: '1.7.10',
            currentPlayers: '20',
            maxPlayers: '300',
            serverActive: 'active',
            isUpdated: 'need-download',
        },
        {
            title: 'Industrial',
            icon: ServerIcon,
            version: '1.7.10',
            currentPlayers: '20',
            maxPlayers: '300',
            serverActive: 'active',
            isUpdated: 'need-download',
        },
        {
            title: 'Industrial',
            icon: ServerIcon,
            version: '1.7.10',
            currentPlayers: '20',
            maxPlayers: '300',
            serverActive: 'active',
            isUpdated: 'need-download',
        },

    ]


    return (
        <div className={classes['servers']}>
            {serverList.map((serverInfo) =>
                <ServerCard className={classes['servers__server-card']} serverPreviewInfo={serverInfo}/>)
            }
        </div>
    )
}

export default Servers;
