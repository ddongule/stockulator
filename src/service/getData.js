import { BASE_URL } from '../constants/url';

export const getData = async (company) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ company: company }),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));

    return response.results;
  } catch (error) {
    console.error(error);
  }
};
