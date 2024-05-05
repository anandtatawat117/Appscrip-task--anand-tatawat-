import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Box} from '@mui/material'

function SideBar() {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    // Toggle the selectAll state when the checkbox is clicked
    setSelectAll(!selectAll);
    // Add your logic for selecting all accordions here
    console.log('All accordions selected!');
  };

  return (
    <div>
       <Box display="flex" alignItems="center">
        <Typography variant="h6" sx={{ marginRight: '10px' }}>Customizable</Typography>
        <Checkbox
          color="primary"
          checked={selectAll}
          onChange={handleSelectAll}
          inputProps={{ 'aria-label': 'select all accordions checkbox' }}
        />
      </Box>
      <div style={{ marginTop: '10px' }}>
        {/* Add margin-top to create space between the button and the first accordion */}
        <Accordion sx={{ width: '120px', height: '70px', marginBottom: '30px' }}>
          {/* Add marginBottom to create space between each accordion */}
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Ideal For</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>All</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: '120px', height: '70px', marginBottom: '30px' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Occasion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>All</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: '120px', height: '70px', marginBottom: '30px' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Work</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>All</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: '120px', height: '100px', marginBottom: '30px' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Fabric</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>All</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: '120px', height: '70px', marginBottom: '30px' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Segment</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>All</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: '120px', height: '70px', marginBottom: '30px' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Suitable For</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>All</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: '120px', height: '70px', marginBottom: '30px' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Raw Materials</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>All</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: '120px', height: '70px', marginBottom: '30px' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Patterns</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>All</Typography>
          </AccordionDetails>
        </Accordion>
        {/* Add more accordions as needed */}
      </div>
    </div>
  );
}

export default SideBar;