import { cn } from './../../../utils/style.utils'
import { Container as RadixContainer } from '@radix-ui/themes'
// @ts-expect-error fix import type
import type { ContainerProps } from '@radix-ui/themes/dist/esm/components/container'

export function Container(props: ContainerProps) {
  const { className, ...other } = props
  return <RadixContainer className={cn('p-10', className)} {...other} />
}
