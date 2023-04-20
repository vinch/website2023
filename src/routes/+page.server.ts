export const load = async ({ fetch }: { fetch: any }) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/5GSxHUHfdIIKYAsdmGUEpuKfbsALB7DlwzyA5W-EnZk`
  );
  const articles = await response.json();

  return { articles };
};
