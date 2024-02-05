import { Chance } from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    id: chance.integer({ min: 0, max: 200 }),
    first_name: chance.first(),
    last_name: chance.last(),
    age: chance.age(),
    birthday: chance.birthday({ string: true, american: false }),
    twitter: chance.twitter(),
    geo_hash: chance.geohash(),
  };
  if (request.method === "GET") {
    response.status(200).json(character);
    return;
  }
}
