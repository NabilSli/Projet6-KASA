// NOTE: preparing API integration by fetching the data with an async function
export default async function GetData() {
  try {
    const fetchResponse = await fetch("/data/housingData.json");
    const response = await fetchResponse.json();
    return response;
  } catch (error) {
    console.error();
    return null;
  }
}
