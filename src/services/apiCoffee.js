export async function getCoffee() {
  const res = await fetch(
    'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
  );
  const data = await res.json();

  return data;
}
