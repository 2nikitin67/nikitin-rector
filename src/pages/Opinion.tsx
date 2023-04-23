import { Box, Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/routes'

export default function Opinion() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Link to={ROUTES.home}>
                <Button variant="contained" disableElevation>
                    Back to Home
                </Button>
            </Link>
        </Box>
    )
}
