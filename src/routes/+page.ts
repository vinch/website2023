const API_URL = import.meta.env.VITE_API_URL;

export const load = async () => {
  const response = await fetch(
    `${API_URL}/5GSxHUHfdIIKYAsdmGUEpuKfbsALB7DlwzyA5W-EnZk`
  );
  const articles = await response.json();

  return { articles };
};
