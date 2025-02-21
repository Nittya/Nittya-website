import React from 'react'
import { Grid } from "@mui/material";
import theme from "@/src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import FullLayout from '@/src/layouts/FullLayout'

const Writeblog = () => {
    return (
        <Grid container spacing={0}>
            <ThemeProvider theme={theme}>
                <style jsx global> {`
        footer {
          display: none;
        }
      `}</style>
                <FullLayout>
                    <Grid container spacing={0}>
                        <Grid item xs={12} lg={12}>
                            <div>Write a blog</div>
                        </Grid>
                    </Grid>
                </FullLayout>
            </ThemeProvider>
        </Grid>
    )
}

export default Writeblog