import {useState} from 'react'

const useFriendStatus = (): string => {
  const [isOnline] = useState(false)

  return isOnline ? 'Online' : 'Offline'
}

export default useFriendStatus
