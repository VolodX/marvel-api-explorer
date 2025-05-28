class MarvelService {
  _apiBase = 'https://marvel-server-zeta.vercel.app/';
  _apiKey = 'apikey=d4eecb0c66dedbfae4eab45d312fc1df';

  getResource = async url => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResource(`${this._apiBase}characters?limit=9&${this._apiKey}`);
		// return res.data.results.map(this._transformCharacter);
		res.data.results.map((item) => {
			return this._transformCharacter(item);
		});
  };

  getCharacter = async id => {
    const res = await this.getResource(
      `${this._apiBase}characters/${id}?${this._apiKey}`
    );

    if (!res.data || !res.data.results || res.data.results.length === 0) {
      throw new Error(`Character with ID ${id} not found.`);
    }
    return this._transformCharacter(res.data.results[0]);
  };

  _transformCharacter = char => {
		if (char.description.length > 100) {
			char.description = char.description.slice(0, 100) + '...';
		}
    return {
      name: char.name,
      description: char.description,
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      id: char.id
    };
  };
}

export default MarvelService;
