import axios from "axios";

const GITHUB_USERNAME =
  "srinu897";

export const getGithubProfile =
  async () => {
    try {
      const response =
        await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );

      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };