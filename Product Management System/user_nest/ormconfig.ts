import { User } from 'src/user/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'User-next',
  host: 'localhost',
  port: 5432,
  username: 'postgres',

  password: '5221',
  entities: [User],

  synchronize: true,
};

export default config;