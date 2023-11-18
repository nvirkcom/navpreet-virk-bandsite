// BandSite API Class
class BandSiteAPI {
  // Constructor
  constructor(apiKey) {
    this.apiKey = apiKey; // 3db530b6-a408-4f63-809d-22bc38a6b3ae
    this.baseURL = "https://project-1-api.herokuapp.com";
  }

  /*
    This function posts the comment to the API
    Argument: comment object
  */
  async postComment(comment) {
    const RESPONSE = await axios.post(
      `${this.baseURL}/comments?api_key=${this.apiKey}`,
      comment,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return RESPONSE.data;
  }

  // This function gets all the comments from the API
  async getComments() {
    const RESPONSE = await axios.get(
      `${this.baseURL}/comments?api_key=${this.apiKey}`
    );

    return RESPONSE.data.sort((a, b) => b.timestamp - a.timestamp);
  }

  // This function gets all the shows from the API
  async getShows() {
    const RESPONSE = await axios.get(
      `${this.baseURL}/showdates?api_key=${this.apiKey}`
    );

    return RESPONSE.data;
  }

  /*
    This function likes the comment
    Argument: comment id
  */
  async likeComment(id) {
    const RESPONSE = await axios.put(
      `${this.baseURL}/comments/${id}/like?api_key=${this.apiKey}`
    );

    return RESPONSE.data;
  }

  /*
    This function deletes the comment
    Argument: comment id
  */
  async deleteComment(id) {
    const RESPONSE = await axios.delete(
      `${this.baseURL}/comments/${id}?api_key=${this.apiKey}`
    );

    return RESPONSE.data;
  }
}
