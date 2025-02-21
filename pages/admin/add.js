import React from 'react'
import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import theme from "@/src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import FullLayout from '@/src/layouts/FullLayout'
import BaseCard from '@/src/components/baseCard/BaseCard';

const Add = () => {
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
              <BaseCard title="Add Products">
                <Stack spacing={3}>
                  <TextField id="title" label="Title" variant="outlined" />
                  <TextField id="slug" label="Slug" variant="outlined" />
                  <TextField id="price" label="Price" variant="outlined" />
                  <TextField id="size" label="Size" variant="outlined" />
                  <TextField id="netQ" label="Net Quantity" variant="outlined" />
                  <TextField
                    id="description"
                    label="Description"
                    variant="standard"
                    multiline
                    rows={4}
                  />
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="kids"
                        control={<Radio />}
                        label="Kids"
                      />
                      <FormControlLabel
                        value="women"
                        control={<Radio />}
                        label="Women"
                      />
                      <FormControlLabel
                        value="mens"
                        control={<Radio />}
                        label="Men's"
                      />
                      <FormControlLabel
                        value="energyballs"
                        control={<Radio />}
                        label="Energy Balls"
                      />
                    </RadioGroup>
                  </FormControl>
                </Stack>
                <br />
                <Button variant="outlined" mt={2}>
                  Submit
                </Button>
              </BaseCard>
            </Grid>
          </Grid>

        </FullLayout>
      </ThemeProvider>
    </Grid>
  )
}

export default Add