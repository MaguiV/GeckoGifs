export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=2obVl1WzYbpmWX8STSHxyOfcqFtoR0Le&q=${ category }`
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
        rating: img.rating,
        username: img.username,
        date: img.import_datetime,
    }));

   return gifs;
};