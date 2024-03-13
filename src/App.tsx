import { LoginForm } from '@/components/auth/login-form/login-form'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table'
import { CustomTabs, TabsContent } from '@/components/ui/tabs'
import { Typography } from '@/components/ui/typography'

export function App() {
  return (
    <div>
      <Button>Hello</Button>
      <Button as={'a'}>Hello</Button>
      <Typography as={'a'} colorBalance={500} colorTheme={'danger'} variant={'link2'}>
        Hi
      </Typography>
      <CustomTabs
        defaultValue={'tab1'}
        tabs={[
          { title: 'My Cards', value: 'tab1' },
          { title: 'All Cards', value: 'tab2' },
        ]}
        tabsName={'Show docks cards'}
      >
        <TabsContent value={'tab1'}>
          Onecwcwcdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </TabsContent>
        <TabsContent value={'tab2'}>Two</TabsContent>
        <LoginForm />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant={'subtitle2'}>Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant={'subtitle2'}>Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant={'subtitle2'}>Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant={'subtitle2'}>Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant={'subtitle2'}>Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant={'subtitle2'}>Name</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant={'body2'}>ACSSSSSSSSSSSSSSSSSSSSSSSSSName</Typography>
              </TableCell>
              <TableCell>
                <Typography variant={'body2'}>Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant={'body2'}>Name</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CustomTabs>
    </div>
  )
}
