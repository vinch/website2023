/** @type {import('./$types').PageLoad} */
export const load = async () => {
  const response = await fetch(
    `http://localhost:3000/5GSxHUHfdIIKYAsdmGUEpuKfbsALB7DlwzyA5W-EnZk`
  );
  const articles = await response.json();

  return { articles };
};
