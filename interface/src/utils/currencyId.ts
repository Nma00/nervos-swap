import { Currency, PETH, Token } from 'nervoswap-sdk'

export function currencyId(currency: Currency): string {
  if (currency === PETH) return 'ETH'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
