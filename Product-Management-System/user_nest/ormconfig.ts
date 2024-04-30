import { User } from 'src/entities/user.entity';
import { Product } from 'src/entities/product.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'User-next',
  host: 'localhost',
  port: 5432,
  username: 'postgres',

  password: '5221',
  entities: [User,Product],

  synchronize: true,
};

export default config;