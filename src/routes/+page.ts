export const prerender = true;

export const load = async () => {
  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/5GSxHUHfdIIKYAsdmGUEpuKfbsALB7DlwzyA5W-EnZk`
  );
  const articles = await response.json();

  return { articles };
};
