import { BugButton } from 'app/provider/ErrorBoundary'
import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

const MainPage = memo(() => {
  const { t } = useTranslation()

  const [value, setValue] = useState('')

  const onChange = (val: string) => {
    setValue(val)
  }

  return (
    <div>
        {t('Main Page')}
        <BugButton />
        <Input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Write smth here'
        />
    </div>
  )
})

export default MainPage
