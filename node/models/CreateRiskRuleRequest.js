import { d452 as c0, d69 as c1, d2092 as c2, d450 as c3, d441 as c4, d442 as c5, d444 as c6, d443 as c7, d445 as c8, d447 as c9, d446 as c10, d448 as c11, d449 as c12, d2089 as c13, d2088 as c14, d2090 as c15, d2091 as c16 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d452 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d452;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskRuleRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNode"]:c2(),["SharedCodec159"]:c3(),["SharedCodec160"]:c4(),["SharedCodec161"]:c5(),["SharedCodec162"]:c6(),["SharedCodec163"]:c7(),["SharedCodec164"]:c8(),["SharedCodec165"]:c9(),["SharedCodec166"]:c10(),["SharedCodec167"]:c11(),["SharedCodec168"]:c12(),["SharedCodec535"]:c13(),["SharedCodec536"]:c14(),["SharedCodec537"]:c15(),["SharedCodec538"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
