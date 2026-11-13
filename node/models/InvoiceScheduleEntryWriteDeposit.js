import { d7123 as c0, d7124 as c1 } from '../descriptors/data/332.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d912 as c2 } from '../descriptors/data/45.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c3 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6190 as c4, d6191 as c5, d6192 as c6, d6193 as c7, d6194 as c8, d6195 as c9, d6196 as c10 } from '../descriptors/data/280.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7172 as c11, d7173 as c12, d7174 as c13, d7175 as c14, d7176 as c15, d7178 as c16, d7179 as c17, d7180 as c18, d7181 as c19 } from '../descriptors/data/334.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7182 as c20 } from '../descriptors/data/335.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d912 as d912 } from '../descriptors/data/45.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d912;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteDeposit"]:c2(),["MoneyValue"]:c3(),["SharedCodec961"]:c4(),["SharedCodec962"]:c5(),["SharedCodec963"]:c6(),["SharedCodec964"]:c7(),["SharedCodec965"]:c8(),["SharedCodec966"]:c9(),["SharedCodec967"]:c10(),["SharedCodec971"]:c11(),["SharedCodec972"]:c12(),["SharedCodec973"]:c13(),["SharedCodec974"]:c14(),["SharedCodec975"]:c15(),["SharedCodec977"]:c16(),["SharedCodec978"]:c17(),["SharedCodec979"]:c18(),["SharedCodec980"]:c19(),["SharedCodec981"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteDeposit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
