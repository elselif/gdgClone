import { Button, Grid } from '@mui/material'
import React from 'react'

export const ListItemButton = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText>Home</ListItemText>
            </Button>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
    </div>
  )
}
