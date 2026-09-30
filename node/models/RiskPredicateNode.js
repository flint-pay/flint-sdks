import { d69 as c0, d2092 as c1, d450 as c2, d441 as c3, d442 as c4, d444 as c5, d443 as c6, d445 as c7, d447 as c8, d446 as c9, d448 as c10, d449 as c11, d2089 as c12, d2088 as c13, d2090 as c14, d2091 as c15 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2092 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2092;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["SharedCodec159"]:c2(),["SharedCodec160"]:c3(),["SharedCodec161"]:c4(),["SharedCodec162"]:c5(),["SharedCodec163"]:c6(),["SharedCodec164"]:c7(),["SharedCodec165"]:c8(),["SharedCodec166"]:c9(),["SharedCodec167"]:c10(),["SharedCodec168"]:c11(),["SharedCodec535"]:c12(),["SharedCodec536"]:c13(),["SharedCodec537"]:c14(),["SharedCodec538"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
