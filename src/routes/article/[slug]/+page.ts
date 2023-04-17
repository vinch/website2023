const API_URL = import.meta.env.VITE_API_URL;

export const load = async ({ params }) => {
  const slug = params.slug;

  const response = await fetch(
    `${API_URL}/5GSxHUHfdIIKYAsdmGUEpuKfbsALB7DlwzyA5W-EnZk/${slug}`
  );
  const article = await response.json();

  return { article };
};
