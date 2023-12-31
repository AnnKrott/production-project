import { profileReducer } from 'entities/Profile'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type reducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const reducers: reducersList = {
  profile: profileReducer
}

const ProfilePage = memo(() => {
  const { t } = useTranslation()

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
          {t('Profile Page')}
      </div>
    </DynamicModuleLoader>
  )
})

export default ProfilePage
