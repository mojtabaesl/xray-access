import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import lodash from 'lodash';

interface Log {
  date: string;
  time: string;
  ips: string[];
}

interface User {
  id: string;
  email: string;
  logs: Log[];
}

interface Data {
  users: User[];
}

class LowWithLodash<T> extends Low<T> {
  chain: lodash.ExpChain<this['data']> = lodash.chain(this).get('data');
}

const defaultData: Data = { users: [] };
const adapter = new JSONFile<Data>('db.json');
export const db = new LowWithLodash(adapter, defaultData);
