import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

export function App() {
  return (
    <div>
      <Button>Hello</Button>
      <Button as={'a'}>Hello</Button>
      <Typography as={'a'} colorBalance={500} colorTheme={'danger'} variant={'link2'}>
        Hi
      </Typography>
    </div>
  )
}
