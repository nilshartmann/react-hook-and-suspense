import express from "express";
import cors from "cors";
import { createServer } from "http";
const PORT = 9010;
import faker from "faker";

faker.seed(666);

function generatePersons() {
	const persons: string[] = [];

	for (let i = 0; i < 100; i++) {
		persons.push(faker.fake("{{name.firstName}} {{name.lastName}} ({{internet.email}})"));
	}

	console.log(persons);
	return (searchFor: string) => persons.filter(c => c.indexOf(searchFor) !== -1);
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

	console.log(companies);
	return (searchFor: string) => companies.filter(c => c.name.indexOf(searchFor) !== -1 || c.city.indexOf(searchFor) !== -1);
}
export function runServer() {
	const app = express();
	const server = createServer(app);

	const persons = generatePersons();
	const companies = generateCompanies();

	app.use(cors());

	app.get("/api/companies", (req, res) => {
		console.log(req.query.search);
		res.send(companies(req.query.search));
	});
	app.get("/api/persons", (req, res) => {
		console.log(req.query.search);
		res.send(persons(req.query.search));
	});

	server.listen(PORT, () => {
		console.log("Running server on port %s", PORT);
	});
}

runServer();
