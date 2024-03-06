import { ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Tabs from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

type TabTriggerType = {
  disabled?: boolean
  title: string
  value: string
}

type CustomTabsProps = {
  children?: ReactNode
  defaultValue?: string
  onValueChange?: (value: string) => void
  tabs: TabTriggerType[]
  tabsName?: string
  value?: string
}

export const CustomTabs = (props: CustomTabsProps) => {
  const { children, defaultValue, onValueChange, tabs, tabsName, value } = props

  return (
    <div>
      <Typography>{tabsName}</Typography>
      <Tabs.Root
        className={s.tabsRoot}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        value={value}
      >
        <Tabs.List className={s.tabsList}>
          {tabs.map(tab => (
            <Tabs.Trigger
              className={`${s.tabsTriggerDefault} ${tab.disabled ? s.disabled : ''}`}
              disabled={tab.disabled}
              key={tab.value}
              value={tab.value}
            >
              {tab.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {children}
      </Tabs.Root>
    </div>
  )
}

type TabsContentProps = {
  children: ReactNode
  value: string
}

export const TabsContent = (props: TabsContentProps) => {
  const { children, value } = props

  return <Tabs.Content value={value}>{children}</Tabs.Content>
}