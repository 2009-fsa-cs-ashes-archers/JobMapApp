import React from 'react';
import PinDropIcon from '@material-ui/icons/PinDrop';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Tooltip from '@material-ui/core/Tooltip';

export default function VerticalToggleButtons({mapView}) {
  const [view, setView] = React.useState('pins');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup size="small" orientation="vertical" value={view} exclusive onChange={handleChange}>
      <Tooltip title="Pins" aria-label="Pins" placement="right-end">
        <ToggleButton value="pins" aria-label="pins" onClick={() => mapView("pins")}>
          <PinDropIcon style={{ color: '#eaebea' }}/>
        </ToggleButton>
      </Tooltip>
      <Tooltip title="Heat Map" aria-label="Heat Map" placement="right-end">
        <ToggleButton value="heatmap" aria-label="heatmap" onClick={() => mapView("heatMap")}>
          <WhatshotIcon style={{ color: '#eaebea' }}/>
        </ToggleButton>
      </Tooltip>
      <Tooltip title="Clusters" aria-label="Clusters" placement="right-end">
        <ToggleButton value="clusters" aria-label="clusters" onClick={() => mapView("clusters")}>
          <RadioButtonUncheckedIcon style={{ color: '#eaebea' }}/>
        </ToggleButton>
      </Tooltip>
    </ToggleButtonGroup>
  );
}
