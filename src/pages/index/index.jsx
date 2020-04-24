import Taro, { useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import mapData from '~/utils/mapData'
import './index.less'


function Index({ dispatch }) {
  useEffect(() => {
    dispatch.test()
  }, [])
  const onCoverClick = () => {
    console.log('cover')
  }
  const onContentClick = () => {
    console.log('content')
  }
  return (
    <View className='index'>
      <View onClick={onContentClick} className='content'>
        123
      </View>
      <View onClick={onCoverClick} className='cover'>

      </View>
    </View>
  )
}


export default connect(...mapData(['global']))(Index);
