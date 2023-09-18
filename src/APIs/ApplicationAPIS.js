const base_url = "https://cerulean-marlin-wig.cyclic.app";

export function GetCallHistory() {
  return fetch(`${base_url}/activities`).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}