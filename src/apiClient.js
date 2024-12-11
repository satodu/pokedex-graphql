const API_URL = 'https://graphqlpokemon.favware.tech/v8';

export async function fetchGraphQL(query, variables = {}) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const result = await response.json();
  if (result.errors) {
    throw new Error(`GraphQL Errors: ${JSON.stringify(result.errors)}`);
  }
  return result.data;
}
