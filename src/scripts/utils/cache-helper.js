import CONFIG from '../globals/config';
import UrlParser from '../routes/url-parser';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(request) {
    const response = await caches.match(request);
    if (response) {
      return response;
    }
    return this._fetchRequest(request);
  },

  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _fetchRequest(request) {
    const response = await fetch(request);
    if (!response || response.status !== 200) {
      return response;
    }
    await this._addCache(request);
    return response;
  },

  async _addCache(request) {
    const cache = await this._openCache();
    const { verb } = UrlParser._urlSplitter(request.url);
    if (verb === 'review') return;
    cache.add(request);
  },
};

export default CacheHelper;
