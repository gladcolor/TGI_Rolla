// config.js

// City coordinates list
const cities = {
    Rolla_MO: { x: -10214257, y: 4572144, z: 4900, spatialReference: { wkid: 3857 } },
    New_York_NY: { x: -8249056, y: 4970252, z: 10000, spatialReference: { wkid: 3857 } },
  };
  
  // Threshold values for each retrofit strategy
  const thresholds = {
    strategy1: {
      'Type 1-1': [121, 149, 168, 168],
      'Type 1-2': [117, 134, 159, 161],
      'Type 2-1': [108, 132, 151, 161],
      'Type 2-2': [105, 118, 146, 146],
      'Type 3-1': [122, 148, 168, 172],
      'Type 3-2': [117, 135, 153, 164],
      'Type 3-3': [144, 144, 172, 194],
      'Type 4-1': [122, 148, 168, 172],
      'Type 4-2': [117, 135, 153, 164],
      'Type 4-3': [144, 144, 172, 194],
      'Type 5-1': [122, 148, 168, 172],
      'Type 5-2': [117, 135, 153, 164],
      'Type 5-3': [144, 144, 172, 194]
    },
    strategy2: {
      'Type 1-1': [70, 70, 168, 168],
      'Type 1-2': [70, 70, 159, 161],
      'Type 2-1': [70, 132, 151, 161],
      'Type 2-2': [70, 118, 146, 146],
      'Type 3-1': [70, 148, 168, 172],
      'Type 3-2': [70, 135, 153, 164],
      'Type 3-3': [70, 144, 172, 194],
      'Type 4-1': [70, 148, 168, 172],
      'Type 4-2': [70, 135, 153, 164],
      'Type 4-3': [70, 144, 172, 194],
      'Type 5-1': [66, 148, 168, 172],
      'Type 5-2': [66, 135, 153, 164],
      'Type 5-3': [66, 144, 172, 194]
    },
    strategy3: {
      'Type 1-1': [99, 111, 111, 168],
      'Type 1-2': [99, 111, 111, 161],
      'Type 2-1': [99, 111, 111, 161],
      'Type 2-2': [99, 111, 111, 146],
      'Type 3-1': [99, 111, 111, 172],
      'Type 3-2': [99, 135, 153, 164],
      'Type 3-3': [99, 144, 172, 194],
      'Type 4-1': [66, 148, 168, 172],
      'Type 4-2': [117, 135, 153, 164],
      'Type 4-3': [144, 144, 172, 194],
      'Type 5-1': [122, 148, 168, 172],
      'Type 5-2': [117, 135, 153, 164],
      'Type 5-3': [144, 144, 172, 194]
    },
  };
  
