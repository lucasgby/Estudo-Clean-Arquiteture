import pgp from "pg-promise";
import pg from "pg-promise/typescript/pg-subset";

export interface DatabaseConnection {
  query(statement: string, params: any): Promise<any>;
  close(): Promise<void>;
}

export class PgPromiseAdapter implements DatabaseConnection {
  connection: pgp.IDatabase<{}, pg.IClient>;

  constructor() {
    this.connection = pgp()("postgres://postgres:postgres@localhost:5432/cleanArquiteture");
  }

  async query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params);
  }

  async close(): Promise<void> {
    await this.connection.$pool.end();
  }
}