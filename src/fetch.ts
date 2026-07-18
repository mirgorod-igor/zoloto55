import { WritableAtom } from "nanostores"


export default async function (url, $data: WritableAtom) {
  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    
    const data = await response.json();
    console.log(data);

    $data.set([...data])
    
  } catch (error) {
    console.error('Fetch operation failed:', error)
  }
}