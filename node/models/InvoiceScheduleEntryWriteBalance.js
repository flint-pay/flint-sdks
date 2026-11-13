import { d7123 as c0, d7124 as c1 } from '../descriptors/data/332.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d911 as c2 } from '../descriptors/data/45.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c3 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6190 as c4, d6191 as c5, d6192 as c6, d6193 as c7, d6194 as c8, d6195 as c9, d6196 as c10 } from '../descriptors/data/280.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7172 as c11, d7173 as c12, d7174 as c13, d7175 as c14, d7176 as c15, d7180 as c16 } from '../descriptors/data/334.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7182 as c17, d7187 as c18, d7188 as c19, d7189 as c20 } from '../descriptors/data/335.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d911 as d911 } from '../descriptors/data/45.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d911;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteBalance"]:c2(),["MoneyValue"]:c3(),["SharedCodec961"]:c4(),["SharedCodec962"]:c5(),["SharedCodec963"]:c6(),["SharedCodec964"]:c7(),["SharedCodec965"]:c8(),["SharedCodec966"]:c9(),["SharedCodec967"]:c10(),["SharedCodec971"]:c11(),["SharedCodec972"]:c12(),["SharedCodec973"]:c13(),["SharedCodec974"]:c14(),["SharedCodec975"]:c15(),["SharedCodec979"]:c16(),["SharedCodec981"]:c17(),["SharedCodec986"]:c18(),["SharedCodec987"]:c19(),["SharedCodec988"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteBalance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
