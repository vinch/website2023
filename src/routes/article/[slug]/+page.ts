/** @type {import('./$types').PageLoad} */
export const load = async ({ params }) => {
  const slug = params.slug;

  const response = await fetch(
    `http://localhost:3000/5GSxHUHfdIIKYAsdmGUEpuKfbsALB7DlwzyA5W-EnZk/${slug}`
  );
  const article = await response.json();

  return { article };
};
