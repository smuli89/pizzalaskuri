import React, { useState } from 'react';
import { TextField, MenuItem } from '@mui/material';

function PizzaCalculator() {
  const [values, setValues] = useState({
    pizzas: 1,
    hydration: 60,
    doughSize: 250,
    yeastType: 'instant',
  });

  const handleChange = (field) => (event) => {
    setValues({ ...values, [field]: event.target.value });
  };

  return (
    <div>
      <h1>Pizza Dough Calculator</h1>
      <TextField
        label="Number of Pizzas"
        type="number"
        value={values.pizzas}
        onChange={handleChange('pizzas')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Hydration (%)"
        type="number"
        value={values.hydration}
        onChange={handleChange('hydration')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Dough Ball Size (g)"
        type="number"
        value={values.doughSize}
        onChange={handleChange('doughSize')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Yeast Type"
        select
        value={values.yeastType}
        onChange={handleChange('yeastType')}
        fullWidth
        margin="normal"
      >
        <MenuItem value="instant">Instant Yeast</MenuItem>
        <MenuItem value="dry">Dry Yeast</MenuItem>
        <MenuItem value="fresh">Fresh Yeast</MenuItem>
      </TextField>
    </div>
  );
}

export default PizzaCalculator;