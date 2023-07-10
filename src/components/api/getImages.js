import axios from 'axios';

const API_KEY = '13068223-8bb759187c099f4c8af2a9020';

export async function getImages(query, page = 1) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
