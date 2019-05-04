import express from "express";
import cors from "cors";
import { createServer } from "http";
const PORT = 9010;
import faker from "faker";

faker.seed(666);

function randomObjects(objects: Array<any>, max: number) {
  const count = faker.random.number({
    min: 3,
    max
  });

  const result = [];
  const candidates = [...objects];

  for (let i = 0; i < count; i++) {
    result.push(candidates.splice(faker.random.number(candidates.length - 1), 1)[0]);
  }

  return result;
}

function generatePersons() {
  const persons: string[] = [];

  for (let i = 0; i < 100; i++) {
    persons.push(faker.fake("{{name.firstName}} {{name.lastName}} ({{internet.email}})"));
  }

  return (searchFor: string) => randomObjects(persons, 10);
}
interface Company {
  id: string;
  name: string;
  zipCode: string;
  city: string;
}
function generateCompanies() {
  const companies: Company[] = [];

  for (let i = 0; i < 100; i++) {
    companies.push({
      id: faker.random.uuid(),
      name: faker.company.companyName(),
      zipCode: faker.address.zipCode(),
      city: faker.address.city()
    });
  }

  return (searchFor: string) => randomObjects(companies, 10);
}
export function runServer() {
  const app = express();
  const server = createServer(app);

  const persons = generatePersons();
  const companies = generateCompanies();

  app.use(cors());

  app.get("/api/companies", (req, res) => {
    res.send(companies(req.query.search));
  });
  app.get("/api/persons", (req, res) => {
    res.send(persons(req.query.search));
  });

  server.listen(PORT, () => {
    console.log("Running server on port %s", PORT);
  });
}

runServer();
