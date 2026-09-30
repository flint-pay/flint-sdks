import { d69 as c0, d1646 as c1, d1645 as c2, d1959 as c3, d1960 as c4, d2092 as c5, d2093 as c6, d2096 as c7, d450 as c8, d441 as c9, d442 as c10, d444 as c11, d443 as c12, d445 as c13, d447 as c14, d446 as c15, d448 as c16, d449 as c17, d2089 as c18, d2088 as c19, d2090 as c20, d2091 as c21 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2096 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2096;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["RiskPredicateNode"]:c5(),["RiskRule"]:c6(),["RiskRuleResponse"]:c7(),["SharedCodec159"]:c8(),["SharedCodec160"]:c9(),["SharedCodec161"]:c10(),["SharedCodec162"]:c11(),["SharedCodec163"]:c12(),["SharedCodec164"]:c13(),["SharedCodec165"]:c14(),["SharedCodec166"]:c15(),["SharedCodec167"]:c16(),["SharedCodec168"]:c17(),["SharedCodec535"]:c18(),["SharedCodec536"]:c19(),["SharedCodec537"]:c20(),["SharedCodec538"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRuleResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
