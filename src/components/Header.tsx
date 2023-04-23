import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import SimpleModal from './Modal';

interface HeaderProps {
    sections: ReadonlyArray<{
        label: string;
        url: string;
    }>;
    title: string;
}

export default function Header(props: HeaderProps) {
    const { sections, title } = props;
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Button size="small" color='secondary'>Subscribe</Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    {title}
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="contained" color="secondary" size="medium" onClick={handleOpen}>
                    Login
                </Button>
                <SimpleModal open={modalOpen} handleClose={handleClose} />
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
                {sections.map((section) => (
                    <Link
                        color="inherit"
                        key={section.label}
                        to={section.url}
                    >
                        {section.label}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}