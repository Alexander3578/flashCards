import { appActions } from '@/app/appSlice'
import { AppDispatch } from '@/services/store'

export const handleError = (dispatch: AppDispatch, err: any) => {
  if (err instanceof Error) {
    dispatch(appActions.setAppError({ error: `Native error: ${err.message}` }))
  } else if (err) {
    const errMessage = err.data?.message || err.message || err.error || 'Unknown error'

    dispatch(appActions.setAppError({ error: errMessage }))
  } else {
    dispatch(appActions.setAppError({ error: 'Some error occurred!' }))
  }
}
