import Knex from "knex";
import { DBCountry } from "../db";
import { Repository } from "./repository";

export class CountryRepository extends Repository<DBCountry> {
  constructor(knex: Knex) {
    super(knex, "countries");
  }
}
