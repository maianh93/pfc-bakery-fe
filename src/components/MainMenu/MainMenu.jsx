import { Grid, Container } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Card from '../Card/Card';
import CustomIcons from '../Pagination/Pagination';
import { Link } from 'react-router-dom';

const currencies = [
  {
    value: 'all',
    label: 'Tất cả',
  },
  {
    value: 'A-Z',
    label: 'Lọc theo tên',
  },
  {
    value: 'price',
    label: 'Lọc theo giá',
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'var(--white-color)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const MainMenu = () => {
  const [currency, setCurrency] = React.useState('all');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={3} style={{ marginTop: "30px" }}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Thực đơn</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="all"
                name="radio-buttons-group"
              >
                <FormControlLabel value="all" control={<Radio />} label="Tất cả" />
                <FormControlLabel value="ice-cream" control={<Radio />} label="Kem Handmade" />
                <FormControlLabel value="cake" control={<Radio />} label="Bánh kem tươi" />
              </RadioGroup>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="outlined-basic" label="Tìm kiếm" variant="outlined" />
              </Box>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Lọc"
                    value={currency}
                    onChange={handleChange}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </Box>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} lg={4}>
                <Card />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Card />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Card />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} lg={4}>
                <Card />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Card />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Card />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} lg={4}>
                <Card />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Card />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Card />
              </Grid>
            </Grid>
            <CustomIcons />
          </Grid>
        </Grid>
      </Box>
    </Container>

  )
}

export default MainMenu