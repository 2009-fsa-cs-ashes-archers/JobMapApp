import React from 'react';
import PinDropIcon from '@material-ui/icons/PinDrop';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function VerticalToggleButtons({mapView}) {
  const [view, setView] = React.useState('pins');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup size="small" orientation="vertical" value={view} exclusive onChange={handleChange}>
      <ToggleButton value="list" aria-label="list" onClick={() => mapView('pins')}>
        <PinDropIcon style={{ color: '#eaebea' }}/>
      </ToggleButton>
      <ToggleButton value="module" aria-label="module" onClick={() => mapView('heatMap')}>
        <WhatshotIcon style={{ color: '#eaebea' }}/>
      </ToggleButton>
      <ToggleButton value="quilt" aria-label="quilt" onClick={() => mapView('clusters')}>
        <RadioButtonUncheckedIcon style={{ color: '#eaebea' }}/>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}