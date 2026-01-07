export function formatMoney(amountCents) {
    return `$${(amountCents / 100).toFixed(2)}`
}
// export function formatMoney(cents) {
//     return `$${((cents ?? 0) / 100).toFixed(2)}`;  // Handles undefined/null as 0
// }