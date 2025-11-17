import { useState, useEffect } from 'react';

export function useGitHubRepos(username) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        const data = await response.json();
        
        const transformedRepos = data.map(repo => ({
          title: repo.name,
          description: repo.description || 'No description available',
          image: `/projects/project${Math.floor(Math.random() * 6) + 1}.jpg`,
          tags: [
            repo.language,
            ...(repo.topics || [])
          ].filter(Boolean).slice(0, 4),
          link: repo.html_url,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updated: repo.updated_at
        }));
        
        setRepos(transformedRepos);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (username) {
      fetchRepos();
    }
  }, [username]);

  return { repos, loading, error };
}
