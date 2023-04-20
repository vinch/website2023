export const load = async ({ fetch, params }: { fetch: any; params: any }) => {
  const slug = params.slug;

  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/5GSxHUHfdIIKYAsdmGUEpuKfbsALB7DlwzyA5W-EnZk/${slug}`
  );
  const article = await response.json();

  return { article };
};
