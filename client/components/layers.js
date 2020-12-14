export const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': [
      'step',
      ['get', 'point_count'],
      '#7f00ff', // purple
      25,
      '#11b4da', //blue
      100,
      '#f1f075', // yellow
      750,
      '#f28cb1',
    ],
    'circle-radius': ['step', ['get', 'point_count'], 15, 25, 20, 100, 30, 750, 40],
  },
}

export const clusterCountLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12,
  },
}

export const unclusteredPointLayer = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'earthquakes',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#E63946',
    'circle-radius': 7,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff',
  },
}
