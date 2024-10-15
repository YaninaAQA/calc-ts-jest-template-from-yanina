export function generateCodeEst(): string {
  return 'EST-' + Math.floor(1000 + Math.random() * 9000)
}

export function generateCodeLva(): string {
  return 'LVA-' + Math.floor(1000 + Math.random() * 9000)
}

export function generateCodeLtu(): string {
  return 'LTU-' + Math.floor(1000 + Math.random() * 9000)
}
