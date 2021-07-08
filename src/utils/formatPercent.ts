export function formatPercent(number: number, precision: number) {
  const dec = Math.pow(10, precision)
  const value = Math.floor(number * dec) / dec

  return value.toLocaleString('pt-BR', {
    style: 'decimal',
    currency: 'BRL'
  })
}
