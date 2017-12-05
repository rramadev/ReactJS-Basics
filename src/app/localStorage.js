export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    console.info('State loaded from local storage');
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading state from local storage');
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    console.info('State saved to local storage');
  } catch (error) {
    console.error('Error saving state to local storage');
  }
}