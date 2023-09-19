const base_url = "https://cerulean-marlin-wig.cyclic.app";

export function GetCallHistory() {
  return fetch(`${base_url}/activities`).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

export function ArchiveOne(callDetails) {
  let updatedCallBody = {
    call_type: callDetails.call_type ? callDetails.call_type : null,
    created_at:callDetails.created_at ? callDetails.created_at : null,
    direction:callDetails.direction ? callDetails.direction : null,
    duration:callDetails.duration ? callDetails.duration : null,
    from:callDetails.from ? callDetails.from : null,
    id:callDetails.id,
    is_archived:true,
    to:callDetails.to ? callDetails.to : null,
    via:callDetails.via ? callDetails.via : null,
  }


  return fetch(`${base_url}/activities/${callDetails.id}`,   
  {
    method: 'PATCH',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedCallBody)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Unable to archive record');
      }
      return response.text(); 
    })
}

export function RestoreOne(callDetails) {
  let updatedCallBody = {
    call_type: callDetails.call_type ? callDetails.call_type : null,
    created_at:callDetails.created_at ? callDetails.created_at : null,
    direction:callDetails.direction ? callDetails.direction : null,
    duration:callDetails.duration ? callDetails.duration : null,
    from:callDetails.from ? callDetails.from : null,
    id:callDetails.id,
    is_archived:false,
    to:callDetails.to ? callDetails.to : null,
    via:callDetails.via ? callDetails.via : null,
  }

  return fetch(`${base_url}/activities/${callDetails.id}`,   
  {
    method: 'PATCH',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedCallBody)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Unable to restore record');
      }
      return response.text(); 
    })
}

export function ArchiveAll(allCalls) {
  let itemsToUpdate = allCalls.filter((item) => !item.is_archived);

  const archivePromises = itemsToUpdate.map((item) => ArchiveOne(item));

  return Promise.all(archivePromises)
    .then((results) => {
      console.log('All items archived successfully', results);
    })
    .catch((error) => {
      console.error('Error archiving items', error);
      throw error; 
    }).finally(()=>{
    });
}
export function RestoreAll(allCalls) {
  let itemsToUpdate = allCalls.filter((item) => item.is_archived);

  const archivePromises = itemsToUpdate.map((item) => RestoreOne(item));

  return Promise.all(archivePromises)
    .then((results) => {
      
      console.log('All items Restored successfully', results);
    })
    .catch((error) => {
      console.error('Error archiving items', error);
      throw error; 
    });
}
