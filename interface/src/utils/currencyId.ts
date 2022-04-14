import { Currency, CKB, Token } from 'nervoswap-sdk'

export function currencyId(currency: Currency): string {
  if (currency === CKB) return 'CKB'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
