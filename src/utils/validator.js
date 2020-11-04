export const required = value => value ? undefined : 'Required'
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const minValue = min => value => (value && value < min ? `Must be at least ${min}` : undefined)
export const maxValue = max => value => (value && value > max ? `Must be at bigest ${max}` : undefined)
