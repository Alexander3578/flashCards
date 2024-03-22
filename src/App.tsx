import { EditableForm } from '@/components/auth/editable-form'
import { BackToEmail } from '@/components/auth/forgorPassword/backToEmail'
import { CreateNewPasswordForm } from '@/components/auth/forgorPassword/createNewPassword-form/createNewPassword-form'
import { LoginForm } from '@/components/auth/login-form/login-form'
import { Button } from '@/components/ui/button'
import { CustomSlider } from '@/components/ui/slider'
import {
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table'
import { CustomTabs, TabsContent } from '@/components/ui/tabs'
import { Typography } from '@/components/ui/typography'

// export function App() {
//   return (
//     <Provider store={store}>
//       <Router />
//     </Provider>
//   )
// }
export function App() {
  return (
    <div>
      <Button>Hello</Button>
      <Button as={'a'}>Hello</Button>
      <Typography as={'a'} colorBalance={100} colorTheme={'danger'} variant={'link2'}>
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
              <TableHeadCell>
                <Typography variant={'subtitle2'}>Name</Typography>
              </TableHeadCell>
              <TableHeadCell>
                <Typography variant={'subtitle2'}>Name</Typography>
              </TableHeadCell>
              <TableHeadCell>
                <Typography variant={'subtitle2'}>Name</Typography>
              </TableHeadCell>
              <TableHeadCell>
                <Typography variant={'subtitle2'}>Name</Typography>
              </TableHeadCell>
              <TableHeadCell>
                <Typography variant={'subtitle2'}>Name</Typography>
              </TableHeadCell>
              <TableHeadCell>
                <Typography variant={'subtitle2'}>Name</Typography>
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableBodyCell>
                <Typography variant={'body2'}>ACSSSSSSSSSSSSSSSSSSSSSSSSSName</Typography>
              </TableBodyCell>
              <TableBodyCell>
                <Typography variant={'body2'}>Name</Typography>
              </TableBodyCell>
              <TableBodyCell>
                <Typography variant={'body2'}>Name</Typography>
              </TableBodyCell>
            </TableRow>
          </TableBody>
        </Table>
      </CustomTabs>
      <CustomSlider max={10} min={1} />
      <CreateNewPasswordForm />
      <EditableForm />
      <BackToEmail />
    </div>
  )
}
